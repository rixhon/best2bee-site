import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted tablet:flex-row tablet:items-center tablet:justify-between">
        <p>{SITE_CONFIG.name}</p>
        <p>Estrutura preparada para receber o layout final do Figma.</p>
      </Container>
    </footer>
  );
}
