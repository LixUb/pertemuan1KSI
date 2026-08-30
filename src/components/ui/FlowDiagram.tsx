import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowStep {
  label: string;
  sublabel?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  direction?: "horizontal" | "vertical";
  className?: string;
}

export function FlowDiagram({ steps, direction = "horizontal", className }: FlowDiagramProps) {
  const Arrow = direction === "horizontal" ? ArrowRight : ArrowDown;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2",
        direction === "vertical" ? "flex-col" : "flex-wrap",
        className,
      )}
    >
      {steps.map((step, i) => (
        <div key={`${step.label}-${i}`} className="flex items-center gap-2">
          <div className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-center min-w-[100px]">
            <p className="text-sm font-semibold text-accent-light">{step.label}</p>
            {step.sublabel && (
              <p className="mt-0.5 text-xs text-muted">{step.sublabel}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <Arrow className="h-4 w-4 shrink-0 text-accent/60" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}

interface FlowChainProps {
  items: string[];
  className?: string;
}

export function FlowChain({ items, className }: FlowChainProps) {
  return (
    <div className={cn("flex flex-col items-center gap-1 font-mono text-sm", className)}>
      {items.map((item, i) => (
        <div key={`${item}-${i}`} className="flex flex-col items-center">
          <span
            className={cn(
              "rounded-lg border border-white/10 bg-surface-2 px-4 py-2 text-center",
              i === 0 && "border-accent/30 text-accent-light",
              i === items.length - 1 && "border-accent/30 text-accent-light",
            )}
          >
            {item}
          </span>
          {i < items.length - 1 && (
            <ArrowDown className="my-1 h-4 w-4 text-muted" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
