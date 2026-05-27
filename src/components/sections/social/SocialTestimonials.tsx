import { cx, layoutClassNames } from "@/lib/styles";
import { socialTestimonials } from "./social.data";
import { SocialRevealItem, SocialStagger } from "./SocialReveal.client";
import { SocialTestimonialCard } from "./SocialTestimonialCard";

export function SocialTestimonials() {
  return (
    <SocialStagger className={cx("relative z-10 mt-b2b-7", layoutClassNames.threeCardGrid)}>
      {socialTestimonials.map((testimonial) => (
        <SocialRevealItem className="h-full w-full" key={testimonial.name} variant="scaleIn">
          <SocialTestimonialCard {...testimonial} />
        </SocialRevealItem>
      ))}
    </SocialStagger>
  );
}
