import { Archive, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

export function MemorySection() {
  return (
    <Section id="memory">
      <SectionHeader
        badge="Section 5"
        title="Memory — RAM vs Storage"
        description="Perbedaan memori sementara dan penyimpanan permanen dalam komputer."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card accent="accent" className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
              <Briefcase className="h-5 w-5 text-accent-light" />
            </div>
            <div>
              <h3 className="font-semibold">RAM</h3>
              <p className="text-xs text-muted">Analogi: Meja kerja</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Memori sementara</li>
            <li>• Volatile — data hilang saat komputer dimatikan</li>
            <li>• Digunakan untuk data/program yang sedang digunakan</li>
          </ul>
        </Card>

        <Card accent="hardware" className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--hardware)]/10">
              <Archive className="h-5 w-5 text-[var(--hardware)]" />
            </div>
            <div>
              <h3 className="font-semibold">Storage (SSD / HDD)</h3>
              <p className="text-xs text-muted">Analogi: Lemari penyimpanan</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Non-volatile — data tetap tersimpan</li>
            <li>• Data tidak hilang walaupun komputer dimatikan</li>
            <li>• Digunakan untuk menyimpan file dan program</li>
          </ul>
        </Card>
      </div>

      <Card>
        <p className="mb-4 text-sm font-medium text-muted">Contoh alur saat membuka Chrome</p>
        <FlowDiagram
          steps={[
            { label: "Chrome", sublabel: "Tersimpan di SSD" },
            { label: "RAM", sublabel: "Dimuat ke memori" },
            { label: "CPU", sublabel: "Memproses" },
          ]}
        />
      </Card>
    </Section>
  );
}
