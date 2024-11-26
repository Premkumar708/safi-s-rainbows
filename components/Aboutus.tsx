"use client";

export const AboutUs = () => (
  <div className="w-full py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
        {/* Image Section */}
        <div className="w-full max-w-lg flex-1 lg:max-w-none">
          <img
            src="https://www.mohifashion.com/cdn/shop/articles/boutique_shop_1.jpg?v=1721996504&width=1100" // Replace with your image path
            alt="Safia's Rainbows and Vibgyors"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            <strong>Safia&apos;s Rainbows and Vibgyors</strong> is a newly
            started reselling store born out of a passion for textiles. As a
            trusted supplier of a wide range of fabrics, we bring you
            collections featuring vibrant designs, stunning colors, and
            luxurious textures to help you create unique outfits for any
            occasion.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every fabric we offer is carefully sourced from reliable traders,
            ensuring durability and exceptional quality. Whether you&apos;re
            looking for casual wear, wedding attire, or something in between,
            our curated collections are designed to inspire your creativity and
            add a splash of elegance to your wardrobe.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            At Safia&apos;s Rainbows and Vibgyors, we believe that every piece
            of fabric tells a story. Let us be part of your journey to create
            timeless and memorable looks!
          </p>
        </div>
      </div>
    </div>
  </div>
);
