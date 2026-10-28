/**
 * Hero — the first section of the homepage.
 *
 * Full-bleed banner photo (Banner.png) with the "Discover Your Next
 * Adventure" headline, subtitle, the two CTAs, and the location/date/
 * budget/people search strip pinned to the hero's bottom edge, as in the
 * mockup. The search bar is decorative for now (static values).
 */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[600px] flex-col justify-center overflow-hidden">
      {/* Banner background + slight dark overlay for text readability */}
      <Image
        src="/assets/Banner.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Headline + subtitle + CTA buttons */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
        <h1 className="text-6xl leading-[1.05] tracking-tight md:text-8xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA — sends visitors to browse all destinations */}
          <Link
            href="/destinations"
            className="inline-flex h-12 items-center gap-2 bg-[#3d9ab8] px-8 text-sm font-medium tracking-wide uppercase text-white transition-colors hover:bg-[#3d9ab8]/90"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </Link>
          {/* Secondary CTA — opens the flagship destination's details page */}
          <Link
            href="/destinations/bali-paradise"
            className="inline-flex h-12 items-center bg-neutral-400/60 px-8 text-sm font-medium tracking-wide uppercase text-white backdrop-blur-sm transition-colors hover:bg-neutral-400/80"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search strip: Location / Date+Duration / Budget / People + Search */}
      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 divide-x divide-white/30 bg-neutral-500/60 text-white backdrop-blur-sm md:grid-cols-[1.6fr_1.6fr_1.6fr_1.6fr_1.5fr]">
        <div className="px-6 py-3">
          <p className="text-lg font-semibold">Location</p>
          <p className="text-sm text-white/85">Address, City Or Zip</p>
        </div>
        <div className="px-6 py-3">
          <p className="text-lg font-semibold">Date+Duration</p>
          <p className="text-sm text-white/85">Anytime/3 Days</p>
        </div>
        <div className="px-6 py-3">
          <p className="text-lg font-semibold">Budget</p>
          <p className="text-sm text-white/85">$0-$3000</p>
        </div>
        <div className="px-6 py-3">
          <p className="text-lg font-semibold">People</p>
          <p className="text-sm text-white/85">5-10</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center bg-[#3d9ab8] text-lg font-medium text-white transition-colors hover:bg-[#3d9ab8]/90 max-md:col-span-2"
        >
          Search
        </button>
      </div>
    </section>
  );
}
