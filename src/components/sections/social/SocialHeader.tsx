import { socialSectionContent } from "./social.data";

export function SocialHeader() {
  return (
    <header className="relative z-10 text-center">
      <p className="font-mono text-[clamp(1rem,2vw,1.875rem)] font-normal uppercase leading-none tracking-[0.15125rem] text-honey-500">
        {socialSectionContent.eyebrow}
      </p>
      <h2
        className="mt-b2b-3 text-balance font-display text-[clamp(2.5rem,5vw,3.45rem)] font-light leading-[1.02] tracking-[var(--b2b-tracking-h2)] text-ink-900"
        id="social-title"
      >
        {socialSectionContent.title}
      </h2>
    </header>
  );
}
