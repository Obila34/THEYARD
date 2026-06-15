import type { Metadata } from "next";
import DemoCard, { DemoData } from "@/components/DemoCard";
import RevealWrapper from "@/components/RevealWrapper";
import demos from "@/content/data/demos.json";

export const metadata: Metadata = {
  title: "Demos — The Yard",
  description: "The Drop: weekly live founder demos. 8 minutes, real product."
};

export default function DemosPage() {
  const items = demos as DemoData[];

  return (
    <section className="section section-iron">
      <div className="wrapper">
        <RevealWrapper>
          <div className="page-head">
            <p className="eyebrow">Every Week</p>
            <h2 className="h2">
              The Drop —<br />
              <span className="molten">Founders Demo Live.</span>
            </h2>
            <p className="page-sub">
              8 minutes. Real product. Real questions. No slides.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="demo-grid">
            {items.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
