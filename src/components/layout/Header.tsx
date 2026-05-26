import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <a className="text-sm font-semibold tracking-tight text-foreground" href="#hero">
          {SITE_CONFIG.name}
        </a>
        <nav aria-label="Navegacao principal" className="hidden items-center gap-6 tablet:flex">
          {NAV_ITEMS.map((item) => (
            <a
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className={buttonClassName()} href="#cta">
          Falar com especialista
        </a>
      </Container>
    </header>
  );
}
