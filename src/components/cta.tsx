/**
 * CTA — final conversion banner at the bottom of the homepage.
 *
 * Dark island photo (CTA.png) with centered call-to-action text and the
 * white "Book Your Trip Today" button, closing the page before the footer.
 */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Cta() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 text-center text-white">
      {/* Banner background + dark overlay for text readability */}
      <Image
        src="/assets/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center px-6">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/90">
          Join thousands of travelers who have discovered the world with us
        </p>
        {/* One button → flagship destination's details page */}
        <Link
          href="/destinations/bali-paradise"
          className="mt-8 inline-flex h-12 items-center gap-2 bg-white px-8 text-sm font-medium tracking-wide uppercase text-black transition-colors hover:bg-neutral-200"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
