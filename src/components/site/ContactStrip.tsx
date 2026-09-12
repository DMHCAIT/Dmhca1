import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function ContactStrip() {
  const [activeWhatsApp, setActiveWhatsApp] = useState(0);

  const whatsappNumbers = [
    { number: "+91 8121678996", display: "+91 81216 78996" },
    { number: "+91 8121678993", display: "+91 81216 78993" },
  ];

  // Rotate WhatsApp numbers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWhatsApp((prev) => (prev + 1) % whatsappNumbers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (number: string) => {
    const phoneNumber = number.replace(/\D/g, "");
    const message = "Hello, I'm interested in your courses";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-slate-700">
      <div className="container-x py-2">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-16">
          {/* Contact Us Section */}
          <Link
            to="/contact-us"
            className="flex items-center gap-3 px-2 md:px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors group whitespace-nowrap focus-visible:outline-none"
          >
            <img src="/contact.png" alt="Contact Us" className="w-7 h-7 md:w-9 md:h-9 flex-shrink-0 filter brightness-0 saturate-100 sepia-[.5] hue-rotate-[30deg] dark:brightness-100" />
            <div className="hidden md:block">
              <div className="text-base md:text-lg font-medium text-slate-900 dark:text-white">
                Contact Us
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 md:h-10 bg-gray-300 dark:bg-slate-600/50"></div>

          {/* WhatsApp Section */}
          <button
            onClick={() =>
              handleWhatsAppClick(whatsappNumbers[activeWhatsApp].number)
            }
            className="flex items-center gap-3 px-2 md:px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer whitespace-nowrap focus-visible:outline-none"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7 md:w-9 md:h-9 flex-shrink-0" />
            <div className="hidden md:block text-left">
              <div className="text-base md:text-lg font-medium text-slate-900 dark:text-white">
                {whatsappNumbers[activeWhatsApp].display}
              </div>
            </div>
          </button>

          {/* Divider */}
          <div className="w-px h-6 md:h-10 bg-gray-300 dark:bg-slate-600/50"></div>

          {/* International Calling Section */}
          <a
            href="tel:+919281887047"
            className="flex items-center gap-3 px-2 md:px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors group whitespace-nowrap focus-visible:outline-none"
          >
            <img src="/international-call.png" alt="International Calling" className="w-7 h-7 md:w-9 md:h-9 flex-shrink-0 filter brightness-0 saturate-100 sepia-[.5] hue-rotate-[30deg] dark:brightness-100" />
            <div className="hidden md:block text-left">
              <div className="text-base md:text-lg font-medium text-slate-900 dark:text-white">
                +91 92 81887047
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
