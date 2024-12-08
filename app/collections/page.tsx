import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

const collections = [
  {
    title: "Salwar Sets",
    description: "Beautifully crafted salwar sets for every occasion.",
    image: "/images/salwar-sets.jpg",
  },
  {
    title: "Sarees",
    description: "Elegant sarees showcasing timeless designs.",
    image: "/images/sarees.jpg",
  },
  {
    title: "Blouses",
    description: "Stylish blouses to match your traditional outfits.",
    image: "/images/blouses.jpg",
  },
  {
    title: "Wedding Wear",
    description: "Exquisite wedding wear for your special day.",
    image: "/images/wedding-wear.jpg",
  },
  {
    title: "Salwar Sets",
    description: "Beautifully crafted salwar sets for every occasion.",
    image: "/images/salwar-sets.jpg",
  },
  {
    title: "Sarees",
    description: "Elegant sarees showcasing timeless designs.",
    image: "/images/sarees.jpg",
  },
  {
    title: "Blouses",
    description: "Stylish blouses to match your traditional outfits.",
    image: "/images/blouses.jpg",
  },
  {
    title: "Wedding Wear",
    description: "Exquisite wedding wear for your special day.",
    image: "/images/wedding-wear.jpg",
  },
];

const CollectionsPage = () => {
  return (
    <>
      <Header />
      <div className="w-full bg-white py-20 text-gray-800 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              Explore Our Collections
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Discover a wide range of traditional and modern attire crafted for
              all occasions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="flex flex-col items-center overflow-hidden rounded-lg border text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {collection.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="container w-full py-10">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold">Explore Our Collections</h2>
        </div>

        {/* Content Section */}
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
          {/* Salwar Sets */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Salwar Sets</h3>
            <p className="text-muted-foreground">
              Includes Ready to Wear, Kurtis, Tops, Dupattas, Bottom Wears,
              Skirts, and Patch Works in various materials like Silk, Cotton,
              and Synthetic.
            </p>
          </div>

          {/* Sarees */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Sarees</h3>
            <p className="text-muted-foreground">
              Collections in Silk, Cotton, Silk Cotton, Raw Silk, and Synthetic
              fabrics for all occasions.
            </p>
          </div>

          {/* Blouses */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Blouses</h3>
            <p className="text-muted-foreground">
              Ready-to-wear blouses and blouse bits to complement any saree
              style.
            </p>
          </div>

          {/* Inskirts & Accessories */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Inskirts & Accessories
            </h3>
            <p className="text-muted-foreground">
              A wide range of accessories including saree falls, laces, inner
              garments, bindis, bangles, and more.
            </p>
          </div>
        </div>

        {/* Special Collections */}
        <div className="mt-12 text-center">
          <h3 className="mb-4 text-2xl font-semibold">Special Collections</h3>
          <p className="text-muted-foreground">
            Designed for Working Women, Teens, Home Makers, Newly Wedded
            Couples, and Expectant Mothers.
          </p>
        </div>

        {/* Home Essentials */}
        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-semibold">Home Essentials</h3>
          <p className="text-muted-foreground">
            Discover a variety of home essentials like Towels, Bedsheets,
            Blankets, Pillow Covers, and more.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CollectionsPage;
