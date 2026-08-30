import { inputDevices, outputDevices } from "@/data/content";
import { DeviceGrid } from "@/components/ui/DeviceGrid";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

export function InputDevicesSection() {
  return (
    <Section id="input-devices">
      <SectionHeader
        badge="Section 6"
        title="Input Device"
        description="Perangkat yang digunakan untuk memasukkan data ke komputer."
      />
      <DeviceGrid devices={inputDevices} />
    </Section>
  );
}

export function OutputDevicesSection() {
  return (
    <Section id="output-devices">
      <SectionHeader
        badge="Section 7"
        title="Output Device"
        description="Perangkat yang menampilkan atau mengeluarkan hasil pemrosesan kepada pengguna."
      />
      <DeviceGrid devices={outputDevices} />
    </Section>
  );
}
