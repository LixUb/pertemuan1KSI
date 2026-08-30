import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { HSBSection } from "@/components/sections/HSBSection";
import { IOSection } from "@/components/sections/IOSection";
import { CPUSection } from "@/components/sections/CPUSection";
import { MemorySection } from "@/components/sections/MemorySection";
import {
  InputDevicesSection,
  OutputDevicesSection,
} from "@/components/sections/DeviceSections";
import { ExampleFlowSection } from "@/components/sections/ExampleFlowSection";
import { ConclusionSection } from "@/components/sections/ConclusionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />

      <div className="lg:pl-64">
        <header className="hidden border-b border-white/10 px-8 py-12 lg:block">
          <Badge variant="accent">Ringkasan Pertemuan 1</Badge>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Dasar-Dasar Komputer
          </h1>
          <p className="mt-2 text-muted">
            Konsep Sistem Informasi — Rayhan Nulhafiz
          </p>
        </header>

        <main className="space-y-24 px-4 py-8 md:px-8 md:py-12 lg:px-12">
          <OverviewSection />
          <HSBSection />
          <IOSection />
          <CPUSection />
          <MemorySection />
          <InputDevicesSection />
          <OutputDevicesSection />
          <ExampleFlowSection />
          <ConclusionSection />
        </main>
      </div>
    </div>
  );
}
