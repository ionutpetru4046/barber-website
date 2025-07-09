/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

const images = [
  "/barberstyle2.jpg",
  "/barberstyle4.jpg",
  "/barberstyle5.jpg",
  "/barberstyle6.jpg",
  "/barberstyle7.jpg",
  "/barberstyle8.jpg",
  "/barberstyle9.jpg",
];

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0); // Only declare once

  return (
    <section className="bg-gray-950 py-16 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Our Style Gallery
      </h2>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs, EffectFade]}
        effect="fade"
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onSlideChange={(swiper) => setPhotoIndex(swiper.activeIndex)}
        onClick={() => setIsOpen(true)}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="max-w-4xl mx-auto mt-6"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-600"
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-24 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={`Image ${photoIndex + 1} of ${images.length}`}
        />
      )}
    </section>
  );
}
