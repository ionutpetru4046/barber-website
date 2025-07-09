// components/Footer.tsx
"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Working Hours</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Josh’s Turkish Barbers <br />
            📍 18 Fitzgibbon St, Dublin 1 (Next to Savoy Takeaway) <br />
            💈 Walk-ins Welcome <br />
            ⏰ Open 7 days a week <br />
            D01 R2K5, Dublin, Ireland
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>📞 Phone: (123) 456-7890</li>
            <li>📧 Email: info@barbershop.com</li>
            <li>📍 Address: 123 Barber St, Style City</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-white">
            <a
              href="https://facebook.com"
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
              aria-label="Facebook"
              target="_blank" rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center transition"
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition"
              aria-label="Twitter"
              target="_blank" rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-sm text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Josh’s Barber Shop. All rights reserved.
      </div>
    </footer>
  );
}
