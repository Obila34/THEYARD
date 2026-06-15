import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";
import RevealWrapper from "@/components/RevealWrapper";
import newsletters from "@/content/data/newsletters.json";

export const metadata: Metadata = {
  title: "Smoke Signal — The Yard Newsletter",
  description:
    "AI and startup news filtered through an African lens. Every Thursday."
};

interface Issue {
  issue: string;
  title: string;
  date: string;
  url: string;
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

export default function NewsletterPage() {
  const issues = newsletters as Issue[];

  return (
    <section className="section section-coal">
      <div className="wrapper">
        <RevealWrapper>
          <div className="page-head">
            <p className="eyebrow">Weekly · Free</p>
            <h2 className="h2">
              Smoke<br />
              <span className="molten">Signal.</span>
            </h2>
            <p className="page-sub" style={{ marginBottom: 36 }}>
              AI and startup news filtered through an African lens. Every Thursday.
            </p>
            <NewsletterSignup />
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <p className="eyebrow">The Archive</p>
          <h2
            className="h2"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginBottom: 30 }}
          >
            Past<br />
            <span className="molten">Issues.</span>
          </h2>

          <div>
            {issues.map((iss) => (
              <a
                key={iss.issue}
                className="news-item"
                href={iss.url}
                target={iss.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <span className="news-tag">ISSUE {iss.issue}</span>
                <span>
                  <span className="news-head">{iss.title}</span>
                </span>
                <span className="news-time">{formatDate(iss.date)}</span>
              </a>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
