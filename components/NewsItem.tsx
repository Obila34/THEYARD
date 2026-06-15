export interface NewsData {
  id: number;
  headline: string;
  source: string;
  url: string;
  timestamp: string;
  tag: string;
}

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  } catch {
    return d;
  }
}

export default function NewsItem({ item }: { item: NewsData }) {
  return (
    <a
      className="news-item"
      href={item.url}
      target={item.url.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      <span className="news-tag">{item.tag}</span>
      <span>
        <span className="news-head">{item.headline}</span>
        <span className="news-source">{item.source}</span>
      </span>
      <span className="news-time">{formatDate(item.timestamp)}</span>
    </a>
  );
}
