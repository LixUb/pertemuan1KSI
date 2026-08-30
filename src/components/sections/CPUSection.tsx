import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

const cpuParts = [
  {
    name: "ALU",
    desc: "Melakukan operasi aritmatika dan logika.",
    example: "5 + 3 = 8",
  },
  {
    name: "Control Unit",
    desc: "Mengatur dan mengendalikan jalannya instruksi.",
    example: "Fetch → Decode → Execute",
  },
  {
    name: "Register",
    desc: "Tempat penyimpanan kecil dan sangat cepat di dalam CPU untuk data/instruksi yang sedang digunakan.",
    example: "Data aktif saat ini",
  },
];

export function CPUSection() {
  return (
    <Section id="cpu">
      <SectionHeader
        badge="Section 4"
        title="CPU (Central Processing Unit)"
        description="CPU adalah komponen yang menjalankan instruksi dan melakukan pemrosesan data singkatnya sebagai otak dari komputer."
      />

      <Card className="flex flex-col items-center gap-6 py-8">
        <p className="text-sm font-medium text-muted">Struktur CPU</p>
        <div className="font-mono text-sm">
          <p className="mb-2 text-center text-accent-light">CPU</p>
          <div className="rounded-xl border border-accent/40 bg-surface-2 px-8 py-6 text-center">
            <p className="border-b border-white/10 pb-3">Control Unit</p>
            <p className="border-b border-white/10 py-3 text-accent-light">ALU</p>
            <p className="pt-3">Registers</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {cpuParts.map(({ name, desc, example }) => (
          <Card key={name} accent="accent">
            <h3 className="font-semibold text-accent-light">{name}</h3>
            <p className="mt-2 text-sm text-muted">{desc}</p>
            <p className="mt-3 rounded-lg bg-surface-2 px-3 py-2 font-mono text-xs text-accent-light">
              {example}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
