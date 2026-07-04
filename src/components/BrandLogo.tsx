import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      className={`brand-logo ${className}`.trim()}
      src="/brand/ignitz-logo.png"
      alt="Ignitz Solutions"
      width={300}
      height={45}
      priority
    />
  );
}
