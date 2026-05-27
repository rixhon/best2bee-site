import { socialCompanies } from "./social.data";
import { SocialCompanyPill } from "./SocialCompanyPill";

export function SocialCompanies() {
  return (
    <ul
      aria-label="Empresas parceiras"
      className="relative z-10 mt-b2b-6 flex flex-wrap items-center justify-center gap-b2b-3 tablet:gap-b2b-4"
    >
      {socialCompanies.map((company) => (
        <SocialCompanyPill key={company} label={company} />
      ))}
    </ul>
  );
}
