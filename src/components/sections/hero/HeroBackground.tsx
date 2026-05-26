import Image from "next/image";

export function HeroBackground() {
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
