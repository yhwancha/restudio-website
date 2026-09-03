type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <img
      src="/assets/restudio-logo.svg"
      alt="RESTUDIO"
      width={137}
      height={16}
      className={`${variant === "light" ? "brightness-0 invert" : ""} ${className}`.trim()}
    />
  );
}
