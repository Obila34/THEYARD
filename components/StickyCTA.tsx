"use client";

import Link from "next/link";
import { useState } from "react";

export default function StickyCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="sticky-cta">
      <Link href="/newsletter">Join Smoke Signal →</Link>
      <span className="dismiss" onClick={() => setDismissed(true)}>
        × Dismiss
      </span>
    </div>
  );
}
