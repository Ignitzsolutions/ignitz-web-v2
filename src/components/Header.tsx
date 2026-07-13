"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/content/site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menu, setMenu] = useState({ open: false, pathname });
  const open = menu.open && menu.pathname === pathname;

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu({ open: false, pathname });
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, pathname]);

  function isCurrent(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ignitz home">
        <BrandLogo />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link aria-current={isCurrent(item.href) ? "page" : undefined} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Discuss your initiative
      </Link>
      <button
        className="menu-button"
        ref={menuButtonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setMenu({ open: !open, pathname })}
      >
        <span />
        <span />
      </button>
      {open ? (
        <nav className="mobile-nav is-open" id="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              aria-current={isCurrent(item.href) ? "page" : undefined}
              key={item.href}
              href={item.href}
              onClick={() => setMenu({ open: false, pathname })}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button button-primary"
            href="/contact"
            onClick={() => setMenu({ open: false, pathname })}
          >
            Discuss your initiative
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
