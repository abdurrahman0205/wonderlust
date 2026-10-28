/**
 * Homepage.
 *
 * Composed of one component per section, in visual order, each living in
 * its own file under src/components/ (see the comment above its usage):
 * right now: Hero → FeaturedDestinations → WhyChoose → Testimonials → Cta.
 */

import { Cta } from "@/components/cta";
import { FeaturedDestinations } from "@/components/featured-destinations";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <>
      {/* Hero: banner + headline + CTAs + search strip (hero.tsx) */}
      <Hero />

      {/* Featured destinations: card grid, each card links to its details page (featured-destinations.tsx) */}
      <FeaturedDestinations />

      {/* Trust factors: Safe & Secure / Expert Guides / 24-7 Support (why-choose.tsx) */}
      <WhyChoose />

      {/* Traveler quotes with photos (testimonials.tsx) */}
      <Testimonials />

      {/* Bottom conversion banner (cta.tsx) */}
      <Cta />
    </>
  );
}
