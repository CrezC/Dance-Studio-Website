import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between lg:px-2">
        <p>&copy; {new Date().getFullYear()} Cadence Dance Studio. All rights reserved.</p>
        <Link href="/waiver" className="hover:text-foreground hover:underline">
          Liability Waiver
        </Link>
      </div>
    </footer>
  );
}
