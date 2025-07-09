"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefilledService,
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // TODO: Send to backend (MongoDB or API route)
    alert("Booking submitted! We’ll contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center pt-32 pb-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl max-w-lg w-full shadow-2xl border border-white/10"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Book an Appointment</h2>

        <div className="mb-4">
          <label className="text-white block mb-1">Name</label>
          <input
            name="name"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-white block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-white block mb-1">Phone</label>
          <input
            name="phone"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-white block mb-1">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Haircut + Beard">Haircut + Beard</option>
            <option value="Kids Cut">Kids Cut</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-white block mb-1">Date</label>
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="text-white block mb-1">Time</label>
          <input
            type="time"
            name="time"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
