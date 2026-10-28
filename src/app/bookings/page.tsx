/**
 * My Bookings page (/bookings).
 *
 * Cloned from the mockup: "My Bookings" heading + subtitle, then rows of
 * booking cards — image left, status badge / title / departure / booking
 * id / price in the middle, and Cancel + View buttons on the right.
 * Bookings come from src/lib/destinations.ts (same data the cards use),
 * so "View" opens that trip's details page. Cancel is decorative for
 * now. Renders dynamically (no caching).
 */

import { Calendar, CircleCheck, Clock, Eye, Tag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bookings, getDestination } from "@/lib/destinations";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

/** Badge colors per status, matching the mock. */
const statusStyles = {
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
} as const;

export default function BookingsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
      {/* Heading */}
      <h1 className="text-5xl font-semibold tracking-tight">My Bookings</h1>
      <p className="mt-3 text-muted-foreground">
        Manage and view your upcoming travel plans
      </p>

      {/* One bordered row per booking */}
      <div className="mt-10 flex flex-col gap-6">
        {bookings.map((booking) => {
          const destination = getDestination(booking.destinationSlug);
          if (!destination) {
            return null; // booking whose destination was removed
          }
          return (
            <div
              key={booking.id}
              className="flex flex-col gap-6 border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center"
            >
              {/* Trip image, left */}
              <Image
                src={destination.image}
                alt={destination.title}
                width={411}
                height={231}
                className="aspect-[411/231] w-full object-cover sm:w-64 shrink-0"
              />

              {/* Trip info, middle */}
              <div className="flex flex-1 flex-col gap-1.5">
                <span
                  className={cn(
                    "flex w-fit items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium",
                    statusStyles[booking.status],
                  )}
                >
                  {booking.status === "Confirmed" ? (
                    <CircleCheck className="size-3.5" />
                  ) : (
                    <Clock className="size-3.5" />
                  )}
                  {booking.status}
                </span>

                <h2 className="text-2xl font-semibold tracking-tight">
                  {destination.title}
                </h2>

                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="size-4" />
                  Departure: {booking.departureDate}
                </p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Tag className="size-4" />
                  Booking ID: {booking.id}
                </p>

                <p className="mt-2 text-3xl font-semibold text-[#3d9ab8]">
                  ${destination.pricePerPerson}
                </p>
              </div>

              {/* Actions, right: red Cancel + teal View (details page) */}
              <div className="flex items-center gap-3 sm:flex-col">
                <Button
                  variant="outline"
                  className="border-red-300 px-4 text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                  Cancel
                </Button>
                <Button
                  className="bg-[#3d9ab8] px-4 text-white hover:bg-[#3d9ab8]/90"
                  render={<Link href={`/destinations/${destination.slug}`} />}
                >
                  <Eye className="size-4" />
                  View
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
