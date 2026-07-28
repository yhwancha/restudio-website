import {
  Cpu,
  Droplets,
  HeartPulse,
  type LucideProps,
  Music2,
  Shirt,
  UtensilsCrossed,
} from "lucide-react";

type IconProps = Pick<LucideProps, "className" | "size" | "strokeWidth">;

const defaults = {
  size: 20,
  strokeWidth: 1.5,
  absoluteStrokeWidth: true,
} as const;

export function BeautyIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Droplets
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

export function FoodIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <UtensilsCrossed
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

export function FashionIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Shirt
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

export function ElectronicsIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Cpu
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

export function HealthcareIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <HeartPulse
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}

export function EntertainmentIcon({ className, size, strokeWidth }: IconProps) {
  return (
    <Music2
      className={className}
      size={size ?? defaults.size}
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      absoluteStrokeWidth={defaults.absoluteStrokeWidth}
      aria-hidden="true"
    />
  );
}
