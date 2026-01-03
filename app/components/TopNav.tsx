

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-black"
        >
          Khanna Architects
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-3 py-1 text-sm transition",
                  active
                    ? "bg-black/10 text-black"
                    : "text-black/70 hover:bg-black/5 hover:text-black",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Divider */}
          <span className="mx-1 hidden h-5 w-px bg-black/10 md:block" />

          {/* ✅ Free Design CTA with tooltip */}
          <div className="relative group">
            <Link
              href="/free-design"
              className={[
                "inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition",
                pathname === "/free-design"
                  ? "bg-blue-900 text-white"
                  : "bg-blue-700 text-white hover:bg-blue-800",
              ].join(" ")}
            >
              Free Design
              <span className="text-xs opacity-90">→</span>
            </Link>

            {/* Tooltip */}
            <div
              className="
                pointer-events-none absolute left-1/2 top-full z-50 mt-2
                w-max -translate-x-1/2 rounded-lg
                border border-black/10 bg-white px-3 py-1.5
                text-xs font-medium text-black shadow-md
                opacity-0 scale-95 transition
                group-hover:opacity-100 group-hover:scale-100
              "
            >
              5 slots / month

              {/* Tooltip arrow */}
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-black/10 bg-white" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
