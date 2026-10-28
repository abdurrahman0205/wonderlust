/**
 * My Profile page (/profile).
 *
 * Cloned from the mockup with dummy data: left profile card (avatar with
 * camera badge, name, location, member-since/nationality rows, teal
 * Edit Profile button) and right "Travel Statistics" — a 2x2 grid of
 * stat cards with colored icon chips. Renders dynamically (no caching).
 */

import {
  Banknote,
  Camera,
  Globe,
  MapPin,
  PlaneTakeoff,
  SquarePen,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

/* Dummy profile data — swap for real data later. */
const profile = {
  photo: "/assets/person2.png",
  name: "Sarah Mitchell",
  location: "San Francisco, CA",
  memberSince: "Mar 2024",
  nationality: "United States",
};

/* Statistics cards: light colored icon chips as in the mock. */
const stats = [
  {
    label: "Total Bookings",
    value: "12",
    icon: PlaneTakeoff,
    chip: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "Countries Visited",
    value: "18",
    icon: Globe,
    chip: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "Upcoming Trips",
    value: "2",
    icon: TrendingUp,
    chip: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    label: "Total Spent",
    value: "$15,750",
    icon: Banknote,
    chip: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },
];

export default function ProfilePage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
      {/* Heading */}
      <h1 className="text-5xl font-semibold tracking-tight">My Profile</h1>
      <p className="mt-3 text-muted-foreground">
        Manage your account settings and travel preferences
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr]">
        {/* Left: profile card */}
        <div className="border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center pt-2 text-center">
            {/* Avatar with teal camera badge bottom-right */}
            <div className="relative">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={160}
                height={160}
                className="size-36 rounded-full object-cover"
              />
              <button
                type="button"
                aria-label="Change profile photo"
                className="absolute right-0 bottom-1 flex size-9 items-center justify-center rounded-full bg-[#3d9ab8] text-white transition-colors hover:bg-[#3d9ab8]/90"
              >
                <Camera className="size-4" />
              </button>
            </div>

            <h2 className="mt-4 text-2xl font-semibold">{profile.name}</h2>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {profile.location}
            </p>
          </div>

          <hr className="mt-6 border-neutral-200" />

          {/* Account facts: label left, value right */}
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Member since</span>
              <span className="font-semibold">{profile.memberSince}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Nationality</span>
              <span className="font-semibold">{profile.nationality}</span>
            </div>
          </div>

          {/* Decorative action — no edit flow yet */}
          <Button
            type="button"
            className="mt-8 h-11 w-full bg-[#3d9ab8] text-white hover:bg-[#3d9ab8]/90"
          >
            <SquarePen className="size-4" />
            Edit Profile
          </Button>
        </div>

        {/* Right: travel statistics, 2x2 grid of stat cards */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Travel Statistics
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-xl font-semibold">{stat.value}</p>
                </div>
                <span
                  className={`flex size-11 items-center justify-center rounded-full ${stat.chip}`}
                >
                  <stat.icon className={`size-5 ${stat.iconColor}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
