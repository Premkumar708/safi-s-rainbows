"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Whatsapp from "@/components/Whatsapp";
// import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Whatsapp />
      <Header />
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              {/* <Badge variant="outline">About Us</Badge> */}
              <div className="mt-4 flex flex-col gap-2">
                <h1 className="max-w-xl text-center text-3xl font-bold tracking-tighter md:ml-24 md:text-5xl">
                  About Us
                </h1>
                <p className="max-w-3xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
                  <strong>Safia&apos;s Rainbows and Vibgyors</strong> is a newly
                  started reselling store. Started with passion for Textiles. A
                  supplier of wide range of fabrics. Our Collection features a
                  variety of designs, colours, textures allowing you to create
                  unique and stunning outfits for any occasion. We source our
                  materials from trusted traders that are durable.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Our Vision",
                  description:
                    "Safia&apos;s aims to gain the confidence of our clients through honesty, integrity and efficiency. By way of hard and smart work, we will march forward to the next level",
                },
                {
                  title: "Our Mission",
                  description:
                    "To become a pioneer in Textile Industry. Also give equal importance to natural fibres, ecofriendly products and extend our helping hand to talented weavers practicing traditional weaving.",
                },
                {
                  title: "Objective",
                  description:
                    "We aim to build a reputation for our reliability and excellence in service. Also longterm relationships with our clients. Get connected to us and details your current needs. We are confident of our ability to meet the unique needs of our customers and strive hard to exceed their expectations everytime.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border bg-background p-6 shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="mb-4 text-xl font-semibold">{value.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image Section */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 text-center md:text-left">
                <h2 className="font-regular text-3xl tracking-tighter md:text-4xl">
                  Where Tradition Meets Modernity
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  From handpicked sarees to intricate accessories, we combine
                  age-old techniques with contemporary styles. Each piece is a
                  work of art, crafted with love, care, and attention to detail.
                </p>
              </div>
              <div className="overflow-hidden rounded-md bg-muted">
                <img
                  src="https://assets.architecturaldigest.in/photos/6308aa17372770b1eec9e284/3:2/w_1620,h_1080,c_limit/This%20new%20Colaba%20boutique%20is%20as%20exquisite%20as%20the%20Parsi%20Gara%20saris%20on%20display.jpg"
                  alt="RNV Collection"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="text-2xl font-semibold">
                Ready to Experience the Colors of Life?
              </h3>
              <p className="max-w-xl text-muted-foreground">
                Step into the world of Safia&apos;s — a celebration of you!
              </p>
              <button className="hover:bg-primary-dark rounded-md bg-primary px-6 py-3 text-white">
                Explore Our Collections
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
