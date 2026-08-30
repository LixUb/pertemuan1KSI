import {
  Camera,
  Gamepad2,
  Hand,
  Headphones,
  Keyboard,
  Mic,
  Monitor,
  MousePointer2,
  Printer,
  Projector,
  ScanLine,
  Speaker,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/content";
import { Card } from "@/components/ui/Card";

const iconMap: Record<IconName, LucideIcon> = {
  Keyboard,
  MousePointer2,
  Mic,
  Camera,
  ScanLine,
  Hand,
  Gamepad2,
  Monitor,
  Speaker,
  Printer,
  Projector,
  Headphones,
};

interface DeviceGridProps {
  devices: Array<{ name: string; icon: IconName; desc: string }>;
}

export function DeviceGrid({ devices }: DeviceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {devices.map(({ name, icon, desc }) => {
        const Icon = iconMap[icon];
        return (
          <Card key={name} className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Icon className="h-6 w-6 text-accent-light" />
            </div>
            <p className="font-medium">{name}</p>
            <p className="mt-1 text-sm text-muted">{desc}</p>
          </Card>
        );
      })}
    </div>
  );
}
