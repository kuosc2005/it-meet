import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images, images1 } from "@/assets/itmeet_images/itmeetimg";


function EventGallery() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings1 = {
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToShow: 3, 
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };  

  return (
    <div className="w-full max-w-[40rem] sm:max-w-[60rem] md:max-w-[80rem] lg:max-w-[100rem] xl:max-w-[120rem] mx-auto flex flex-col space-y-6">
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id} className="px-4">
          <img
            src={image.img}
            alt={`event-${image.id}`}
            className="w-full rounded-2xl object-contain bg-gradient-to-r from-[#369fff] via-[#14C58F] to-purple-500 p-1"
          />
        </div>
      ))}
    </Slider>
    <Slider {...settings1}>
      {images1.map((image) => (
        <div key={image.id} className="px-4">
          <img
            src={image.img}
            alt={`event-${image.id}`}
            className="w-full rounded-2xl object-contain bg-gradient-to-r from-[#369fff] via-[#14C58F] to-purple-500 p-1"
          />
        </div>
      ))}
    </Slider>
  </div>
  );
}

export default EventGallery;
