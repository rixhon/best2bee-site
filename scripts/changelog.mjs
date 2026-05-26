import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const changelogPath = path.join(process.cwd(), "CHANGELOG.md");
const emptyEntry = "- Nenhuma mudanca registrada.";
const categoryByType = {
  breaking: "Breaking Changes",
  feature: "Features",
  improvement: "Melhorias",
  fix: "Correcoes",
};

const command = process.argv[2];
const options = parseOptions(process.argv.slice(3));

if (command === "add") {
  addEntry(options);
} else if (command === "release") {
  releaseVersion(options);
} else {
  printUsageAndExit();
}

function addEntry({ type, message }) {
  const category = categoryByType[type];

  if (!category) {
    fail(`Tipo invalido. Use: ${Object.keys(categoryByType).join(", ")}`);
  }

  if (!message) {
    fail('Mensagem obrigatoria. Exemplo: --message "Descricao da mudanca"');
  }

  let content = readChangelog();
  content = ensureUnreleased(content);
  content = upsertUnreleasedCategory(content, category);
  content = insertEntryInCategory(content, category, message);

  writeFileSync(changelogPath, content, "utf8");
  console.log(`Entrada registrada em ${category}: ${message}`);
}

function releaseVersion({ version }) {
  if (!version) {
    fail('Versao obrigatoria. Exemplo: --version 0.2.0');
  }

  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    fail("Versao invalida. Use SemVer: MAJOR.MINOR.PATCH");
  }

  let content = readChangelog();
  content = ensureUnreleased(content);

  if (content.includes(`## [${version}]`)) {
    fail(`A versao ${version} ja existe no CHANGELOG.md`);
  }

  const match = findUnreleased(content);
  const unreleasedBody = normalizeReleasedBody(match.body);
  const today = new Date().toISOString().slice(0, 10);
  const nextUnreleased = buildEmptyUnreleased();
  const releasedBlock = `## [${version}] - ${today}\n${unreleasedBody}`;
  const nextContent =
    content.slice(0, match.start) +
    nextUnreleased +
    "\n" +
    releasedBlock +
    content.slice(match.end);

  writeFileSync(changelogPath, nextContent, "utf8");
  console.log(`Versao ${version} registrada em CHANGELOG.md`);
}

function ensureUnreleased(content) {
  if (content.includes("## [Unreleased]")) {
    return content;
  }

  const firstVersionIndex = content.search(/\n## \[/);
  const block = `${buildEmptyUnreleased()}\n`;

  if (firstVersionIndex === -1) {
    return `${content.trimEnd()}\n\n${block}`;
  }

  return `${content.slice(0, firstVersionIndex + 1)}${block}${content.slice(firstVersionIndex + 1)}`;
}

function readChangelog() {
  return readFileSync(changelogPath, "utf8").replace(/\r\n/g, "\n");
}

function upsertUnreleasedCategory(content, category) {
  const match = findUnreleased(content);

  if (match.body.includes(`### ${category}`)) {
    return content;
  }

  const nextBody = `${match.body.trimEnd()}\n\n### ${category}\n\n${emptyEntry}\n`;
  return content.slice(0, match.bodyStart) + nextBody + content.slice(match.bodyEnd);
}

function insertEntryInCategory(content, category, message) {
  const match = findUnreleased(content);
  const categoryRegex = new RegExp(
    `(### ${escapeRegExp(category)}\\n\\n)([\\s\\S]*?)(?=\\n### |$)`,
  );
  const categoryMatch = match.body.match(categoryRegex);

  if (!categoryMatch) {
    fail(`Categoria nao encontrada em Unreleased: ${category}`);
  }

  const rawItems = categoryMatch[2].replace(emptyEntry, "").trimEnd();
  const nextItems = `${rawItems ? `${rawItems}\n` : ""}- ${message}\n`;
  const nextCategoryBlock = `${categoryMatch[1]}${nextItems}`;
  const nextBody = match.body.replace(categoryRegex, nextCategoryBlock);

  return content.slice(0, match.bodyStart) + nextBody + content.slice(match.bodyEnd);
}

function normalizeReleasedBody(body) {
  return ensureAllCategories(body)
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd();
}

function ensureAllCategories(body) {
  return Object.values(categoryByType).reduce((nextBody, category) => {
    if (nextBody.includes(`### ${category}`)) {
      return nextBody;
    }

    return `${nextBody.trimEnd()}\n\n### ${category}\n\n${emptyEntry}\n`;
  }, body);
}

function findUnreleased(content) {
  const regex = /## \[Unreleased\]\n(?<body>[\s\S]*?)(?=\n## \[|\s*$)/;
  const match = content.match(regex);

  if (!match || match.index === undefined || !match.groups) {
    fail("Secao ## [Unreleased] nao encontrada.");
  }

  const start = match.index;
  const end = start + match[0].length;
  const bodyStart = start + "## [Unreleased]\n".length;
  const bodyEnd = end;

  return {
    body: match.groups.body,
    bodyEnd,
    bodyStart,
    end,
    start,
  };
}

function buildEmptyUnreleased() {
  const sections = Object.values(categoryByType)
    .map((category) => `### ${category}\n\n${emptyEntry}`)
    .join("\n\n");

  return `## [Unreleased]\n\n${sections}\n`;
}

function parseOptions(args) {
  const result = {};

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (!arg.startsWith("--")) {
      continue;
    }

    const key = arg.slice(2);
    const value = args[index + 1];

    if (!value || value.startsWith("--")) {
      fail(`Valor ausente para --${key}`);
    }

    result[key] = value;
    index += 1;
  }

  return result;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function printUsageAndExit() {
  console.log(`Uso:
  npm run changelog:add -- --type feature --message "Descricao da mudanca"
  npm run changelog:release -- --version 0.2.0

Tipos:
  ${Object.keys(categoryByType).join(", ")}`);
  process.exit(1);
}
