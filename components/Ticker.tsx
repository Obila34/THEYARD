const items = [
  "Tech News",
  "Weekly Demos",
  "AI Tools",
  "African Builders",
  "Startup Stories",
  "Free Newsletter",
  "Open Community"
];

export default function Ticker() {
  const track = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {track.map((item, i) => (
          <span key={i}>
            <i>◆</i>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
