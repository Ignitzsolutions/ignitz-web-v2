import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      className={`brand-logo ${className}`.trim()}
      src="/brand/ignitz-logo.png"
      alt=""
      width={593}
      height={108}
      priority
    />
  );
}
