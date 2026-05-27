import Image from "next/image";

export function StackBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-soft via-surface-base to-surface-base" />
      <Image
        alt=""
        className="object-cover opacity-10"
        fill
        quality={82}
        sizes="100vw"
        src="/figma/stack/background.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(254,154,0,.08),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(147,197,253,.12),transparent_24%)]" />
    </div>
  );
}
