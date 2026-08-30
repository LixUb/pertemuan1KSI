import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "hardware" | "software" | "brainware" | "accent";
}

const accentStyles = {
  hardware: "border-l-[var(--hardware)]",
  software: "border-l-[var(--software)]",
  brainware: "border-l-[var(--brainware)]",
  accent: "border-l-[var(--accent)]",
};

export function Card({ children, className, accent }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-surface p-6",
        "transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5",
        accent && "border-l-4",
        accent && accentStyles[accent],
        className,
      )}
    >
      {children}
    </div>
  );
}
