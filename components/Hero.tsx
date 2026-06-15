"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArticleMeta } from "./ArticleCard";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const line = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return d;
  }
}

export default function Hero({ latest }: { latest?: ArticleMeta }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={line}>
            <span className="hero-stamp">
              EST. 2026 · AFRICA · AI COMMUNITY
            </span>
          </motion.div>

          <h1>
            <motion.span variants={line} style={{ display: "block" }}>
              Where
            </motion.span>
            <motion.span variants={line} style={{ display: "block" }}>
              Africa&apos;s
            </motion.span>
            <motion.span
              variants={line}
              className="molten"
              style={{ display: "block" }}
            >
              Builders
            </motion.span>
            <motion.span
              variants={line}
              className="molten"
              style={{ display: "block" }}
            >
              Think.
            </motion.span>
          </h1>

          <motion.p variants={line} className="hero-sub">
            The Yard is Africa&apos;s AI tech community — <b>blogs, demos, and
            news</b> for builders, founders, and thinkers shaping the continent&apos;s
            digital future.
          </motion.p>

          <motion.div variants={line} className="hero-actions">
            <Link href="/blog" className="btn-molten">
              Read the Blog
            </Link>
            <Link href="/demos" className="btn-outline">
              Watch Demos
            </Link>
          </motion.div>
        </motion.div>

        {latest && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <article className="timecard">
              <div className="tc-cat">Latest · {latest.category}</div>
              <Link href={`/blog/${latest.slug}`} className="tc-title">
                {latest.title}
              </Link>
              <p className="tc-excerpt">{latest.excerpt}</p>
              <div className="tc-meta">
                <span className="dia">◆</span>
                {latest.author} · {formatDate(latest.date)}
              </div>
            </article>
          </motion.div>
        )}
      </div>
    </section>
  );
}
