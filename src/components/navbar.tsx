"use client";

import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/add-destination", label: "Add destination" },
];

const rightLinks = [
  { href: "/destinations", label: "Our Destination" },
  { href: "/profile", label: "Profile", icon: true },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

function NavLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon?: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1 text-sm font-medium transition-colors",
        active
          ? "text-[#3d9ab8] underline underline-offset-4"
          : "text-foreground hover:text-[#3d9ab8]",
      )}
    >
      {icon ? <User className="size-4" /> : null}
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto grid h-14 w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-6">
        <nav className="flex items-center gap-8">
          {leftLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
            />
          ))}
        </nav>

        <Link
          href="/"
          className="justify-self-center"
          aria-label="Wanderlast home"
        >
          <Image
            src="/assets/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6 justify-self-end">
          {rightLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              active={pathname === link.href}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
