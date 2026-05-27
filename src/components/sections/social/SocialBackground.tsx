import Image from "next/image";

export function SocialBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#fdfdfe] to-surface-soft" />
      <Image
        alt=""
        className="object-cover object-[center_15%] opacity-20"
        fill
        quality={82}
        sizes="100vw"
        src="/figma/social/background.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-surface-soft/80" />
    </div>
  );
}
