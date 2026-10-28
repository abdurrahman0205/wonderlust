"use client";

import { SaveIcon, Trash2Icon } from "lucide-react";
import { DM_Sans } from "next/font/google";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";

const displayFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const CATEGORIES = [
  "Beach",
  "Mountain",
  "City Tour",
  "Adventure",
  "Cultural",
  "Luxury",
  "Family",
];

const initialForm = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const AddDestinationPage = () => {
  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("New travel package:", form);

    const res = await fetch("http://localhost:5100/add-destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const responseFromServer = await res.json();

    if (responseFromServer?.status) {
      toast.add({
        type: "success",
        title: "Travel destination added successfully!",
      });
    } else {
      toast.add({
        type: "error",
        title: "Travel destination add unsuccessfull.",
      });
    }

    console.log(responseFromServer);

    handleReset();
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-16">
        <h1
          className={`mt-16 text-5xl font-normal tracking-tight text-neutral-900 md:text-6xl ${displayFont.className}`}
        >
          Add New Travel Package
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 w-full max-w-2xl rounded-xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Destination Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Bali Paradise"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                // required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="Indonesia"
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  // required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(value) =>
                    updateField("category", value ?? "")
                  }
                >
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price">Price (USD)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="e.g., 1299"
                  value={form.price}
                  onChange={(e) => updateField("price", e.target.value)}
                  // required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  value={form.duration}
                  onChange={(e) => updateField("duration", e.target.value)}
                  // required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="departureDate">Departure Date</Label>
              <Input
                id="departureDate"
                name="departureDate"
                type="date"
                value={form.departureDate}
                onChange={(e) => updateField("departureDate", e.target.value)}
                // required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={form.imageUrl}
                onChange={(e) => updateField("imageUrl", e.target.value)}
                // required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the travel experience..."
                className="min-h-32"
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                // required
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="gap-2 border-red-200 bg-white px-6 text-red-600 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2Icon />
              Cancel
            </Button>
            <Button
              type="submit"
              className="gap-2 bg-sky-400 px-6 text-white hover:bg-sky-500"
            >
              <SaveIcon />
              Add Travel Package
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddDestinationPage;
