import Image from "next/image";
import { buttonClassName } from "@/components/ui/Button";
import { buttonClassNames } from "@/lib/styles";

export function HeroActions() {
  return (
    <a
      className={buttonClassName({
        className: buttonClassNames.heroPrimary,
        size: "md",
      })}
      href="#cta"
    >
      Agendar conversa
      <Image alt="" aria-hidden height={16} src="/figma/hero/arrow.svg" width={16} />
    </a>
  );
}
