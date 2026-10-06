import Image from "next/image";

export function CatalogMedia({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  if (src.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 70vw, 100vw"
        className={className}
      />
    );
  }

  return (
    // Remote files come from the future admin host, which is not known yet.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`absolute inset-0 h-full w-full ${className ?? ""}`} />
  );
}
