export interface DemoData {
  id: number;
  episode: string;
  founder: string;
  company: string;
  tagline: string;
  youtubeId: string;
  date: string;
}

export default function DemoCard({ demo }: { demo: DemoData }) {
  return (
    <div className="demo-card">
      <div className="demo-ep-label">EP. {demo.episode}</div>
      <div className="demo-ep-num">{demo.episode}</div>

      <div className="demo-embed">
        <iframe
          src={`https://www.youtube.com/embed/${demo.youtubeId}`}
          title={`${demo.company} — ${demo.founder}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="demo-founder">{demo.founder}</div>
      <p className="demo-company">
        <b>{demo.company}</b> — {demo.tagline}
      </p>

      <a
        className="btn-outline btn-sm"
        href={`https://www.youtube.com/watch?v=${demo.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch the Drop
      </a>
    </div>
  );
}
