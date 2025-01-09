import Link from "next/link"; // Corrected import path for Next.js Link component

export const Footer = () => {
  const navigationItems = [
    {
      title: "Quick Links",
      items: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Collections",
          href: "/collections",
        },
        {
          title: "Contact Us",
          href: "/contact",
        },
      ],
    },
    {
      title: "Collections",
      items: [
        {
          title: "Salwar Sets",
          href: "/collections",
        },
        {
          title: "Sarees",
          href: "/collections",
        },
        {
          title: "Blouses",
          href: "/collections",
        },
        {
          title: "Wedding Wear",
          href: "/collections",
        },
      ],
    },
    {
      title: "Quick Links",
      description:
        "Learn more about Safia&apos;s RNV and our mission in the textile industry.",
      items: [
        {
          title: "Terms and Conditions",
          href: "/terms-and-conditions",
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Contact Us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white py-20 text-gray-800 lg:py-20 md:py-10 xl:py-20">
      <div className="container mx-auto px-4 ">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2 ">
              <h2 className="max-w-xl text-left text-3xl font-bold tracking-tighter md:text-5xl">
                Safia&apos;s RNV
              </h2>
              <p className="max-w-lg text-left text-lg leading-relaxed tracking-tight text-gray-600">
                Empowering the textile industry with eco-friendly, durable
                fabrics and fostering traditional weaving practices.
              </p>
            </div>
            <div className="flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight text-gray-600">
              <p>123 Innovation Street</p>
              <p>Greenfield City</p>
              <p>600044 India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@safiasrnv.com"
                  className="text-blue-500"
                >
                  contact@safiasrnv.com
                </a>
              </p>
            </div>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-1 text-base"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-gray-800">
                    {item.title}
                  </p>
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="flex items-center justify-between text-gray-600"
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
