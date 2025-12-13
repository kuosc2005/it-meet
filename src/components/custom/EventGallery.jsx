import React from "react";
import { images, images1 } from "@/assets/itmeet_images/itmeetimg";

const MarqueeRow = ({ items, reverse = false }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-6 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
      >
        {[...items, ...items].map((image, index) => (
          <div key={index} className="shrink-0">
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
                className="w-full h-full object-cover rounded-xl pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
