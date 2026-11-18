import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src="/logo.png"
        alt="ePropertyTree"
        width={87}
        height={89}
        priority
        className={className}
      />
    </Link>
  );
}
