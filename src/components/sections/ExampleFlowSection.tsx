import { Card } from "@/components/ui/Card";
import { FlowChain } from "@/components/ui/FlowDiagram";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

export function ExampleFlowSection() {
  return (
    <Section id="example">
      <SectionHeader
        badge="Section 8"
        title="Contoh Cara Kerja Komputer"
        description="Mari satukan semua konsep — dari input hingga output."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-semibold">Mengetik &quot;Halo&quot;</h3>
          <FlowChain
            items={[
              "User",
              "Keyboard",
              "INPUT",
              "CPU + RAM",
              "PROCESSING",
              "Monitor",
              "OUTPUT",
            ]}
          />
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold">Menghitung 10 + 5</h3>
          <FlowChain
            items={[
              "Input angka",
              "CPU menerima instruksi",
              "ALU menghitung",
              "Hasil = 15",
              "Monitor menampilkan 15",
            ]}
          />
        </Card>
      </div>
    </Section>
  );
}
