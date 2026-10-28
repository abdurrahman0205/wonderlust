"use client";

/**
 * "Delete Travel Package" confirmation — opened by the red Cancel button
 * on the details page. Pure design clone: red icon chip, warning text
 * with the package title, Cancel + red "Delete Package" actions. No
 * actual deletion happens yet.
 */
import { AlertTriangle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DeletePackageDialog({
  destinationTitle,
}: {
  destinationTitle: string;
}) {
  return (
    <Dialog>
      {/* Red Cancel button on the details page triggers this dialog */}
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="h-9 border-red-300 px-4 text-red-500 hover:bg-red-50 hover:text-red-600"
          />
        }
      >
        <Trash2 className="size-4" />
        Cancel
      </DialogTrigger>

      <DialogContent className="max-w-xl p-8 sm:max-w-xl">
        {/* Warning icon + title */}
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="size-6 text-red-500" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">
            Delete Travel Package
          </h2>
        </div>

        {/* Confirmation copy with the package title bolded */}
        <p className="text-sm leading-relaxed text-foreground/80">
          Are you sure you want to delete "<strong>{destinationTitle}</strong>"?
          This action cannot be undone and will permanently remove this travel
          package from the system.
        </p>

        {/* Actions: plain Cancel left of the red delete button, right-aligned */}
        <div className="mt-2 flex items-center justify-end gap-3">
          <DialogClose render={<Button variant="outline" className="px-6" />}>
            Cancel
          </DialogClose>
          <Button
            type="button"
            className="bg-red-500 px-4 text-white hover:bg-red-600"
          >
            <Trash2 className="size-4" />
            Delete Package
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
