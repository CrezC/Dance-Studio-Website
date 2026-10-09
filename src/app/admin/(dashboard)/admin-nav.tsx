"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarRange,
  Users,
  Building2,
  FileCheck2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Classes", href: "/admin/classes", icon: CalendarRange },
  { label: "Instructors", href: "/admin/instructors", icon: Users },
  { label: "Event Rental", href: "/admin/event-rental", icon: Building2 },
  { label: "Waivers", href: "/admin/waivers", icon: FileCheck2 },
];

export function AdminNav({ orientation }: { orientation: "vertical" | "horizontal" }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin"
      className={cn(
        orientation === "vertical"
          ? "flex flex-col gap-1"
          : "flex gap-1 overflow-x-auto",
      )}
    >
      {adminLinks.map((link) => {
        const isActive = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
              orientation === "horizontal" && "shrink-0 rounded-full",
              isActive
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <link.icon className="size-4" aria-hidden="true" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
