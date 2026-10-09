import Link from "next/link";
import { logout } from "./actions";

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Classes", href: "/admin/classes" },
  { label: "Instructors", href: "/admin/instructors" },
  { label: "Event Rental", href: "/admin/event-rental" },
  { label: "Waivers", href: "/admin/waivers" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="font-serif text-lg text-foreground">
              Cadence Admin
            </Link>
            <nav aria-label="Admin" className="hidden gap-1 sm:flex">
              {adminLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              View site
            </Link>
            <form action={logout}>
              <button type="submit" className="text-sm text-muted-foreground hover:text-foreground">
                Log out
              </button>
            </form>
          </div>
        </div>
        <nav aria-label="Admin" className="flex gap-1 overflow-x-auto border-t border-border px-6 py-2 sm:hidden">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
