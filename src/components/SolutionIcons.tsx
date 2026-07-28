import {
  FileText,
  Kanban,
  Layers,
  Leaf,
  ListChecks,
  type LucideProps,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";

type IconProps = Pick<LucideProps, "className" | "size" | "strokeWidth">;

const defaults = {
  size: 20,
  strokeWidth: 1.5,
  absoluteStrokeWidth: true,
} as const;

/** Pipeline / layered system — one-stop solution */
export function OnestopIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Layers
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** Leaf — eco / PPWR compliance */
export function PpwrIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Leaf
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** Material curation */
export function CurationStepIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Palette
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** Auto quote / estimate */
export function QuoteStepIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Zap
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** Project management */
export function ProjectStepIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Kanban
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** ESG / report */
export function ReportStepIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <FileText
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** AI diagnosis */
export function DiagnoseStepIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Sparkles
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

/** Action plan */
export function ActionStepIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <ListChecks
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}
