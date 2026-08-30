import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <header className="space-y-2">
      {badge && <Badge variant="accent">{badge}</Badge>}
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-muted leading-relaxed">{description}</p>
      )}
    </header>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 space-y-8", className)}>
      {children}
    </section>
  );
}
