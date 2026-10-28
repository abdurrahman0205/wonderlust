/**
 * Testimonials — "What Travelers Say".
 *
 * Two quote cards (quote + author + traveler photo) with decorative
 * circular prev/next buttons, mirroring the mockup.
 */

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were lush and the cultural experiences were unforgettable.",
    name: "Michael Chen",
    place: "Singapore",
    photo: "/assets/person1.png",
  },
  {
    quote:
      "Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!",
    name: "Sarah Johnson",
    place: "New York, USA",
    photo: "/assets/person2.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading + (decorative) carousel arrows */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">
              What Travelers Say
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition-colors hover:border-neutral-400"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-neutral-400 text-foreground transition-colors hover:border-foreground"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* One bordered card per testimonial: quote left, photo right */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex items-stretch gap-5 border border-neutral-200 bg-white p-5"
            >
              <div className="flex flex-1 flex-col">
                <p className="text-[15px] leading-snug font-medium text-foreground/90">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto pt-6">
                  <p className="text-sm font-medium text-[#3d9ab8]">
                    — {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {testimonial.place}
                  </p>
                </div>
              </div>
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={218}
                height={264}
                className="h-full w-32 shrink-0 object-cover md:w-36"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
