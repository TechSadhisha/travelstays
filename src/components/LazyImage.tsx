import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3"
}

export const LazyImage = ({
  src,
  alt,
  className,
  aspectRatio,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={imageSrc || ""}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          {/* Optional: Add a placeholder icon or logo here */}
        </div>
      )}
    </div>
  );
};
