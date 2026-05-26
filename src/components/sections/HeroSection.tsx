"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Solução", href: "#services" },
  { label: "Processo", href: "#process" },
  { label: "Talentos", href: "#benefits" },
  { label: "Contato", href: "#contact" },
] as const;

const stats = [
  {
    value: "48h",
    label: "Setup Rápido",
    description: "Developer integrado ao time",
  },
  {
    value: "95%",
    label: "Match Rate",
    description: "Fit cultural e técnico",
  },
  {
    value: "100%",
    label: "Compliance",
    description: "CLT e conformidade total",
  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.2, 0.7, 0.2, 1],
    },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[720px] overflow-hidden border-b border-border bg-background tablet:min-h-[780px] laptop:min-h-[720px] desktop:min-h-[900px] wide:min-h-[960px]"
      id="hero"
    >
      <HeroBackground />
      <HeroNavigation />

      <Container className="relative z-10 min-h-[720px] pb-b2b-8 pt-[148px] tablet:min-h-[780px] tablet:pt-[180px] laptop:min-h-[720px] laptop:pt-[clamp(218px,23.5vw,302px)] desktop:min-h-[900px] desktop:px-0 wide:min-h-[960px]">
        <motion.div
          animate={shouldReduceMotion ? false : "visible"}
          className="mx-auto w-full max-w-[1280px] laptop:w-[min(1280px,calc(100vw-18vw))]"
          initial={shouldReduceMotion ? false : "hidden"}
          variants={containerVariants}
        >
          <motion.h1
            className="max-w-[1290px] text-balance font-display text-[clamp(42px,7vw,64px)] font-light leading-[.99] tracking-[var(--b2b-tracking-display)] text-ink-900 laptop:text-[clamp(56px,5.6vw,var(--b2b-fs-display-xl))]"
            id="hero-title"
            variants={itemVariants}
          >
            <span className="block">
              Escale sua <strong className="font-medium">equipe</strong> com
            </span>
            <span className="block">
              developers de <strong className="font-medium">alta performance</strong>
            </span>
          </motion.h1>

          <motion.p
            className="mt-[18px] max-w-[766px] font-body text-[clamp(16px,1.41vw,var(--b2b-fs-body-xl))] leading-[1.48] text-slate-700/90"
            variants={itemVariants}
          >
            Talentos do Brasil, impacto na Europa. Processos ágeis, compliance total e
            developers prontos para entregar resultados.
          </motion.p>

          <motion.div
            className="mt-[clamp(56px,6.8vw,96px)] flex flex-col items-stretch gap-b2b-3 tablet:flex-row tablet:items-center laptop:justify-center"
            variants={itemVariants}
          >
            <a
              className={buttonClassName({
                className:
                  "min-h-[clamp(38px,3.08vw,48px)] min-w-[clamp(164px,12.58vw,196px)] px-[clamp(22px,1.66vw,26px)] py-0 text-[clamp(13px,.9vw,14px)]",
                size: "md",
              })}
              href="#calendly"
            >
              Agendar conversa
              <Image alt="" aria-hidden height={16} src="/figma/hero/arrow.svg" width={16} />
            </a>
            <a
              className={buttonClassName({
                className:
                  "min-h-[clamp(38px,3.08vw,48px)] min-w-[clamp(118px,9.5vw,148px)] border-white/70 bg-white/35 px-[clamp(18px,1.66vw,26px)] py-0 text-[clamp(13px,.9vw,14px)] backdrop-blur-md",
                size: "md",
                variant: "ghost",
              })}
              href="#services"
            >
              Ver solução
            </a>
          </motion.div>

          <motion.div className="mt-b2b-4 flex justify-center" variants={itemVariants}>
            <HeroScrollIndicator />
          </motion.div>

          <motion.div className="mt-[-34px]" variants={itemVariants}>
            <HeroStats />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(168.76deg,rgba(0,38,96,.5)_12.09%,rgba(255,255,255,.5)_35.77%),linear-gradient(90deg,#fff_0%,#fff_100%)]" />
      <Image
        alt=""
        className="absolute inset-0 h-full w-full scale-[1.18] object-cover opacity-40 laptop:scale-125"
        fill
        priority
        quality={82}
        sizes="100vw"
        src="/figma/hero/background.png"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_95%,rgba(255,210,77,.42),transparent_30%),radial-gradient(circle_at_92%_88%,rgba(254,154,0,.24),transparent_28%)]" />
    </div>
  );
}

function HeroNavigation() {
  return (
    <Container className="absolute left-1/2 top-[28px] z-20 -translate-x-1/2 px-0">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex min-h-[clamp(50px,4.22vw,66px)] w-[min(1280px,calc(100vw-clamp(40px,16vw,250px)))] items-center justify-between rounded-b2b-pill border border-white/60 bg-[linear-gradient(90deg,rgba(255,255,255,0)_6%,rgba(255,255,255,.85)_32%)] px-[clamp(18px,1.66vw,26px)] shadow-b2b-menu backdrop-blur-md"
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
          {navItems.map((item) => (
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
    </Container>
  );
}

function HeroStats() {
  return (
    <dl className="mx-auto grid w-full max-w-[829px] gap-b2b-5 overflow-hidden rounded-b2b-xl border border-white/55 bg-[var(--b2b-glass-medium)] p-b2b-6 shadow-b2b-card backdrop-blur-[10px] tablet:grid-cols-3 tablet:px-[clamp(28px,3.26vw,51px)] tablet:py-[clamp(18px,1.6vw,25px)] laptop:w-[53.1vw]">
      {stats.map((stat) => (
        <div className="grid gap-b2b-2" key={stat.label}>
          <dt className="font-mono text-[clamp(9px,.7vw,11px)] uppercase tracking-[.18em] text-slate-700">
            {stat.label}
          </dt>
          <dd className="-order-1 font-display text-[clamp(25px,2.25vw,35.2px)] font-light leading-none tracking-[-.04em] text-ink-900">
            {stat.value}
          </dd>
          <dd className="font-body text-[clamp(13px,1vw,var(--b2b-fs-body-sm))] leading-[1.7] text-slate-700">
            {stat.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function HeroScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex h-[40px] w-[24px] justify-center rounded-b2b-pill border-2 border-honey-500 bg-white px-[10px] pb-[2px] pt-[10px]">
      <motion.span
        animate={shouldReduceMotion ? false : { y: [0, 6, 0] }}
        className="h-[12px] w-[4px] rounded-b2b-pill bg-honey-500"
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
