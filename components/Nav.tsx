"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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

  return (
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
    </motion.nav>
  );
}
