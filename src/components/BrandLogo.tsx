import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      className={`brand-logo ${className}`.trim()}
      src="/brand/ignitz-logo.svg"
      alt="Ignitz"
      width={640}
      height={120}
      priority
    />
  );
}
