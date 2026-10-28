/**
 * Destination details page — /destinations/[slug].
 *
 * Layout cloned from the mockup: back link + Edit/Cancel actions
 * (Edit opens the prefilled "Update Travel Package" dialog, Cancel opens
 * a "Delete Travel Package" confirmation), the trip hero photo, then a
 * two-column body — trip info (location, title, rating, overview,
 * highlights) on the left and the booking card (price, mini-calendar
 * date picker, Book Now, perks) on the right.
 *
 * Data comes from src/lib/destinations.ts, the same source the homepage
 * and destinations pages use. Unknown slugs render a 404. The page
 * renders dynamically (no caching/static generation).
 */

import { ArrowLeft, Calendar, Check, MapPin, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingCard } from "@/components/booking-card";
import { DeletePackageDialog } from "@/components/delete-package-dialog";
import { UpdatePackageDialog } from "@/components/update-package-dialog";
import { getDestination } from "@/lib/destinations";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  return {
    title: destination ? `${destination.title} — Wanderlust` : "Wanderlust",
  };
}

export default async function DestinationDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
      {/* Top bar: back link left, Edit / Cancel (delete confirmation) right */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
          {/* Edit opens the prefilled update dialog (update-package-dialog.tsx) */}
          <UpdatePackageDialog destination={destination} />
          {/* Cancel opens the delete confirmation (delete-package-dialog.tsx) */}
          <DeletePackageDialog destinationTitle={destination.title} />
        </div>
      </div>

      {/* Trip hero photo, cloned from the mockup */}
      <Image
        src={destination.image}
        alt={destination.imageAlt ?? destination.title}
        width={1340}
        height={505}
        sizes="100vw"
        className="mt-6 aspect-[1340/505] h-auto w-full rounded-[10px] object-cover"
        priority
      />

      <hr className="mt-10 border-neutral-200" />

      {/* Two-column body: trip info left, booking card right */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        {/* Left column: trip info */}
        <div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {destination.location}
          </div>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight">
            {destination.title}
          </h1>

          {/* Rating + duration row, star matched green as in the mockup */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <Star className="size-4 fill-green-600 text-green-600" />
              {destination.rating}
              <span className="font-normal text-muted-foreground">
                ({destination.reviews} reviews)
              </span>
            </span>
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <Calendar className="size-4 text-muted-foreground" />
              {destination.duration}
            </span>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Overview</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {destination.overview}
          </p>

          {/* Highlights: repeated intro line + green-check list, as in the mockup */}
          <h2 className="mt-10 text-2xl font-semibold">Highlights</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {destination.overview}
          </p>

          <ul className="mt-6 grid max-w-2xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {destination.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 text-sm text-foreground/90"
              >
                <Check className="size-4 shrink-0 text-green-600" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: booking card with mini-calendar date picker */}
        <aside>
          <BookingCard destination={destination} />
        </aside>
      </div>
    </div>
  );
}
