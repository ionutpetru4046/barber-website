/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useState, useEffect } from 'react';
import { Scissors, User, Baby, Calendar, Clock, Star, ArrowRight, Sparkles } from 'lucide-react';

// Custom hook for scroll animations
const useInView = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.15, ...options });

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, isInView };
};

const services = [
  {
    title: "Signature Cut",
    description: "Precision haircut with modern styling techniques and premium finish.",
    price: "$35",
    duration: "45 mins",
    icon: <Scissors className="text-3xl text-white drop-shadow-md" />,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    popularity: "Most Popular",
    features: ["Wash & Style", "Hot Towel", "Styling Products"]
  },
  {
    title: "Beard Sculpting",
    description: "Expert beard shaping with precision trimming and luxury hot towel treatment.",
    price: "$25",
    duration: "30 mins",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 8L13.5 7C13.1 6.8 12.6 6.8 12.2 7L10.5 8L9 7.5C8.6 7.3 8.1 7.3 7.7 7.5L4 9H2V11H4L6 10.2V22H18V10.2L21 9Z"/>
      </svg>
    ),
    gradient: "from-orange-500 via-red-500 to-pink-500",
    features: ["Precision Trim", "Hot Towel", "Beard Oil"]
  },
  {
    title: "Complete Makeover",
    description: "Full grooming experience combining haircut and beard styling for the ultimate look.",
    price: "$55",
    duration: "75 mins",
    icon: <User className="text-3xl text-white drop-shadow-md" />,
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    badge: "Premium",
    features: ["Hair & Beard", "Hot Towel", "Styling", "Consultation"]
  },
  {
    title: "Kids Special",
    description: "Fun and stylish cuts for young gentlemen with patience and care.",
    price: "$22",
    duration: "30 mins",
    icon: <Baby className="text-3xl text-white drop-shadow-md" />,
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    features: ["Kid-Friendly", "Quick Service", "Fun Experience"]
  },
];

export default function ModernServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 justify-center mx-auto max-w-max">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Premium Grooming Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">Our</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience the art of traditional barbering with modern techniques. Each service is crafted to perfection.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>

            <div className="w-px h-12 bg-gray-700"></div>

            <div className="text-center">
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-gray-500">5.0 Rating</div>
            </div>

            <div className="w-px h-12 bg-gray-700"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">15+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, idx) => {
              const { ref, isInView } = useInView({ threshold: 0.1 });
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={idx}
                  ref={ref}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedService(service)}
                  className={`group relative cursor-pointer transform transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Card */}
                  <div
                    className={`relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient} p-[1px] transition-all duration-500 ${
                      isHovered ? 'scale-105 shadow-2xl shadow-current/25' : ''
                    }`}
                  >
                    <div className="h-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 flex flex-col">
                      {/* Badge */}
                      {(service.popularity || service.badge) && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <div className={`bg-gradient-to-r ${service.gradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg select-none`}>
                            {service.popularity || service.badge}
                          </div>
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {service.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-500 select-none">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price & Duration */}
                      <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded-xl border border-white/10 select-none">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                              {service.price}
                            </div>
                            <div className="text-xs text-gray-500">Price</div>
                          </div>
                          <div className="w-px h-8 bg-gray-700"></div>
                          <div className="text-center">
                            <div className="text-white font-semibold flex items-center gap-1">
                              <Clock size={14} />
                              {service.duration}
                            </div>
                            <div className="text-xs text-gray-500">Duration</div>
                          </div>
                        </div>
                      </div>

                      {/* Book Button */}
                      <button
                        className={`group/btn relative w-full bg-gradient-to-r ${service.gradient} text-white font-bold py-3 px-6 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-current/25`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 select-none">
                          <Calendar size={16} />
                          Book Now
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 rounded-xl"></div>
                      </button>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to look your best?</h3>
              <p className="text-gray-400">Book your appointment today and experience premium grooming.</p>
            </div>
            <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl hover:shadow-xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap select-none">
              <Calendar size={20} />
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-slate-900 rounded-3xl p-8 max-w-md w-full border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="text-gray-400 hover:text-white transition"
              >
                ×
              </button>
            </div>

            <p className="text-gray-300 mb-6">{selectedService.description}</p>

            <ul className="mb-6 text-gray-400 space-y-2">
              {selectedService.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedService.gradient}`}></span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mb-8 border-t border-white/10 pt-4 text-white font-semibold">
              <div>
                Price: <span className="text-amber-400">{selectedService.price}</span>
              </div>
              <div>
                Duration: <span className="text-amber-400">{selectedService.duration}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Booking ${selectedService.title} - coming soon!`)}
              className={`w-full bg-gradient-to-r ${selectedService.gradient} text-black font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-current/25 transition-all duration-300`}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
