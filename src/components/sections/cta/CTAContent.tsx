import Image from "next/image";
import { buttonClassName } from "@/components/ui/Button";
import { ctaBenefitItems } from "./cta.data";

export function CTAContent() {
  return (
    <div className="mx-auto max-w-[48rem] text-center">
      <p className="font-mono text-eyebrow uppercase text-honey-500">Pronto para comecar?</p>

      <h2
        className="mt-b2b-5 font-display text-[clamp(2.5rem,5.8vw,4.375rem)] font-light leading-[1.03] tracking-[var(--b2b-tracking-display)] text-ink-900"
        id="cta-title"
      >
        <span className="font-medium">Pronto</span> para escalar sua equipe?
      </h2>

      <p className="mx-auto mt-b2b-5 max-w-[38.5rem] font-body text-[clamp(1rem,1.55vw,var(--b2b-fs-body-l))] text-slate-600">
        Agende uma conversa e descubra como podemos acelerar seu crescimento com os melhores
        talentos tech do Brasil.
      </p>

      <a
        aria-label="Agendar reuniao"
        className={buttonClassName({ className: "mt-b2b-7 min-w-[11.5rem]" })}
        href="#cta"
      >
        Agendar reuniao
        <Image alt="" aria-hidden height={16} src="/figma/hero/arrow.svg" width={16} />
      </a>

      <ul className="mt-[clamp(2.5rem,3.8vw,3.5rem)] flex flex-wrap items-center justify-center gap-x-b2b-5 gap-y-b2b-3">
        {ctaBenefitItems.map((item) => (
          <li className="inline-flex items-center gap-b2b-2 text-meta text-slate-700" key={item.label}>
            <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-honey-400" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

