"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The /admin section has its own nav/shell (see admin/(dashboard)/layout.tsx)
  // and shouldn't also get the public site's nav and footer.
  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
