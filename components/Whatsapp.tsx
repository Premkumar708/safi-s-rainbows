"use client";
import Image from "@/node_modules/next/image";
import React from "react";

const Whatsapp = () => {
  const number = "9884497635";
  const message = "Hello, I have a query";

  const url = `https://wa.me/${encodeURI(number)}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div className="fixed bottom-7 left-7 z-50">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-12 items-center justify-center rounded-full bg-green-400 text-white shadow-lg hover:bg-green-600"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"
            alt=""
            width={100}
            height={100}
          />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
