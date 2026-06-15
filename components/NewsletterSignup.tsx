"use client";

import { useState, FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) setDone(true);
  }

  if (done) {
    return (
      <p className="nl-stat" style={{ marginBottom: 50, fontSize: 13 }}>
        ◆ You&apos;re subscribed. The next Smoke Signal lands Thursday.
      </p>
    );
  }

  return (
    <form className="nl-form-lg" onSubmit={handleSubmit}>
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
        Subscribe Free
      </button>
    </form>
  );
}
