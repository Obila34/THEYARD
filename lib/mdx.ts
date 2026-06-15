import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface ArticleFrontmatter {
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
}

export interface ArticleMetaFull extends ArticleFrontmatter {
  slug: string;
}

export interface ArticleFull extends ArticleMetaFull {
  content: string;
}

function slugFromFilename(filename: string) {
  // strip ".mdx" and leading "NNN-" numeric prefix
  return filename.replace(/\.mdx$/, "").replace(/^\d+-/, "");
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(slugFromFilename);
}

export function getAllArticles(): ArticleMetaFull[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug: slugFromFilename(file),
      ...(data as ArticleFrontmatter)
    };
  });

  // newest first
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): ArticleFull | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const match = files.find((f) => slugFromFilename(f) === slug);
  if (!match) return null;

  const raw = fs.readFileSync(path.join(BLOG_DIR, match), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    content,
    ...(data as ArticleFrontmatter)
  };
}
