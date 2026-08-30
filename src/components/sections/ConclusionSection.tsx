import { CheckCircle2 } from "lucide-react";
import { conclusionPoints } from "@/data/content";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

export function ConclusionSection() {
  return (
    <Section id="conclusion">
      <SectionHeader
        badge="Section 9"
        title="Inti Materi"
        description="Ringkasan singkat yang perlu diingat dari Pertemuan 1."
      />

      <Card className="space-y-3">
        {conclusionPoints.map((point) => (
          <div key={point} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
            <p className="text-sm">{point}</p>
          </div>
        ))}
      </Card>

      <p className="text-center text-sm text-muted">
        Konsep Sistem Informasi — Pertemuan 1 · Dasar-Dasar Komputer
      </p>
    </Section>
  );
}
