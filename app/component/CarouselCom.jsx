import React from "react";
import { Carousel } from "flowbite-react";

const CarouselCom = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-96">
      <Carousel leftControl rightControl>
        <img
          src="/assets/Carousel1.jpg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselCom;
