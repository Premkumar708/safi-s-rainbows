import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Services = () => (
  <div className="w-full bg-gradient-to-b from-indigo-50 via-white to-purple-50 py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-start gap-8">
        <div>
          <Badge className="rounded-md bg-primary px-3 py-1 text-sm text-white">
            Safia&apos;s Rainbows and Vibgyors
          </Badge>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            A Splash of Colors, A Touch of Elegance
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground lg:max-w-2xl">
            At Safia&apos;s Rainbows and Vibgyors, we bring you the finest
            fabrics and designs, carefully selected to inspire creativity and
            elevate your wardrobe. From vibrant hues to elegant textures, every
            piece in our collection is a testament to our passion for textiles.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Wide Range of Fabrics",
              description:
                "Explore a diverse selection of designs, textures, and colors for every occasion.",
            },
            {
              title: "Trusted Sourcing",
              description:
                "Our materials come from reliable traders, ensuring quality and durability.",
            },
            {
              title: "Custom Creations",
              description:
                "Our fabrics let you craft unique outfits that stand out.",
            },
            {
              title: "Passion for Textiles",
              description:
                "Driven by a love for colors, patterns, and all things beautiful.",
            },
            {
              title: "Elegant and Affordable",
              description:
                "High-quality fabrics at prices that suit every budget.",
            },
            {
              title: "Perfect for All Occasions",
              description:
                "Whether casual or formal, find fabrics to create stunning looks.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-row items-start gap-6">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{feature.title}</p>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
