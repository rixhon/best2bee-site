import Image from "next/image";
import { cx } from "@/lib/styles";

type SquadsImageProps = {
  className?: string;
};

export function SquadsImage({ className }: SquadsImageProps) {
  return (
    <figure className={cx("relative h-full w-full overflow-hidden", className)}>
      <Image
        alt="Equipe de profissionais de tecnologia colaborando em ambiente corporativo"
        className="object-cover object-[40%_6%]"
        fill
        quality={88}
        sizes="(max-width: 1279px) 100vw, 36vw"
        src="/figma/squads/team.png"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-surface-cool/35 desktop:to-surface-cool/55"
      />
    </figure>
  );
}
