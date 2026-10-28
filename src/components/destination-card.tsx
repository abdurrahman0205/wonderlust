import { ArrowUpRight, Calendar, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type Destination = {
  image: string;
  imageAlt?: string;
  rating: number;
  location: string;
  title: string;
  pricePerPerson: number;
  duration: string;
  href?: string;
};

export function DestinationCard({
  destination,
  className,
}: {
  destination: Destination;
  className?: string;
}) {
  const {
    image,
    imageAlt,
    rating,
    location,
    title,
    pricePerPerson,
    duration,
    href = `/destinations/${title}`,
  } = destination;

  return (
    <Card className={cn("relative gap-3 py-0", className)}>
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-sm font-medium text-black">
        {rating.toFixed(1)}
        <Star className="size-4 fill-current" />
      </div>

      <Image
        src={image}
        alt={imageAlt ?? title}
        width={800}
        height={438}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="aspect-video w-full object-cover"
      />

      <CardContent className="flex flex-col gap-2.5 pb-1">
        <div className="flex items-center gap-1.5 text-sm text-foreground/80">
          <MapPin className="size-4 text-muted-foreground" />
          {location}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="shrink-0">
            <span className="text-2xl font-semibold">${pricePerPerson}</span>
            <span className="text-sm text-muted-foreground">/Person</span>
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-foreground/80">
          <Calendar className="size-4 text-muted-foreground" />
          {duration}
        </div>

        <Link
          href={href}
          className="mt-1 inline-flex items-center gap-1 text-sm font-medium tracking-wide text-[#3d9ab8] uppercase underline underline-offset-4 hover:text-[#3d9ab8]/80"
        >
          Book Now
          <ArrowUpRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
