import { Card } from "@/components/ui/Card";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

export function OverviewSection() {
  return (
    <Section id="overview">
      <SectionHeader
        badge="Section 1"
        title="Apa Itu Komputer?"
        description="Komputer adalah perangkat elektronik yang menerima data sebagai input, memproses data, menyimpan data bila diperlukan, kemudian menghasilkan output berupa informasi."
      />

      <Card className="space-y-6">
        <FlowDiagram
          steps={[
            { label: "User", sublabel: "Pengguna" },
            { label: "Input", sublabel: "Data masuk" },
            { label: "Processing", sublabel: "Diproses" },
            { label: "Output", sublabel: "Informasi" },
          ]}
        />

        <div className="rounded-xl border border-white/10 bg-surface-2 p-5">
          <p className="mb-3 text-sm font-medium text-accent-light">Contoh sederhana</p>
          <div className="space-y-2 text-sm text-muted">
            <p>
              <span className="text-white">User</span> mengetik{" "}
              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-accent-light">
                &quot;Halo&quot;
              </span>{" "}
              menggunakan keyboard
            </p>
            <p>→ Komputer memproses input</p>
            <p>
              → Tulisan{" "}
              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-accent-light">
                &quot;Halo&quot;
              </span>{" "}
              muncul di monitor
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
