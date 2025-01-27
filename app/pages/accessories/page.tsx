"use client";

import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import Whatsapp from "@/components/Whatsapp";

const Accessories = () => {
  const items = [
    {
      title: "Item 1",
      description: "Description for item 1",
      imageSrc: "/assets/image10.jpg",
      imageAlt: "Item 1",
    },
    {
      title: "Item 2",
      description: "Description for item 2",
      imageSrc: "/assets/image10.jpg",
      imageAlt: "Item 2",
    },
    {
      title: "Item 3",
      description: "Description for item 3",
      imageSrc: "/assets/image10.jpg",
      imageAlt: "Item 3",
    },
    {
      title: "Item 4",
      description: "Description for item 4",
      imageSrc: "/assets/image10.jpg",
      imageAlt: "Item 4",
    },
    {
      title: "Item 5",
      description: "Description for item 5",
      imageSrc: "/assets/image10.jpg",
      imageAlt: "Item 5",
    },
    {
      title: "Item 6",
      description: "Description for item 6",
      imageSrc: "/assets/image10.jpg",
      imageAlt: "Item 6",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100">
      <div className="mt-16 container mx-auto py-10">
        <h1 className="mb-8 text-3xl font-bold">Accessories</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card key={index} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  );
};

export default Accessories;
