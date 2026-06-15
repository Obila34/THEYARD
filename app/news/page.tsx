import type { Metadata } from "next";
import NewsItem, { NewsData } from "@/components/NewsItem";
import RevealWrapper from "@/components/RevealWrapper";
import news from "@/content/data/news.json";

export const metadata: Metadata = {
  title: "News — The Yard",
  description: "Tech news from Kenya and across the continent, builder's lens."
};

export default function NewsPage() {
  const items = news as NewsData[];

  return (
    <section className="section section-coal">
      <div className="wrapper">
        <RevealWrapper>
          <div className="page-head">
            <p className="eyebrow">Latest Intel</p>
            <h2 className="h2">
              Tech News,<br />
              <span className="molten">Africa Lens.</span>
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div>
            {items.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
