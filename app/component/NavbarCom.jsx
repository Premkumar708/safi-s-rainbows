"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navContent = [
    { item: "Home", link: "/" },
    { item: "New Collections", link: "/new-collections" },
    { item: "Accessories", link: "/accessories" },
    { item: "About Us", link: "/about-us" },
    { item: "Contact Us", link: "/pages/contact" },
  ];

  const Accessories = ["Salwar Sets", "Sarees", "Blouses", "Fabrics"];

  const sub = {
    Fabrics: ["Synthetic", "Cotton", "Silk Cotton", "Raw Silk", "Silk"],
    Blouses: ["Ready to Wear", "Bits-Plain", "Designer"],
  };
  const routeList = [
    {
      href: "#service",
      label: "Services",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
    },
    {
      href: "#team",
      label: "Team",
    },
    // {
    //   href: "#contact",
    //   label: "Contact",
    // },
    {
      href: "#faq",
      label: "FAQ",
    },
    {
      href: "#community",
      label: "Blogs",
    },
  ];

  return (
    <header className="sticky top-1 z-40 mx-auto flex w-[90%] mb-2 items-center justify-between rounded-md border border-secondary bg-opacity-10 bg-gradient-to-r from-blue-950 via-teal-900 to-blue-950 p-4 text-white shadow-inner md:w-full md:rounded-none">
      <div className="text-2xl font-bold">Logo</div>
      <div className="hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex space-x-6">
            {navContent.map((item, ind) =>
              item.item === "Accessories" ? (
                <DropdownMenu key={ind}>
                  <DropdownMenuTrigger className="hover:scale-105 hover:text-teal-300">
                    Accessories
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-2 rounded-md bg-white p-2 text-black shadow-md">
                    {Accessories.map((accessory, idx) =>
                      sub.hasOwnProperty(accessory) ? (
                        <DropdownMenuSub key={idx}>
                          <DropdownMenuSubTrigger className="hover:bg-gray-100 hover:text-teal-700">
                            {accessory}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="rounded-md bg-white p-2 shadow-md">
                              {sub[accessory].map((subItem, subIdx) => (
                                <DropdownMenuItem
                                  key={subIdx}
                                  className="hover:bg-gray-100 hover:text-teal-700"
                                >
                                  {subItem}
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ) : (
                        <DropdownMenuItem
                          key={idx}
                          className="hover:bg-gray-100 hover:text-teal-700"
                        >
                          {accessory}
                        </DropdownMenuItem>
                      ),
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={ind}
                  href={item.link}
                  className="text-md cursor-pointer hover:scale-105 hover:text-teal-300"
                >
                  {item.item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex items-center md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-br-2xl rounded-tr-2xl border-secondary bg-card"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center ">
                  <Link
                    href="/"
                    className="flex items-center text-lg font-bold"
                  >
                    {/* <img
                      src=""
                      alt="Adszoo Digital Marketing Agency Logo"
                      className="mr-2 h-6 w-6"
                      loading="lazy"
                    /> */}
                    LOGO
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {navContent.map(({ item, link }) => (
                  <button
                    key={link}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={link}>{item}</Link>
                  </button>
                ))}
              </div>
            </div>
            <button className=" w-full font-bold ">
              <Link href="/">LOGO</Link>
              {/* <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" /> */}
            </button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
