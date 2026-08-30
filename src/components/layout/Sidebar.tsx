"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/utils";

type NavId = (typeof navItems)[number]["id"];

export function Sidebar() {
  const [activeId, setActiveId] = useState<NavId>(navItems[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: NavId) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("space-y-1", className)}>
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleClick(id)}
          className={cn(
            "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
            activeId === id
              ? "bg-accent/15 text-accent-light font-medium"
              : "text-muted hover:bg-white/5 hover:text-white",
          )}
        >
          {label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-white/10 lg:bg-surface lg:px-4 lg:py-8">
        <div className="mb-8 px-3">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">Konsep SI</p>
          <p className="mt-1 text-sm font-semibold">Pertemuan 1</p>
        </div>
        <NavLinks />
      </aside>

      {/* Mobile header + drawer */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-bg/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-xs text-muted">Konsep SI — Pertemuan 1</p>
            <p className="text-sm font-semibold">Dasar-Dasar Komputer</p>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-white/10 p-2 text-muted hover:bg-white/5"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-surface px-4 py-4">
            <NavLinks />
          </div>
        )}

        {!mobileOpen && (
          <div className="flex gap-2 overflow-x-auto px-4 pb-3">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleClick(id)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors",
                  activeId === id
                    ? "border-accent/40 bg-accent/15 text-accent-light"
                    : "border-white/10 text-muted hover:border-white/20",
                )}
              >
                {label.split(" / ")[0].split(" → ")[0]}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
