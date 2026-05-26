import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const decisionsDir = path.join(rootDir, "docs", "architecture", "decisions");
const templatePath = path.join(decisionsDir, "template.md");
const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Uso: npm run adr:new -- "Titulo da decisao"');
  process.exit(1);
}

mkdirSync(decisionsDir, { recursive: true });

const files = existsSync(decisionsDir) ? readdirSync(decisionsDir) : [];
const currentNumbers = files
  .map((fileName) => fileName.match(/^(\d{4})-.+\.md$/)?.[1])
  .filter(Boolean)
  .map(Number);

const nextNumber = String((Math.max(0, ...currentNumbers) || 0) + 1).padStart(4, "0");
const slug = slugify(title) || "decisao";
const fileName = `${nextNumber}-${slug}.md`;
const filePath = path.join(decisionsDir, fileName);

if (existsSync(filePath)) {
  console.error(`ADR ja existe: ${path.relative(rootDir, filePath)}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const template = readFileSync(templatePath, "utf8");
const content = template
  .replace("# ADR-0000 - Titulo da decisao", `# ADR-${nextNumber} - ${title}`)
  .replace("YYYY-MM-DD", today);

writeFileSync(filePath, content, "utf8");

console.log(`ADR criado: ${path.relative(rootDir, filePath)}`);

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
