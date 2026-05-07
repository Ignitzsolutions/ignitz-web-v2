"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/content/site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ignitz home">
        <BrandLogo />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Book workshop
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span />
        <span />
      </button>
      <div className={open ? "mobile-nav is-open" : "mobile-nav"} id="mobile-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link className="button button-primary" href="/contact" onClick={() => setOpen(false)}>
          Book workshop
        </Link>
      </div>
    </header>
  );
}
