import Image from "next/image";

export function SquadsBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-surface-cool" />
      <Image
        alt=""
        className="object-cover opacity-20"
        fill
        quality={82}
        sizes="100vw"
        src="/figma/squads/background.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-surface-cool/70 to-surface-cool/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(254,154,0,.06),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(147,197,253,.1),transparent_24%)]" />
    </div>
  );
}
