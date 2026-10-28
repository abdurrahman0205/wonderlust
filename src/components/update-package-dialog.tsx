"use client";

/**
 * "Update Travel Package" dialog — opened by the Edit button on the
 * details page. The form is prefilled with the destination's current
 * data (title, country, category, price, duration, image URL,
 * description) so editing always starts from the real values.
 * Save/Cancel just close the dialog for now — no persistence yet.
 */
import { Save, SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { DestinationRecord } from "@/lib/destinations";

/** Options for the Category select in the edit form. */
const categories = [
  "Beach",
  "Cultural",
  "City",
  "Mountain",
  "Desert",
  "Adventure",
];

export function UpdatePackageDialog({
  destination,
}: {
  destination: DestinationRecord;
}) {
  return (
    <Dialog>
      {/* Edit button on the details page opens this dialog */}
      <DialogTrigger render={<Button variant="outline" className="h-9 px-4" />}>
        <SquarePen className="size-4" />
        Edit
      </DialogTrigger>

      <DialogContent className="max-w-xl p-8 sm:max-w-xl">
        <div>
          <DialogTitle className="text-2xl font-semibold tracking-tight">
            Update Travel Package
          </DialogTitle>
          <DialogDescription className="mt-2">
            Make changes to the travel package details below
          </DialogDescription>
        </div>

        {/* Prefilled with the destination's current data */}
        <form
          className="mt-2 flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault(); // no persistence wired yet
          }}
        >
          <Input
            defaultValue={destination.title}
            name="title"
            className="h-10"
            aria-label="Package title"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label
              htmlFor="package-country"
              className="flex flex-col gap-1.5 text-sm font-medium"
            >
              Country
              <Input
                defaultValue={destination.location}
                id="package-country"
                name="country"
                className="h-10 font-normal"
              />
            </label>

            <label
              htmlFor="package-category"
              className="flex flex-col gap-1.5 text-sm font-medium"
            >
              Category
              <Select
                items={Object.fromEntries(categories.map((c) => [c, c])) ?? {}}
                defaultValue={destination.category}
                id="package-category"
                name="category"
              >
                <SelectTrigger className="h-10 w-full font-normal">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>

            <label
              htmlFor="package-price"
              className="flex flex-col gap-1.5 text-sm font-medium"
            >
              Price (USD)
              <Input
                type="number" // numeric convenience; no hard validation
                defaultValue={destination.pricePerPerson}
                id="package-price"
                name="price"
                className="h-10 font-normal"
              />
            </label>

            <label
              htmlFor="package-duration"
              className="flex flex-col gap-1.5 text-sm font-medium"
            >
              Duration
              <Input
                defaultValue={destination.duration}
                id="package-duration"
                name="duration"
                className="h-10 font-normal"
              />
            </label>
          </div>

          <label
            htmlFor="package-departureDate"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Departure Date
            <Input
              type="text"
              placeholder="mm/dd/yyyy"
              defaultValue=""
              id="package-departureDate"
              name="departureDate"
              className="h-10 font-normal"
            />
          </label>

          <label
            htmlFor="package-imageUrl"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Image URL
            <Input
              defaultValue={destination.image}
              id="package-imageUrl"
              name="imageUrl"
              className="h-10 font-normal"
            />
          </label>

          <label
            htmlFor="package-description"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Description
            <Textarea
              defaultValue={destination.overview}
              id="package-description"
              name="description"
              className="min-h-28 font-normal"
              placeholder="Describe the travel experience..."
            />
          </label>

          {/* Footer actions: red Cancel (kept from the mock), teal Save */}
          <div className="mt-2 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              className="border-red-300 px-4 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="size-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#3d9ab8] px-4 text-white hover:bg-[#3d9ab8]/90"
            >
              <Save className="size-4" />
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
