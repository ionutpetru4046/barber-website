'use client';

import { useState, useEffect } from "react";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import TypingText from "@/components/TypingText";
import Services from "../app/services/page";

const backgroundImages = [
  "/backgroundimg1.png",
  "/backgroundimg2.jpg",
  "/backgroundimg3.jpg",
  "/backgroundimg4.jpg",
  "/backgroundimg5.jpg",
  "/backgroundimg6.jpg",
];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Images with fade effect */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <TypingText text="Look Sharp, Feel Sharper" speed={100} />
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Premium grooming services for modern men. Book your cut today.
          </p>
          <a
            href="/booking"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <Services />
          <Testimonials />
          <Gallery />
        </div>
      </section>
    </>
  );
}
