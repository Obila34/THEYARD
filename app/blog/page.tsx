import type { Metadata } from "next";
import { getAllArticles } from "@/lib/mdx";
import BlogGrid from "@/components/BlogGrid";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Blog — The Yard",
  description: "Stories and signals from Nairobi's AI tech community."
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <section className="section section-coal">
      <div className="wrapper">
        <RevealWrapper>
          <div className="page-head">
            <p className="eyebrow">From the Yard</p>
            <h2 className="h2">
              Stories &amp;<br />
              <span className="molten">Signals.</span>
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <BlogGrid articles={articles} />
        </RevealWrapper>
      </div>
    </section>
  );
}
