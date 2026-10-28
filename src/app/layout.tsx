import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Wanderlust",
  description:
    "Your gateway to extraordinary travel experiences around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(josefinSans.className, josefinSans.variable)}>
      <body className={cn("min-h-full flex flex-col", inter.variable)}>
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
