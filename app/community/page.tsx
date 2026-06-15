import type { Metadata } from "next";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Community — The Yard",
  description: "Join Africa's AI tech community. Build with us."
};

const events = [
  {
    day: "12",
    month: "FEB",
    name: "The Drop — Live Founder Demos",
    type: "DEMO NIGHT"
  },
  {
    day: "19",
    month: "FEB",
    name: "Swahili NLP Workshop with Maseno Researchers",
    type: "WORKSHOP"
  },
  {
    day: "26",
    month: "FEB",
    name: "Builders Mixer — Westlands",
    type: "MEETUP"
  },
  {
    day: "05",
    month: "MAR",
    name: "M-Pesa API Deep Dive",
    type: "TECH TALK"
  }
];

export default function CommunityPage() {
  return (
    <section className="section section-coal">
      <div className="wrapper">
        <RevealWrapper>
          <div className="page-head">
            <p className="eyebrow">Join The Yard</p>
            <h2 className="h2">
              Build with<br />
              <span className="molten">Africa.</span>
            </h2>
            <p className="page-sub">
              The Yard is an open network of builders, founders, and thinkers.
              Pick your channel and jump in — everyone&apos;s welcome.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="community-grid">
            <div className="community-card whatsapp">
              <div className="cc-accent" />
              <p className="cc-platform">WhatsApp</p>
              <h3 className="cc-title">Join the African Builders Group</h3>
              <p className="cc-desc">
                Day-to-day chatter, quick questions, job leads, and links. The
                fastest way to plug into what Africa&apos;s builders are working
                on right now.
              </p>
              <a className="btn-molten" href="#">
                Join on WhatsApp
              </a>
            </div>

            <div className="community-card discord">
              <div className="cc-accent" />
              <p className="cc-platform">Discord</p>
              <h3 className="cc-title">Join the Server</h3>
              <p className="cc-desc">
                Deeper conversations, channels by topic, demo replays, and voice
                rooms. Where projects get built and collaborations start.
              </p>
              <a className="btn-molten" href="#">
                Join the Server
              </a>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <p className="eyebrow">On the Calendar</p>
          <h2
            className="h2"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginBottom: 30 }}
          >
            Upcoming<br />
            <span className="molten">Events.</span>
          </h2>
          <p className="page-sub">
            Events span Nairobi, Lagos, Accra, Cairo and remote.
          </p>

          <div>
            {events.map((ev, i) => (
              <div className="event-row" key={i}>
                <span className="event-date">
                  {ev.day}
                  <small>{ev.month}</small>
                </span>
                <span className="event-name">{ev.name}</span>
                <span className="event-badge">{ev.type}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
