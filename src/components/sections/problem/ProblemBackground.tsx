import Image from "next/image";

export function ProblemBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-surface-cool" />
      <div className="absolute left-0 top-0 h-[76%] w-[123%] opacity-20">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="123vw"
          src="/figma/problem/background.png"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.14)_0%,rgba(238,244,250,.72)_24%,rgba(234,242,248,.96)_100%)]" />
      <div className="absolute inset-0 opacity-5">
        <Image
          alt=""
          className="h-full w-full object-cover"
          fill
          sizes="100vw"
          src="/figma/problem/decor-icon.svg"
        />
      </div>
    </div>
  );
}
