"use client";

import { useState, FormEvent } from "react";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) setDone(true);
  }

  return (
    <section className="newsletter-strip">
      <div className="newsletter-inner">
        <h2 className="nl-head">Stay in the Loop.</h2>
        <p className="nl-sub">
          The Smoke Signal — weekly AI &amp; startup news from across Africa.
        </p>

        {done ? (
          <p className="nl-stat">◆ You&apos;re on the list. Welcome to The Yard.</p>
        ) : (
          <form className="nl-form" onSubmit={handleSubmit}>
            <input
              className="nl-input"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn-molten">
              Subscribe
            </button>
          </form>
        )}

        <p className="nl-stat">Join 0+ readers</p>
      </div>
    </section>
  );
}
