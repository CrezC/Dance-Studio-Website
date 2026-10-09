"use client";

import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConfirmDeleteButton({
  action,
  confirmMessage,
  children,
  className,
}: {
  action: () => void;
  confirmMessage: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmMessage)) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10",
          className,
        )}
      >
        <Trash2 className="size-3.5" aria-hidden="true" />
        {children}
      </button>
    </form>
  );
}
