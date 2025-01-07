import React from "react";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg ${className}`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || "Card image"}
          width={300}
          height={200}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};
