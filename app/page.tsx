import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ArticleCard from "@/components/ArticleCard";
import DemoCard from "@/components/DemoCard";
import NewsletterStrip from "@/components/NewsletterStrip";
import RevealWrapper from "@/components/RevealWrapper";
import demos from "@/content/data/demos.json";

const coverage = [
  {
    num: "01",
    name: "News",
    desc: "Tech and AI news from Kenya and across the continent, filtered through a builder's lens."
  },
  {
    num: "02",
    name: "Blog",
    desc: "Long-form takes on the tools, ideas, and people reshaping Nairobi's tech scene."
  },
  {
    num: "03",
    name: "Demos",
    desc: "The Drop — weekly live demos where founders ship real product in eight minutes flat."
  },
  {
    num: "04",
    name: "Community",
    desc: "An open network of builders, founders, and thinkers meeting online and in person."
  }
];

export default function HomePage() {
  const articles = getAllArticles();
  const latest = articles[0];
  const featured = articles.slice(0, 3);
  const latestDemos = demos.slice(0, 2);

  return (
    <>
      <Hero latest={latest} />

      <Ticker />

      {/* What We Cover */}
      <section className="section section-iron">
        <div className="wrapper">
          <RevealWrapper>
            <p className="eyebrow">What We Cover</p>
            <h2 className="h2">
              Four Beats,<br />
              <span className="molten">One Yard.</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper>
            <div className="feature-grid" style={{ marginTop: 40 }}>
              {coverage.map((c) => (
                <div className="feature-cell" key={c.num}>
                  <div className="how-num">{c.num}</div>
                  <div className="how-name">{c.name}</div>
                  <p className="how-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section section-coal">
        <div className="wrapper">
          <RevealWrapper>
            <p className="eyebrow">From the Yard</p>
            <h2 className="h2">
              Featured<br />
              <span className="molten">Stories.</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper>
            <div className="card-grid-3" style={{ marginTop: 40 }}>
              {featured.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div style={{ marginTop: 44 }}>
              <Link href="/blog" className="btn-outline">
                All Articles
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* The Drop */}
      <section className="section section-iron">
        <div className="wrapper">
          <RevealWrapper>
            <p className="eyebrow">Every Week</p>
            <h2 className="h2">
              The Drop —<br />
              <span className="molten">Founders Demo Live.</span>
            </h2>
            <p className="page-sub">
              8 minutes. Real product. Real questions. No slides.
            </p>
          </RevealWrapper>

          <RevealWrapper>
            <div className="demo-grid" style={{ marginTop: 40 }}>
              {latestDemos.map((d) => (
                <DemoCard key={d.id} demo={d} />
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div style={{ marginTop: 44 }}>
              <Link href="/demos" className="btn-outline">
                All Episodes
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <NewsletterStrip />
    </>
  );
}
