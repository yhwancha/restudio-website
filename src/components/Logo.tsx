type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <img
      src="/assets/logo-dark.svg"
      alt="restudio"
      width={168}
      height={20}
      className={`logo logo-${variant} ${className}`.trim()}
    />
  );
}
