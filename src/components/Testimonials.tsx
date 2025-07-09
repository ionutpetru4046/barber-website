/* eslint-disable @typescript-eslint/no-unused-vars */
// components/Testimonials.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "Regular Customer",
    photo: "/avatar1.png",
    feedback: "Best haircut I’ve ever had! The staff are super friendly and professional.",
  },
  {
    name: "Sarah Smith",
    role: "Entrepreneur",
    photo: "/avatar2.png",
    feedback: "I always feel refreshed after my visit. Highly recommend this barber shop!",
  },
  {
    name: "Mike Johnson",
    role: "Freelancer",
    photo: "/avatar3.png",
    feedback: "Great atmosphere and attention to detail. My go-to place for grooming.",
  },
  {
    name: "Lena White",
    role: "Model",
    photo: "/avatar4.png",
    feedback: "Absolutely love the vibes here. Very skilled professionals!",
  },
  {
    name: "Chris Brown",
    role: "Designer",
    photo: "/avatar5.png",
    feedback: "They gave me a new look that everyone loves. Worth every dollar!",
  },
  {
    name: "Emily Clark",
    role: "Photographer",
    photo: "/avatar6.png",
    feedback: "I bring my son here too. Super family-friendly and clean.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-20 px-4">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        What Our Clients Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.2}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map(({ name, role, photo, feedback }, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg text-center scale-90 transition-all hover:scale-100">
              <div className="flex justify-center mb-4">
                <Image
                  src={photo}
                  alt={name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-blue-600 object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-blue-400">{role}</p>
              <div className="flex justify-center my-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.5 12.09 1 8.91l6.09-.91L10 2l2.91 6 6.09.91-4.5 3.18 1.378 6-5.878-3.09z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-300 italic">&quot;{feedback}&quot;</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
