/**
 * Why Choose Wanderlust — trust-building section on a pale-blue band.
 *
 * Three white feature cards (icon asset + title + short description),
 * following the "Featured Destinations" section on the homepage.
 */
import Image from "next/image";

const whyItems = [
  {
    // Teal icon assets from public/assets/
    icon: "/assets/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/assets/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/assets/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#e4f3fa] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-center text-4xl font-semibold tracking-tight">
          Why Choose Wanderlust
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>

        {/* One card per selling point */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whyItems.map((item) => (
            <div key={item.title} className="bg-white p-6 shadow-sm">
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className="size-8"
              />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
