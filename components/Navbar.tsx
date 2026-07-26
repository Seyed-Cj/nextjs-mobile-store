"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, ChevronDown, User } from "lucide-react";
import { NavItem } from "@/types";
import { navItems } from "@/constants/navItems";

export interface NavbarProps {
  items?: NavItem[];
  bagCount?: number;
  className?: string;
}

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
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
  const mounted = useIsMounted();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [prevPathname, setPrevPathname] = useState(pathname);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Close overlays when pathname changes (render-phase state sync)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setSearchOpen(false);
  }

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      if (
        drawerRef.current &&
        drawerRef.current.contains(document.activeElement)
      ) {
        hamburgerBtnRef.current?.focus();
      }
      return;
    }

    const drawerElement = drawerRef.current;
    if (!drawerElement) return;

    const focusableElements = drawerElement.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      const currentFocusables = drawerElement
        ? drawerElement.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
          )
        : [];

      if (currentFocusables.length === 0) return;

      const firstElement = currentFocusables[0];
      const lastElement = currentFocusables[currentFocusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 md:bg-[#fbfafd]/90 ${mobileOpen ? "bg-white" : "bg-[#f6f5f8]/90"} h-18 ${className}`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Apple"
            className="rounded-sm p-1 text-black/80 transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-white/60"
          >
            <AppleLogo />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Global"
            dir="rtl"
            className="hidden rounded-full border border-black/10 bg-white px-6 py-3 md:block"
          >
            <ul className="flex items-center gap-8">
              {items.map((item) => {
                const active = pathname === item.href;
                const hasDropdown = item.href === "/categories";

                return (
                  <li key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-1 rounded px-0.5 py-0.5 text-sm font-normal tracking-tight transition-colors focus-visible:outline-1 focus-visible:outline-white/60 ${
                        active ? "text-black" : "text-black/80 hover:text-black"
                      }`}
                    >
                      {item.label}
                      {hasDropdown && (
                        <ChevronDown
                          className="h-4 w-4 text-black/60"
                          strokeWidth={1.5}
                        />
                      )}
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
              className="rounded p-1 text-black/80 transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-white/60"
            >
              <Search className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <Link
              href="/bag"
              aria-label={bagCount > 0 ? `Bag, ${bagCount} items` : "Bag"}
              className="relative rounded p-1 text-black/80 transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-white/60"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
              {bagCount > 0 && (
                <span className="absolute -top-1 -right-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-blue-500 px-1 text-[9px] font-semibold text-black">
                  {bagCount}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="rounded p-1 text-black/80 transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-white/60"
            >
              <User className="h-5.5 w-5.5" strokeWidth={1.75} />
            </Link>

            <button
              ref={hamburgerBtnRef}
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="rounded p-1 text-black/80 transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-white/60 md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    mobileOpen ? "top-1.5 rotate-45" : "top-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    mobileOpen ? "top-1.5 -rotate-45" : "top-3 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop search bar */}
        {searchOpen && (
          <div className="absolute inset-x-0 top-9 hidden border-b border-black/10 bg-white md:block">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchOpen(false);
              }}
              className="mx-auto flex max-w-200 items-center gap-3 px-6 py-3"
            >
              <Search className="h-4 w-4 shrink-0 text-black/40" />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search apple.com"
                className="w-full bg-transparent text-sm text-black placeholder-white/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="shrink-0 text-xs text-black/50 transition-colors hover:text-black"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </header>
      {mounted &&
        createPortal(
          <nav
            ref={drawerRef}
            id="mobile-nav"
            aria-label="Mobile"
            aria-hidden={!mobileOpen}
            className={`fixed inset-x-0 top-14 bottom-0 z-60 overflow-y-auto overscroll-contain bg-white px-6 pt-4 pb-10 transition-all duration-300 ease-out motion-reduce:transition-none md:hidden ${
              mobileOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
            }`}
          >
            <ul className="divide-y divide-black/10">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-xl font-medium text-black/90 transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>,
          document.body,
        )}
    </>
  );
}
