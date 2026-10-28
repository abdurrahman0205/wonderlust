"use client";

import { ArrowRight, Check } from "lucide-react";
/**
 * Booking card — right column of the destination details page.
 * "Starting from" price + per person, a travel date picker
 * (popover with a mini calendar so the date is selectable), the teal
 * Book Now button, and the green-check perks list.
 */
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { DestinationRecord } from "@/lib/destinations";

/* Perks listed under the Book Now button. */
const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

/** Formats a date as 05/15/2026, matching the mockup. */
function formatTravelDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
}

export function BookingCard({
  destination,
}: {
  destination: DestinationRecord;
}) {
  const defaultDate = new Date(2026, 4, 15); // May 15, 2026 (mockup default)
  const [travelDate, setTravelDate] = useState<Date | undefined>(defaultDate);

  return (
    <div className="w-full border border-neutral-200 bg-white p-6">
      <p className="text-sm text-muted-foreground">Starting from</p>
      <p className="mt-2 text-4xl font-semibold text-[#3d9ab8]">
        ${destination.pricePerPerson}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">per person</p>

      {/* Travel date — click to open the mini calendar and pick a date */}
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="mt-6 h-10 w-full justify-between font-normal text-foreground"
            />
          }
        >
          {formatTravelDate(travelDate) || "mm/dd/yyyy"}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            selected={travelDate}
            onSelect={(date) => setTravelDate(date as Date | undefined)}
            defaultMonth={defaultDate}
          />
        </PopoverContent>
      </Popover>

      <Link
        href="#"
        className="mt-4 flex h-11 items-center justify-center gap-2 bg-[#3d9ab8] text-sm font-medium text-white transition-colors hover:bg-[#3d9ab8]/90"
      >
        Book Now
        <ArrowRight className="size-4" />
      </Link>

      {/* Perks under the button */}
      <ul className="mt-6 space-y-3">
        {perks.map((perk) => (
          <li
            key={perk}
            className="flex items-center gap-2 text-sm text-foreground/90"
          >
            <Check className="size-4 shrink-0 text-green-600" />
            {perk}
          </li>
        ))}
      </ul>
    </div>
  );
}
