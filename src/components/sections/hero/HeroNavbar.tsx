import Image from "next/image";
import { heroNavItems } from "./hero.data";

export function HeroNavbar() {
  return (
    <div className="fixed inset-x-0 top-[28px] z-[var(--b2b-z-nav)] px-[var(--b2b-container-pad-m)] tablet:px-[var(--b2b-container-pad-t)] laptop:px-[64px] desktop:px-[var(--b2b-container-pad-d)]">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[4.125rem] w-full max-w-[80rem] items-center justify-between rounded-[12.5rem] border border-[rgba(153,153,153,0)] bg-[linear-gradient(90deg,rgba(153,153,153,0)_18.8%,rgba(255,255,255,.55)_41.3%)] px-[clamp(18px,1.66vw,26px)] shadow-b2b-menu backdrop-blur-md"
      >
        <a aria-label="Best2bee - início" href="#hero">
          <Image
            alt="Best2bee"
            className="h-auto w-[clamp(154px,16.7vw,261px)]"
            height={59}
            priority
            src="/figma/hero/logo.png"
            width={261}
          />
        </a>
        <ul className="hidden items-center gap-[10px] tablet:flex">
          {heroNavItems.map((item) => (
            <li key={item.href}>
              <a
                className="rounded-b2b-pill px-[14px] py-b2b-2 font-body text-meta font-medium text-slate-600 transition-colors duration-[var(--b2b-dur-fast)] ease-[var(--b2b-ease-out)] hover:text-ink-900"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
