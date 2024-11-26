import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => (
  <div className="w-full bg-gradient-to-b from-indigo-100 via-purple-50 to-white py-20 lg:py-40">
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Badge variant="outline">FAQs</Badge>
          <div className="flex flex-col gap-2">
            <h4 className="font-regular max-w-xl text-center text-3xl font-bold tracking-tighter md:text-5xl">
              Welcome to Rainbows and Vibgyors
            </h4>
            <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
              At RNV, we believe every color tells a story. Whether you&apos;re
              exploring vibrant designs or seeking timeless elegance, we are
              here to bring your vision to life with a splash of creativity and
              innovation.
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Have questions? Let&apos;s connect
              <PhoneCall className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              "What makes RNV unique?",
              "How do I customize my order?",
              "What materials do you use?",
              "How long does delivery take?",
              "Do you provide bulk orders for events?",
              "What is your return policy?",
              "How can I contact your support team?",
              "Where can I see samples of your work?",
            ].map((question, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  {
                    [
                      "RNV stands out with our unique blend of vibrant creativity and attention to detail, ensuring every product is one-of-a-kind.",
                      "You can customize your order by reaching out to our team with your specific requirements. We will work closely to bring your ideas to life.",
                      "We use premium, eco-friendly, and durable materials to ensure quality and sustainability in every product.",
                      "Delivery typically takes 7-10 business days, depending on your location and order size.",
                      "Yes, we offer tailored solutions for bulk orders to make your events unforgettable.",
                      "We accept returns within 15 days of delivery for unused items in original packaging. Check our policy for details.",
                      "You can contact us via phone, email, or through the contact form on our website.",
                      "Visit our website or social media platforms to see a gallery of our vibrant creations and past projects.",
                    ][index]
                  }
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
