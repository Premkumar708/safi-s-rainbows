"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Collections",
      description: "Explore our curated boutique collections.",
      items: [
        {
          title: "New Arrivals",
          href: "/pages/newArrivals",
        },
        {
          title: "Festive Wear",
          href: "/pages/festiveWare",
        },
        {
          title: "Casual Chic",
          href: "/pages/casual-chic",
        },
        {
          title: "Accessories",
          href: "/pages/accessories",
        },
      ],
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      description: "We’re here to assist you.",
      href: "/contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const number = "9884497635";
  const message = "Hello, I have a query";

  const url = `https://wa.me/${encodeURI(number)}?text=${encodeURIComponent(message)}`;

  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-background shadow-md">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center justify-between gap-4 px-5 lg:grid lg:grid-cols-3">
        {/* Navigation Menu for Large Screens */}
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[350px] p-4">
                        <div className="flex grid-cols-1 flex-col gap-4">
                          <div className="flex flex-col">
                            <p className="text-base font-semibold">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-col text-sm">
                            {item.items.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="size-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink href={item.href}>
                      <Button variant="ghost">{item.title}</Button>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo Section */}
        <div className="md:ml-14 flex items-center justify-center gap-2 lg:justify-center">
          <img src="/assets/SSRNV.png" alt="" className="size-16"></img>
          <p className="text-xl font-bold">Safia&apos;s RNV</p>
        </div>

        {/* Action Buttons */}
        <div className=" hidden w-full justify-end gap-4 lg:flex ">
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href={url} target="_blank">
              <Phone className="size-4" />
              Order on WhatsApp
            </a>
          </Button>
          <Button>Explore Now</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-12 px-7 lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
          {isOpen && (
            <div className="absolute right-0 top-20 w-full bg-background p-4 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title} className="mb-4">
                  {item.items ? (
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <div className="flex flex-col gap-2 pl-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="text-muted-foreground hover:text-primary"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="text-lg">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                className="mt-4 flex w-full items-center gap-2"
                asChild
              >
                <a href={url} target="_blank">
                  <Phone className="size-4" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
