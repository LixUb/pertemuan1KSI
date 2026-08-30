import { Code2, Cpu, Users } from "lucide-react";
import {
  brainwareExamples,
  hardwareExamples,
  softwareExamples,
} from "@/data/content";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

const hsbCards = [
  {
    title: "Hardware",
    subtitle: "Perangkat keras yang dapat disentuh secara fisik.",
    examples: hardwareExamples,
    icon: Cpu,
    accent: "hardware" as const,
    badgeVariant: "hardware" as const,
    colorClass: "text-[var(--hardware)]",
    bgClass: "bg-[var(--hardware)]/10",
  },
  {
    title: "Software",
    subtitle: "Program atau instruksi yang dijalankan komputer.",
    examples: softwareExamples,
    icon: Code2,
    accent: "software" as const,
    badgeVariant: "software" as const,
    colorClass: "text-[var(--software)]",
    bgClass: "bg-[var(--software)]/10",
  },
  {
    title: "Brainware",
    subtitle: "Manusia yang menggunakan, mengoperasikan, mengembangkan, atau mengelola komputer.",
    examples: brainwareExamples,
    icon: Users,
    accent: "brainware" as const,
    badgeVariant: "brainware" as const,
    colorClass: "text-[var(--brainware)]",
    bgClass: "bg-[var(--brainware)]/10",
  },
];

export function HSBSection() {
  return (
    <Section id="hsb">
      <SectionHeader
        badge="Section 2"
        title="Hardware, Software, Brainware"
        description="Tiga komponen utama yang bekerja bersama agar komputer bisa digunakan."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {hsbCards.map(
          ({ title, subtitle, examples, icon: Icon, accent, badgeVariant, colorClass, bgClass }) => (
            <Card key={title} accent={accent} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgClass}`}>
                  <Icon className={`h-5 w-5 ${colorClass}`} />
                </div>
                <Badge variant={badgeVariant}>{title}</Badge>
              </div>
              <p className="text-sm text-muted">{subtitle}</p>
              <ul className="flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-lg border border-white/10 bg-surface-2 px-2.5 py-1 text-xs"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </Card>
          ),
        )}
      </div>

      <Card className="text-center">
        <p className="text-sm text-muted">Hubungan sederhana</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
          <Badge variant="brainware">Brainware</Badge>
          <span className="text-muted">menggunakan</span>
          <Badge variant="software">Software</Badge>
          <span className="text-muted">→</span>
          <Badge variant="software">Software</Badge>
          <span className="text-muted">berjalan pada</span>
          <Badge variant="hardware">Hardware</Badge>
        </div>
      </Card>
    </Section>
  );
}
