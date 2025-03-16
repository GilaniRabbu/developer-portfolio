import type React from "react";
import { cn } from "@/lib/utils";

interface WaveUnderlineProps {
  children: React.ReactNode;
  className?: string;
  waveColor?: string;
  waveHeight?: number;
  waveWidth?: number;
}

export function WaveUnderline({
  children,
  className,
  waveColor = "#3b82f6", // Default blue color
  waveHeight = 6,
  waveWidth = 12,
}: WaveUnderlineProps) {
  // Create the wave SVG dynamically
  const waveSvg = encodeURIComponent(`
    <svg width="${waveWidth}" height="${waveHeight}" viewBox="0 0 ${waveWidth} ${waveHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 ${waveHeight / 2} C${waveWidth / 4} 0, ${
    waveWidth / 4
  } ${waveHeight}, ${waveWidth / 2} ${waveHeight / 2} C${
    (3 * waveWidth) / 4
  } 0, ${(3 * waveWidth) / 4} ${waveHeight}, ${waveWidth} ${
    waveHeight / 2
  }" stroke="${waveColor}" fill="none" />
    </svg>
  `);

  const waveStyle = {
    backgroundImage: `url("data:image/svg+xml,${waveSvg}")`,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "0 100%",
    backgroundSize: `${waveWidth}px ${waveHeight}px`,
    paddingBottom: `${waveHeight}px`,
  };

  return (
    <span className={cn("relative inline-block", className)} style={waveStyle}>
      {children}
    </span>
  );
}
