"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "services", "expertise", "process", "why-choose-us", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-navy-primary">GURUKRUPA</span>
              <span className="text-xs text-gray-600 tracking-wider">SHRAVAYANTRA KENDRA</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-accent flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  activeSection === link.href.substring(1)
                    ? "text-purple-600"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick("#contact")}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-600 ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick("#contact")}
                className="mx-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
