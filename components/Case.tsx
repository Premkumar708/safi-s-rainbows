"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Case = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  const collections = [
    "Salwar Sets",
    "Sarees",
    "Blouses",
    "Inskirts",
    "Bindis",
    "Inner garments",
    "Casual Wears",
    "Wedding Wear",
    "Ready to wear Salwar",
    "Suits",
    "Semi Stitched",
    "Running Materials",
    "Kurtis",
    "Tops",
    "Short Kurtis",
    "Silk Cotton",
    "Synthetic",
    "Dupattas",
    "Raw Silk",
    "Silk",
  ];

  return (
    <div className="w-full py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 items-center gap-10">
          <h3 className="text-left text-sm font-bold tracking-tighter md:text-2xl lg:max-w-xl">
            Our Collections
          </h3>
          <div className="relative col-span-4 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-r from-background via-white/0 to-background"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {collections.map((item, index) => (
                  <CarouselItem className="basis-1/3 md:basis-1/6" key={index}>
                    <div className="flex aspect-square items-center justify-center rounded-md bg-muted bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 p-2 font-semibold">
                      <span className="text-sm">{item}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blouses
// https://5.imimg.com/data5/SELLER/Default/2023/6/312586787/HX/YB/RP/150875762/cotton-boutique-desgin-blouses-500x500.jpg

// Salwar
// https://imgmedia.lbb.in/media/2019/03/5c9b4dc9feedea3720644a44_1553681865377.jpg

// Sarees
// https://imgmedia.lbb.in/media/2019/08/5d5167ebe24af71f9588db98_1565616107200.jpg

// Inskirts
// https://5.imimg.com/data5/FN/OI/AI/SELLER-37408908/amala-500x500.JPG

// Bindis
// https://images-cdn.ubuy.co.id/6351a15f95845a24687fb0c3-6-packs-42-bindis-mix-n-match-face.jpg

// Casual Wears
// https://s.alicdn.com/@sc04/kf/H5d7b335005834deda48ebf04f4f15528a.jpg

// Wedding Wear
// https://imgmedia.lbb.in/media/2019/07/5d237968e93a896e55427d91_1562605928333.jpg

// Silk
// https://content3.jdmagicbox.com/v2/comp/chennai/70/044p6001170/catalogue/silkworm-boutique-thousand-lights-chennai-boutiques-2v3270l.jpg
