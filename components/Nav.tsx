"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/news", label: "News" },
  { href: "/demos", label: "Demos" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/community", label: "Community" }
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 200], [0.18, 0.4]);
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(22,18,14,0.92)", "rgba(22,18,14,0.98)"]
  );

  // Mobile menu state (only surfaces <= 768px via CSS)
  const [open, setOpen] = useState(false);

  // Lock background scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        className="nav"
        style={{
          background: bg,
          borderBottomColor: useTransform(
            borderOpacity,
            (o) => `rgba(255,90,0,${o})`
          )
        }}
      >
        <Link href="/" className="nav-logo">
          The<b>—</b>Yard
        </Link>

        {/* Desktop nav — hidden <= 768px (see globals.css) */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/newsletter" className="nav-cta">
              Join The Yard
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger — hidden on desktop, shown <= 768px.
            Toggles the menu and morphs into an X while open. */}
        <button
          className={`nav-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      {/* Slide-down mobile menu — compact panel (not full screen),
          smoothly animated in/out by framer-motion. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-overlay-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="nav-overlay-link"
              onClick={() => setOpen(false)}
            >
              Join The Yard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
