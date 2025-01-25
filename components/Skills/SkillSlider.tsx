"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const row1 = [
  { name: "JavaScript", icon: "/skill/js.png" },
  { name: "Python", icon: "/skill/css.png" },
  { name: "TypeScript", icon: "/skill/html.png" },
  { name: "Swift", icon: "/skill/js.png" },
  { name: "C++", icon: "/skill/css.png" },
  { name: "Java", icon: "/skill/html.png" },
];

const row2 = [
  { name: "Kotlin", icon: "/skill/nodejs.png" },
  { name: "Lua", icon: "/skill/react.png" },
  { name: "PHP", icon: "/skill/tailwind.png" },
  { name: "Ruby", icon: "/skill/ts.png" },
  { name: "Rust", icon: "/skill/nodejs.png" },
  { name: "Go", icon: "/skill/react.png" },
];

export default function SkillSlider() {
  return (
    <div className="overflow-hidden bg-[#EEF2FF] dark:bg-[#221E1E]">
      <div className="space-y-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <InfiniteSlider items={row1} direction="right" speed={30} />
        <InfiniteSlider items={row2} direction="left" speed={25} />
      </div>
    </div>
  );
}

interface InfiniteSliderProps {
  items: Array<{ name: string; icon: string }>;
  direction: "left" | "right";
  speed: number;
}

function InfiniteSlider({ items, direction, speed }: InfiniteSliderProps) {
  const [duplicatedItems] = useState(() => [...items, ...items, ...items]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-10 w-fit"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="relative w-24 h-24 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-slate-300 dark:bg-stone-800 rounded transform">
              <div className="w-full h-full p-4 flex items-center justify-center">
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
