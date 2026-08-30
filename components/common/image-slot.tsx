type ImageSlotProps = { src: string; label: string; className?: string };

export function ImageSlot({ src, label, className = "" }: ImageSlotProps) {
  return (
    <div role="img" aria-label={label} className={`image-slot ${className}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 31, 30, 0.03), rgba(34, 31, 30, 0.16)), url(${src})`, clipPath: "none", borderRadius: 0 }} />
  );
}
