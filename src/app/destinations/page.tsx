/**
 * Destinations page (/destinations) — "Explore All Destinations".
 *
 * Cloned from the mockup: heading + subtitle, a CATEGORY / PRICE RANGE /
 * SORT BY filter row (shadcn selects, no filtering wired yet), a live
 * "Showing n destinations" count, and the full destination grid rendered
 * with the shared DestinationCard. Renders dynamically (no caching).
 */
import { DestinationCard } from "@/components/destination-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/lib/destinations";

export const dynamic = "force-dynamic";

/** Starting filter text from the mock — CATEGORY / PRICE RANGE / SORT BY. */
const filters = [
  {
    name: "category",
    placeholder: "Category",
    items: ["Category", "Beach", "Cultural", "City", "Mountain", "Desert"],
  },
  {
    name: "price",
    placeholder: "Price Range",
    items: ["Price Range", "$0-$2000", "$2000-$3000", "$3000+"],
  },
  {
    name: "sort",
    placeholder: "Sort By",
    items: ["Sort By", "Price: Low to High", "Price: High to Low", "Rating"],
  },
];

export default function DestinationsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
      {/* Heading */}
      <h1 className="text-5xl font-semibold tracking-tight">
        Explore All Destinations
      </h1>
      <p className="mt-3 text-muted-foreground">
        Find your perfect travel experience from our curated collection
      </p>

      {/* Filter row — selects styled after the mock, not wired yet */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {filters.map((filter) => (
          <Select
            key={filter.name}
            name={filter.name}
            items={Object.fromEntries(filter.items.map((item) => [item, item]))}
          >
            <SelectTrigger
              className="h-12 w-full justify-between text-sm font-medium tracking-wide text-muted-foreground uppercase"
              aria-label={filter.name}
            >
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {filter.items.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                  className={
                    item === filter.placeholder
                      ? "text-muted-foreground"
                      : undefined
                  }
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>

      {/* Live count from the shared data source */}
      <p className="mt-6 text-sm text-muted-foreground">
        Showing {destinations.length} destinations
      </p>

      {/* Full destination grid — every card links to its details page */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.slug}
            destination={{
              ...destination,
              href: `/destinations/${destination.slug}`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
