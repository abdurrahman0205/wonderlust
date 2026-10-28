"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
/**
 * Featured destinations — a shadcn Carousel of destination cards on the
 * homepage. It takes a slice of the shared destinations data from
 * src/lib/destinations.ts (the full list lives on /destinations) and
 * each card links to its own details page (/destinations/<slug>).
 * The mockup's "1/n" row with round arrows is functional: it reports the
 * current page and scrolls the carousel.
 */
import { useEffect, useState } from "react";
import { DestinationCard } from "@/components/destination-card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { destinations } from "@/lib/destinations";

/* How many of the shared destinations to feature in the carousel. */
const FEATURED_COUNT = 3;

export function FeaturedDestinations() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [pages, setPages] = useState(1);

  // Track the carousel position so the "1/n" counter stays in sync.
  useEffect(() => {
    if (!api) {
      return;
    }
    setPages(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const featured = destinations.slice(0, FEATURED_COUNT);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
      {/* Section heading + subtitle, as in the mockup */}
      <h2 className="text-4xl font-semibold tracking-tight">
        Featured Destinations
      </h2>
      <p className="mt-2 text-muted-foreground">
        Handpicked travel experiences for the adventure seekers
      </p>

      {/* Card carousel: destinations from the shared data source */}
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        className="mt-10"
        aria-label="Featured destinations"
      >
        <CarouselContent>
          {featured.map((destination) => (
            <CarouselItem
              key={destination.slug}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <DestinationCard
                destination={{
                  ...destination,
                  href: `/destinations/${destination.slug}`,
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* "current/pages" counter + progress line + functional arrows */}
      <div className="mt-12 flex items-center justify-between">
        <p className="text-lg">
          {current}/{pages}
        </p>
        <div className="mx-8 h-px flex-1 bg-neutral-200" />
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous destinations"
            onClick={() => api?.scrollPrev()}
            className="flex size-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition-colors hover:border-neutral-400"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next destinations"
            onClick={() => api?.scrollNext()}
            className="flex size-11 items-center justify-center rounded-full border border-neutral-400 text-foreground transition-colors hover:border-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
