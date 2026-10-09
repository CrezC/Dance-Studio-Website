import Link from "next/link";
import { ExternalLink, LogOut } from "lucide-react";
import { logout } from "./actions";
import { AdminNav } from "./admin-nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border md:flex">
        <div className="flex h-16 items-center px-6">
          <Link href="/admin" className="font-serif text-lg text-foreground">
            Cadence Admin
          </Link>
        </div>
        <div className="flex-1 px-3">
          <AdminNav orientation="vertical" />
        </div>
        <div className="space-y-1 border-t border-border p-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            View site
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <LogOut className="size-4" aria-hidden="true" />
              Log out
            </button>
          </form>
        </div>
      </aside>

      <div className="flex-1">
        <header className="border-b border-border md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/admin" className="font-serif text-lg text-foreground">
              Cadence Admin
            </Link>
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
          <div className="border-t border-border px-6 py-2">
            <AdminNav orientation="horizontal" />
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-10 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
