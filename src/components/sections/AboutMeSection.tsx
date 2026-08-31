import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

const facts = [
  { label: "Nama", value: "Rayhan Nulhafiz" },
  { label: "NIM", value: "2604140026" },
  { label: "Program Studi", value: "Sistem Informasi" },
  { label: "Universitas", value: "Universitas Negeri Semarang" },
  { label: "Angkatan", value: "2026 — Semester 1" },
  { label: "Alumni", value: "MAN Insan Cendekia Kota Batam, Angkatan 8" },
];

const achievements = [
  {
    title: "Semifinalis Samsung Solve for Tomorrow 2025",
    detail: "Tingkat nasional",
  },
  {
    title: "Best Student — Bootcamp Infinite Studio x MAN IC Batam",
    detail: "Android Studio Development course",
  },
  {
    title: "Best Project — P5 PPRA MAN IC Batam",
    detail: "Android app development",
  },
];

export function AboutMeSection() {
  return (
    <Section id="about-me">
      <SectionHeader
        badge="About Me"
        title="Rayhan Nulhafiz"
        description="Mahasiswa Sistem Informasi yang menyusun ringkasan materi Pertemuan 1 ini."
      />

      <Card className="space-y-4" accent="accent">
        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-muted">
                {fact.label}
              </p>
              <p className="text-sm font-medium text-white">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="accent">Sistem Informasi</Badge>
          <Badge>UNNES 2026</Badge>
          <Badge>MAN IC Batam</Badge>
        </div>
      </Card>

      <Card className="space-y-4">
        <p className="text-sm font-medium text-accent-light">
          Pengalaman &amp; Prestasi selama di MAN IC Batam
        </p>
        <div className="space-y-4">
          {achievements.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
