"use client";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["vibrant", "elegant", "unique", "colorful", "inspiring"],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full px-4 py-20 lg:py-40">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="mt-10">
              <Badge variant="outline">New Collections!</Badge>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-regular text-left text-3xl tracking-tighter md:text-7xl">
                Discover Timeless
              </h1>
              <h1 className="font-regular text-left text-3xl tracking-tighter md:text-7xl">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </h1>
              <p className="mt-10 max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground md:mt-20">
                Celebrate individuality with curated designs that define your
                style. Step into a world of bespoke fashion, where tradition
                meets modernity. Our boutique brings you handpicked collections
                crafted with love and care for every occasion.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-4 " variant="outline">
                Call Us Now <PhoneCall className="size-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Shop Now <MoveRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden rounded-md bg-muted">
              <img
                src="https://assets.vogue.in/photos/5ce41a6ab80311a23d8f5797/2:3/w_2560%2Cc_limit/These-Indian-boutiques-are-taking-sustainability-offline.jpg"
                alt="Boutique Collection"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-2 overflow-hidden rounded-md bg-muted">
              <img
                src="https://content.jdmagicbox.com/v2/comp/chennai/y6/044pxx44.xx44.240921165535.y5y6/catalogue/oto9aus6u2jtz0t-pfzrh7lygy.jpg"
                alt="Exclusive Designs"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md bg-muted">
              <img
                src="https://assets.architecturaldigest.in/photos/6308aa17372770b1eec9e284/3:2/w_1620,h_1080,c_limit/This%20new%20Colaba%20boutique%20is%20as%20exquisite%20as%20the%20Parsi%20Gara%20saris%20on%20display.jpg"
                alt="Timeless Fashion"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
