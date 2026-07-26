"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { navItems, type NavItem } from "@/config/navItems";

export interface NavbarProps {
  items?: NavItem[];
  bagCount?: number;
  className?: string;
}

function AppleLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 384 512"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export default function Navbar({
  items = navItems,
  bagCount = 0,
  className = "",
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close any open overlay whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus the search field as soon as the search bar opens.
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // Escape closes whichever overlay is open.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setSearchOpen(false);
      setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function openSearch() {
    setSearchOpen(true);
    setMobileOpen(false);
  }

  function toggleMobile() {
    setMobileOpen((v) => !v);
    setSearchOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-11 border-b border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Apple"
          className="rounded-sm p-1 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60"
        >
          <AppleLogo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded px-0.5 py-0.5 text-xs font-normal tracking-tight transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 ${
                      active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search apple.com"
            aria-expanded={searchOpen}
            className="rounded p-1 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60"
          >
            <Search className="h-4 w-4" strokeWidth={1.75} />
          </button>

          <Link
            href="/bag"
            aria-label={bagCount > 0 ? `Bag, ${bagCount} items` : "Bag"}
            className="relative rounded p-1 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
            {bagCount > 0 && (
              <span className="absolute -right-1.5 -top-1 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-blue-500 px-1 text-[9px] font-semibold text-white">
                {bagCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="rounded p-1 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop search bar */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-11 hidden border-b border-white/10 bg-[#1d1d1f] md:block">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchOpen(false);
            }}
            className="mx-auto flex max-w-[800px] items-center gap-3 px-6 py-3"
          >
            <Search className="h-4 w-4 shrink-0 text-white/40" />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search apple.com"
              className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="shrink-0 text-xs text-white/50 transition-colors hover:text-white"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu drawer */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!mobileOpen}
        className="fixed inset-x-0 top-11 bottom-0 overflow-y-auto bg-[#1d1d1f] px-6 pb-10 pt-4 md:hidden z-10"
      >
        <ul className="divide-y divide-white/10">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-xl font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
