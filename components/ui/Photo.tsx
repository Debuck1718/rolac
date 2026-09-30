import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function Photo({
  src,
  alt,
  className = "",
  sizes,
  priority,
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={900}
      sizes={
        sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      }
      priority={priority}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
