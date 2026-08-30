import {
  inputExamples,
  outputExamples,
  processingComponents,
} from "@/data/content";
import { Card } from "@/components/ui/Card";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

const ioCards = [
  {
    title: "Input",
    desc: "Data yang dimasukkan ke komputer.",
    examples: inputExamples,
    color: "border-l-[var(--software)]",
  },
  {
    title: "Processing",
    desc: "Data diolah menjadi informasi.",
    examples: processingComponents,
    color: "border-l-[var(--accent)]",
  },
  {
    title: "Output",
    desc: "Hasil pemrosesan yang diberikan kepada pengguna.",
    examples: outputExamples,
    color: "border-l-[var(--hardware)]",
  },
];

export function IOSection() {
  return (
    <Section id="io">
      <SectionHeader
        badge="Section 3"
        title="Input → Processing → Output"
        description="Alur dasar bagaimana komputer bekerja — dari data mentah menjadi informasi yang berguna."
      />

      <Card className="py-10">
        <FlowDiagram
          steps={[
            { label: "INPUT" },
            { label: "PROCESSING" },
            { label: "OUTPUT" },
          ]}
          className="text-base"
        />
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {ioCards.map(({ title, desc, examples, color }) => (
          <Card key={title} className={`border-l-4 ${color}`}>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted">{desc}</p>
            <ul className="mt-4 space-y-2">
              {examples.map((ex) => (
                <li key={ex} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {ex}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
