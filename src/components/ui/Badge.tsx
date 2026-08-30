import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "hardware" | "software" | "brainware";
}

const variants = {
  default: "bg-white/5 text-muted border-white/10",
  accent: "bg-accent/15 text-accent-light border-accent/30",
  hardware: "bg-[var(--hardware)]/15 text-[var(--hardware)] border-[var(--hardware)]/30",
  software: "bg-[var(--software)]/15 text-[var(--software)] border-[var(--software)]/30",
  brainware: "bg-[var(--brainware)]/15 text-[var(--brainware)] border-[var(--brainware)]/30",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
