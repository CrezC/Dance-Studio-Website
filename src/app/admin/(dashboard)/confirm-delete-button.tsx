"use client";

export function ConfirmDeleteButton({
  action,
  confirmMessage,
  children,
}: {
  action: () => void;
  confirmMessage: string;
  children: React.ReactNode;
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
      <button type="submit" className="text-sm text-destructive hover:underline">
        {children}
      </button>
    </form>
  );
}
