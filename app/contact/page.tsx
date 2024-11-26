"use client";

import {
  Check,
  MoveRight,
  Facebook,
  Instagram,
  Youtube,
  PhoneCall,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [contactType, setContactType] = useState<string>("Student");
  const [purchaseType, setPurchaseType] = useState<string>("Online Purchase");

  return (
    <>
      <Header />
      <div className="w-full py-16 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left Side */}
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <Badge>Contact</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="max-w-xl text-left text-3xl font-bold tracking-tighter md:text-5xl">
                    Connect with Safia&apos;s RNV
                  </h4>
                  <p className="max-w-sm text-left text-lg leading-relaxed tracking-tight text-muted-foreground">
                    Got questions or looking to explore more? Reach out to us by
                    filling out this form, and we&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 text-left">
                <Check className="mt-2 size-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Quick Response</p>
                  <p className="text-sm text-muted-foreground">
                    Expect timely replies to your inquiries.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 text-left">
                <Check className="mt-2 size-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customer Focused</p>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our top priority.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 text-left">
                <Check className="mt-2 size-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Tailored Assistance</p>
                  <p className="text-sm text-muted-foreground">
                    Personalized solutions for your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Larger Form */}
            <div className="flex items-center justify-center">
              <div className="flex w-full max-w-lg flex-col gap-6 rounded-md border bg-background p-10 shadow-md">
                <p className="text-xl font-semibold">Send Inquiry</p>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" className="h-12" />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input id="contact" type="tel" className="h-12" />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="h-12" />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="contactType">Are you a...</Label>
                  <Select onValueChange={setContactType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Employed">Employed</SelectItem>
                      <SelectItem value="Homemaker">Homemaker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="purchaseType">Purchase Type</Label>
                  <Select onValueChange={setPurchaseType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Online Purchase">
                        Online Purchase
                      </SelectItem>
                      <SelectItem value="Offline Purchase">
                        Offline Purchase
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="message">Write your message</Label>
                  <Input id="message" type="text" className="h-20" />
                </div>

                <Button className="h-14 w-full gap-4 text-lg font-medium">
                  Send Inquiry <MoveRight className="h-5 w-5" />
                </Button>
                <div className="mt-4 flex justify-center gap-6">
                  <Facebook className="h-6 w-6 cursor-pointer text-blue-600" />
                  <Instagram className="h-6 w-6 cursor-pointer text-pink-500" />
                  <Youtube className="h-6 w-6 cursor-pointer text-red-600" />
                  <PhoneCall className="h-6 w-6 cursor-pointer text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
