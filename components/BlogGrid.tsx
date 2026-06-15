"use client";

import { useState } from "react";
import ArticleCard, { ArticleMeta } from "./ArticleCard";

const FILTERS = ["ALL", "AI", "STARTUPS", "OPINION", "TOOLS"];

export default function BlogGrid({ articles }: { articles: ArticleMeta[] }) {
  const [active, setActive] = useState("ALL");

  const filtered =
    active === "ALL"
      ? articles
      : articles.filter((a) => a.category.toUpperCase() === active);

  return (
    <>
      <div className="pills">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`pill ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="page-sub">No stories in this category yet. Check back soon.</p>
      ) : (
        <div className="card-grid-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </>
  );
}
