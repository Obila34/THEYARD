import Link from "next/link";

export interface ArticleMeta {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
}

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

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="timecard">
      <div className="tc-cat">{article.category}</div>
      <Link href={`/blog/${article.slug}`} className="tc-title">
        {article.title}
      </Link>
      <p className="tc-excerpt">{article.excerpt}</p>
      <div className="tc-meta">
        <span className="dia">◆</span>
        {article.author} · {formatDate(article.date)}
      </div>
    </article>
  );
}
