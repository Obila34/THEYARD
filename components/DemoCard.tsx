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

      {/* Coming Soon placeholder — same 16:9 frame as the video embed,
          muted fill, centered label, and a badge top-right. */}
      <div className="demo-embed demo-soon">
        <span className="demo-soon-badge">Coming Soon</span>
        <span className="demo-soon-label">Coming Soon</span>
      </div>

      <div className="demo-founder">{demo.founder}</div>
      <p className="demo-company">
        <b>{demo.company}</b> — {demo.tagline}
      </p>

      {/* Watch link greyed out / non-interactive until the drop is live */}
      <span className="btn-outline btn-sm is-soon" aria-disabled="true">
        Watch the Drop
      </span>
    </div>
  );
}
