/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white transition-shadow duration-300 ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" onClick={handleNavClick}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/logoBarber.jpg"
              alt="Barber Logo"
              className="h-24 w-24 object-contain"
            />
            <span className="font-bold text-xl tracking-wide">Josh's Turkish Barbers</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/booking", label: "Booking" },
            { href: "/admin/dashboard", label: "Admin" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`
                  relative px-1 py-1
                  ${isActive(href) ? "text-blue-400 font-semibold" : "text-white"}
                  hover:text-blue-400
                  before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0
                  before:bg-blue-400 before:transition-all before:duration-300
                  hover:before:w-full
                `}
              >
                {label}
              </Link>
            </li>
          ))}

          {!session && (
            <li>
              <Link
                href="/auth/signin"
                className="relative px-1 py-1 text-white hover:text-blue-400
                  before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0
                  before:bg-blue-400 before:transition-all before:duration-300
                  hover:before:w-full"
              >
                Log In
              </Link>
            </li>
          )}

          {session && (
            <li>
              <button
                onClick={() => signOut()}
                className="ml-4 bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 transition"
              >
                Log Out
              </button>
            </li>
          )}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/booking", label: "Booking" },
              { href: "/admin/dashboard", label: "Admin" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={handleNavClick}
                  className={`
                    block
                    ${isActive(href) ? "text-blue-400 font-semibold" : "text-white"}
                    hover:text-blue-400
                    border-b-2 border-transparent hover:border-blue-400
                    pb-1
                    transition
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}

            {!session && (
              <li>
                <Link
                  href="/auth/signin"
                  onClick={handleNavClick}
                  className="block text-white hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1 transition"
                >
                  Log In
                </Link>
              </li>
            )}

            {session && (
              <li>
                <button
                  onClick={() => {
                    signOut();
                    handleNavClick();
                  }}
                  className="w-full text-left bg-red-600 px-3 py-2 rounded text-white hover:bg-red-700 transition"
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
