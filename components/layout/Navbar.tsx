"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, ChevronDown, User, X } from "lucide-react";
import { NavItem } from "@/types";
import { navItems } from "@/lib/data/navigation";
import AppleLogo from "@/components/ui/AppleLogo";

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
  const centerNavRef = useRef<HTMLDivElement>(null);
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
    if (searchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [searchOpen]);

  // Click outside closes the search bar
  useEffect(() => {
    if (!searchOpen) return;

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (
        centerNavRef.current &&
        !centerNavRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
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

  function toggleSearch() {
    setSearchOpen((prev) => !prev);
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

          {/* Desktop nav & expandable search container */}
          <div
            ref={centerNavRef}
            dir="rtl"
            className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${
              searchOpen
                ? "flex-1 max-w-2xl mx-6 rounded-full border border-black/15 bg-white px-4 py-2 shadow-xs"
                : "rounded-full border border-black/10 bg-white px-6 py-2.5"
            }`}
          >
            <div className="relative flex w-full items-center justify-center">
              {/* Nav links */}
              <nav
                aria-label="Global"
                className={`transition-all duration-200 ease-in-out ${
                  searchOpen
                    ? "pointer-events-none absolute opacity-0 scale-95 invisible"
                    : "opacity-100 scale-100 visible"
                }`}
              >
                <ul className="flex items-center gap-8">
                  {items.map((item) => {
                    const active = pathname === item.href;
                    const hasDropdown = item.href === "/categories";

                    return (
                      <li key={item.href} className="flex items-center whitespace-nowrap">
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

              {/* Search Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className={`flex w-full items-center gap-3 transition-all duration-200 ease-in-out ${
                  searchOpen
                    ? "opacity-100 scale-100 visible pointer-events-auto"
                    : "pointer-events-none absolute opacity-0 scale-95 invisible"
                }`}
              >
                <Search className="h-4.5 w-4.5 shrink-0 text-black/50" strokeWidth={1.75} />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="جستجو در محصولات..."
                  className="w-full bg-transparent text-sm text-black placeholder:text-black/40 focus:outline-none font-normal"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="بستن جستجو"
                  className="shrink-0 rounded-full p-1 text-black/50 transition-colors hover:bg-black/5 hover:text-black focus-visible:outline-1 focus-visible:outline-black/60"
                >
                  <X className="h-4.5 w-4.5" strokeWidth={1.75} />
                </button>
              </form>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggleSearch}
              aria-label="جستجو"
              aria-expanded={searchOpen}
              className="rounded p-1 text-black/80 transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-white/60"
            >
              {! searchOpen && <Search className="h-5 w-5" strokeWidth={1.75} />}
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
