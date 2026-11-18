export function PropertyPhoto({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#1a0a10] ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#2a1216]/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120308]/70 via-transparent to-transparent" />
    </div>
  );
}
