import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images, images1 } from "@/assets/itmeet_images/itmeetimg";

function EventGallery() {
  const sliderCommon = {
    infinite: true,
    lazyLoad: false,            // Prevent shrinking on first render
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const settings = {
    ...sliderCommon,
  };

  const settings1 = {
    ...sliderCommon,
    rtl: true,
  };

  return (
    <div className="w-full max-w-[40rem] sm:max-w-[60rem] md:max-w-[90rem] lg:max-w-[90rem] xl:max-w-[90rem] mx-auto  space-y-6">

      {/* FIRST SLIDER */}
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-2 sm:px-4">
            <div
              className="
                  w-[300px]        /* SAME FIXED WIDTH */
            h-[200px]        /* SAME FIXED HEIGHT */
            bg-gradient-to-r from-[#369fff] via-[#14C58F] to-purple-500
            p-1 rounded-2xl flex items-center justify-center
          "
            >
              <img
                src={image.img}
                alt={`event-${image.id}`}
                className="w-full h-full object-cover rounded-xl"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* SECOND SLIDER (RIGHT TO LEFT) */}
      <Slider {...settings1}>
        {images1.map((image) => (
          <div key={image.id} className="px-2 sm:px-4">
            <div
              className="
                    w-[300px]        /* SAME FIXED WIDTH */
            h-[200px]        /* SAME FIXED HEIGHT */
            bg-gradient-to-r from-[#369fff] via-[#14C58F] to-purple-500
            p-1 rounded-2xl flex items-center justify-center
          "
            >
              <img
                src={image.img}
                alt={`event-${image.id}`}
                className="w-full h-full object-cover rounded-xl"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default EventGallery;
