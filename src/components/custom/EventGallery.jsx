import React, { useMemo } from "react";
import { images, images1 } from "@/assets/itmeet_images/itmeetimg";

// Memoize MarqueeRow to prevent unnecessary re-renders
const MarqueeRow = React.memo(({ items, reverse = false }) => {
  // Pre-calculate duplicated array to avoid doing it on every render
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-6 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        // Add GPU acceleration for smooth animation
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {duplicatedItems.map((image, index) => (
          <div
            key={`${image.id || index}-${reverse ? 'r' : 'l'}`}
            className="shrink-0"
          >
            <div
              className="
                w-[300px] h-[200px]
                bg-gradient-to-r from-[#369fff] via-[#14C58F] to-purple-500
                p-1 rounded-2xl flex items-center justify-center
              "
            >
              <img
                src={image.img}
                alt="event"
                width="300"
                height="200"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl pointer-events-none"
                style={{
                  contentVisibility: 'auto',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

MarqueeRow.displayName = 'MarqueeRow';

export default function EventGallery() {
  return (
    <div className="w-full max-w-[90rem] mx-auto space-y-8">
      {/* LEFT TO RIGHT */}
      <MarqueeRow items={images} />

      {/* RIGHT TO LEFT */}
      <MarqueeRow items={images1} reverse />
    </div>
  );
}