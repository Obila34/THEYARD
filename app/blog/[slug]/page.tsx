import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllArticles,
  getAllSlugs,
  getArticleBySlug
} from "@/lib/mdx";
import ArticleCard from "@/components/ArticleCard";
import RevealWrapper from "@/components/RevealWrapper";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Not Found — The Yard" };
  return {
    title: `${article.title} — The Yard`,
    description: article.excerpt
  };
}

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return d;
  }
}

function readTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default function ArticlePage({ params }: Params) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="section section-coal">
      <figure className="article-hero">
        <figcaption>
          ◆ {article.category} · The Yard
        </figcaption>
      </figure>

      <header className="article-header">
        <p className="ah-cat">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="article-meta">
          {article.author}
          <span className="dia">◆</span>
          {formatDate(article.date)}
          <span className="dia">◆</span>
          {readTime(article.content)} min read
        </p>
      </header>

      <div className="article-body">
        <MDXRemote source={article.content} />
      </div>

      <div className="wrapper" style={{ paddingTop: 40 }}>
        <RevealWrapper>
          <p className="eyebrow">Keep Reading</p>
          <h2 className="h2" style={{ fontSize: "clamp(30px, 4vw, 50px)" }}>
            More from<br />
            <span className="molten">The Yard.</span>
          </h2>
          <div className="card-grid-3" style={{ marginTop: 40 }}>
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </article>
  );
}
