/**
 * Dummy destination data — the single source of truth for destinations.
 *
 * The featured cards on the homepage and the details page
 * (/destinations/[slug]) both read from this list, so every card links to
 * a real, matching details view via its slug. Replace with real data/API
 * later — fields here cover both surfaces.
 */
export type DestinationRecord = {
  /** URL path segment (/destinations/<slug>) used to open the details page */
  slug: string;
  /** Image shown on the card and as the details page hero */
  image: string;
  /** Optional caption for the image (falls back to the title) */
  imageAlt?: string;
  /** Country / region shown with the pin icon */
  location: string;
  /** Trip name */
  title: string;
  /** Average rating shown as the "4.5 ★" badge / "4.5 (n reviews)" */
  rating: number;
  /** Number of reviews behind the rating */
  reviews: number;
  /** Trip length, e.g. "7 Days/6 Nights" */
  duration: string;
  /** Category used by the edit dialog and destinations page filter */
  category: string;
  /** Price shown on cards ($2700/Person) and as "Starting from" on details */
  pricePerPerson: number;
  /** Summary paragraph on the details page */
  overview: string;
  /** Green-check list on the details page */
  highlights: string[];
};

export const destinations: DestinationRecord[] = [
  {
    slug: "bali-paradise",
    image: "/assets/destinations/image1.png",
    location: "Indonesia",
    title: "Bali Paradise",
    rating: 4.5,
    reviews: 234,
    duration: "7 Days/6 Nights",
    category: "Beach",
    pricePerPerson: 2700,
    overview:
      "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
    highlights: [
      "Luxury beachfront accommodation",
      "Traditional Balinese spa treatment",
      "Sunrise trek to Mount Batu",
      "Visit Uluwatu Temple at sunset",
      "Private beach dinner experience",
    ],
  },
  {
    slug: "kathmandu-valley",
    image: "/assets/destinations/image2.png",
    location: "Nepal",
    title: "Kathmandu Valley",
    rating: 4.8,
    reviews: 187,
    duration: "5 Days/4 Nights",
    category: "Cultural",
    pricePerPerson: 2100,
    overview:
      "Immerse yourself in the cultural heart of Nepal with ancient temples, bustling markets, and Himalayan backdrops. Wander through centuries of history and local tradition.",
    highlights: [
      "Guided heritage site tour",
      "Traditional Nepali dinner experience",
      "Mountain viewpoint hike",
      "Local artisan workshop visit",
      "Sunrise over the Himalayas",
    ],
  },
  {
    slug: "bali-island",
    image: "/assets/destinations/image3.png",
    location: "Indonesia",
    title: "Bali Island",
    rating: 4.7,
    reviews: 156,
    duration: "6 Days/5 Nights",
    category: "Beach",
    pricePerPerson: 2500,
    overview:
      "Escape to the island of the gods with crystal-clear waters, hidden lagoons, and cliffside temples. A perfect blend of relaxation and adventure.",
    highlights: [
      "Private beach villa stay",
      "Snorkeling day trip",
      "Cliffside temple sunset tour",
      "Rice terrace cycling tour",
      "Beachfront yoga sessions",
    ],
  },
  {
    slug: "venice-riviera",
    image: "/assets/destinations/image4.png",
    location: "Italy",
    title: "Venice & Italian Riviera",
    rating: 4.9,
    reviews: 312,
    duration: "8 Days/7 Nights",
    category: "Cultural",
    pricePerPerson: 3100,
    overview:
      "Drift through Venetian canals and along the colorful coastal towns of the Italian Riviera. Art, history, and seaside charm in one unforgettable journey.",
    highlights: [
      "Gondola ride through the canals",
      "Doge's Palace guided visit",
      "Cinque Terre coastal boat tour",
      "Authentic trattoria dinner",
      "Murano glass workshop",
    ],
  },
  {
    slug: "bora-bora",
    image: "/assets/destinations/image5.png",
    location: "French Polynesia",
    title: "Bora Bora",
    rating: 4.9,
    reviews: 201,
    duration: "6 Days/5 Nights",
    category: "Beach",
    pricePerPerson: 3400,
    overview:
      "Overwater bungalows, turquoise lagoons, and world-class diving. Bora Bora is the ultimate island escape for honeymoons and once-in-a-lifetime trips.",
    highlights: [
      "Overwater bungalow stay",
      "Lagoon snorkeling cruise",
      "Private motu picnic",
      "Sunset catamaran tour",
      "Couples' spa experience",
    ],
  },
  {
    slug: "atacama-desert",
    image: "/assets/destinations/image6.png",
    location: "Chile",
    title: "Atacama Desert",
    rating: 4.6,
    reviews: 98,
    duration: "4 Days/3 Nights",
    category: "Desert",
    pricePerPerson: 1800,
    overview:
      "The driest place on Earth offers salt flats, geysers, and the clearest skies for stargazing anywhere on the planet. Otherworldly landscapes, unforgettable nights.",
    highlights: [
      "Valle de la Luna sunset tour",
      "El Tatio geyser field visit",
      "Stargazing with an astronomer",
      "Cejar lagoon swim",
      "San Pedro village tour",
    ],
  },
];

/**
 * Look up a destination by its slug. Used by /destinations/[slug] —
 * unknown slugs fall through (the page renders a 404 itself).
 */
export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

/**
 * Dummy bookings — derived from the destinations above so every booking
 * row can link ("View") to the matching details page. Expand or replace
 * this array when real data arrives.
 */
export type BookingRecord = {
  id: string;
  destinationSlug: string;
  status: "Confirmed" | "Pending";
  departureDate: string; // display string, e.g. "May 15, 2026"
};

export const bookings: BookingRecord[] = destinations
  .slice(0, 3)
  .map((destination, index) => ({
    id: `b${index + 1}`,
    destinationSlug: destination.slug,
    status: index === 2 ? "Pending" : "Confirmed",
    departureDate: "May 15, 2026",
  }));
