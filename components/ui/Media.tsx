import Image from "next/image";

type MediaProps = {
  /** Path under /photos — picks the right renderer from the file extension. */
  src: string;
  alt: string;
  className?: string;
  /** Fixed dimensions for images (ignored for videos). */
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** Fill the parent box (images only, mirrors next/image fill). */
  fill?: boolean;
  /** Video behaviour when src is a video file. */
  video?: {
    /** Show native controls (default: true). */
    controls?: boolean;
    /** Play on loop (default: false). */
    loop?: boolean;
    /** Start muted (default: true — avoids unexpected audio). */
    muted?: boolean;
    /** Autoplay as a silent preview (default: false). */
    autoPlay?: boolean;
    playsInline?: boolean;
    preload?: "auto" | "metadata" | "none";
  };
};

/**
 * Renders a ROLAC photo or video from `public/photos` with one component.
 * Videos keep their intrinsic resolution — compression happens at encode time,
 * never by scaling the file down.
 */
export function Media({
  src,
  alt,
  className = "",
  width,
  height,
  sizes,
  priority = false,
  fill = false,
  video,
}: MediaProps) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  if (isVideo) {
    return (
      <video
        src={src}
        className={className}
        controls={video?.controls ?? true}
        loop={video?.loop ?? false}
        muted={video?.muted ?? true}
        autoPlay={video?.autoPlay ?? false}
        playsInline={video?.playsInline ?? true}
        preload={video?.preload ?? "metadata"}
        // Poster-free: the first frame shows while metadata loads.
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 900}
      sizes={sizes}
      priority={priority}
      fill={fill}
      className={className}
    />
  );
}
