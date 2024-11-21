"use client";
import React from "react";
import { Phone } from "lucide-react";

const Whats = () => {
  const number = "9884497635"; 
  const message = "Hello, I have a query";

  const url = `https://wa.me/${encodeURI(number)}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default Whats;
