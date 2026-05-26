import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const colorGroups = [
  {
    title: "Honey",
    colors: [
      { name: "300", className: "bg-honey-300" },
      { name: "400", className: "bg-honey-400" },
      { name: "500", className: "bg-honey-500" },
      { name: "600", className: "bg-honey-600" },
    ],
  },
  {
    title: "Slate",
    colors: [
      { name: "50", className: "bg-slate-50" },
      { name: "100", className: "bg-slate-100" },
      { name: "300", className: "bg-slate-300" },
      { name: "500", className: "bg-slate-500" },
      { name: "700", className: "bg-slate-700" },
    ],
  },
  {
    title: "Surfaces",
    colors: [
      { name: "base", className: "bg-surface-base" },
      { name: "soft", className: "bg-surface-soft" },
      { name: "cool", className: "bg-surface-cool" },
      { name: "warm", className: "bg-surface-warm" },
    ],
  },
];

const spacingSamples = [
  { name: "space-2", className: "w-b2b-2" },
  { name: "space-4", className: "w-b2b-4" },
  { name: "space-6", className: "w-b2b-6" },
  { name: "space-8", className: "w-b2b-8" },
  { name: "space-10", className: "w-b2b-10" },
];

const radiusSamples = [
  { name: "xs", className: "rounded-b2b-xs" },
  { name: "sm", className: "rounded-b2b-sm" },
  { name: "lg", className: "rounded-b2b-lg" },
  { name: "xl", className: "rounded-b2b-xl" },
  { name: "pill", className: "rounded-b2b-pill" },
];

const shadowSamples = [
  { name: "card", className: "shadow-b2b-card" },
  { name: "card-sm", className: "shadow-b2b-card-sm" },
  { name: "button", className: "shadow-b2b-button" },
  { name: "menu", className: "shadow-b2b-menu" },
  { name: "pill", className: "shadow-b2b-pill" },
];

export function DesignSystemPreview() {
  return (
    <section className="border-b border-border bg-surface-soft py-b2b-8 tablet:py-b2b-9" id="design-system-preview">
      <Container>
        <div className="grid gap-b2b-7">
          <SectionTitle
            description="Secao temporaria para validar visualmente os tokens do Design System antes de aplicar o layout final do Figma."
            eyebrow="Design System"
            title="Preview dos tokens Best2bee"
          />

          <div className="grid gap-b2b-5 laptop:grid-cols-3">
            {colorGroups.map((group) => (
              <article className="rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card" key={group.title}>
                <h3 className="font-display text-heading font-medium text-ink-900">{group.title}</h3>
                <div className="mt-b2b-5 grid gap-b2b-3">
                  {group.colors.map((color) => (
                    <div className="flex items-center gap-b2b-3" key={color.name}>
                      <span className={`h-b2b-8 w-b2b-8 rounded-b2b-md border border-border ${color.className}`} />
                      <span className="font-mono text-caption uppercase text-slate-600">{color.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-b2b-5 laptop:grid-cols-2">
            <article className="rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card">
              <p className="font-mono text-eyebrow uppercase text-honey-500">Tipografia</p>
              <div className="mt-b2b-5 grid gap-b2b-4">
                <p className="font-display text-display-m font-light text-ink-900">Space Grotesk Display</p>
                <p className="font-body text-body-l text-slate-600">Inter para textos, descricoes e conteudo editorial.</p>
                <p className="font-mono text-caption uppercase text-slate-500">JetBrains Mono para eyebrows e labels</p>
              </div>
            </article>

            <article className="rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card">
              <p className="font-mono text-eyebrow uppercase text-honey-500">Botoes</p>
              <div className="mt-b2b-5 flex flex-wrap gap-b2b-3">
                <Button>Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="ink">Ink</Button>
              </div>
            </article>
          </div>

          <div className="grid gap-b2b-5 laptop:grid-cols-3">
            <article className="rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card">
              <p className="font-mono text-eyebrow uppercase text-honey-500">Cards</p>
              <div className="mt-b2b-5 rounded-b2b-xl border border-white/60 bg-[var(--b2b-glass-strong)] p-b2b-6 shadow-b2b-card backdrop-blur">
                <h3 className="font-display text-heading font-medium text-ink-900">Glass card</h3>
                <p className="mt-b2b-3 text-body-sm text-slate-600">Base visual para cards finais.</p>
              </div>
            </article>

            <article className="rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card">
              <p className="font-mono text-eyebrow uppercase text-honey-500">Espacamentos</p>
              <div className="mt-b2b-5 grid gap-b2b-3">
                {spacingSamples.map((sample) => (
                  <div className="flex items-center gap-b2b-3" key={sample.name}>
                    <span className={`block h-b2b-3 rounded-b2b-pill bg-honey-500 ${sample.className}`} />
                    <span className="font-mono text-caption uppercase text-slate-600">{sample.name}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card">
              <p className="font-mono text-eyebrow uppercase text-honey-500">Radii & sombras</p>
              <div className="mt-b2b-5 grid gap-b2b-4">
                {radiusSamples.map((sample) => (
                  <div className="flex items-center gap-b2b-3" key={sample.name}>
                    <span className={`h-b2b-8 w-b2b-10 bg-slate-100 ${sample.className}`} />
                    <span className="font-mono text-caption uppercase text-slate-600">radius {sample.name}</span>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-b2b-3">
                  {shadowSamples.map((sample) => (
                    <span
                      className={`rounded-b2b-lg bg-white p-b2b-3 text-center font-mono text-caption uppercase text-slate-600 ${sample.className}`}
                      key={sample.name}
                    >
                      {sample.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
