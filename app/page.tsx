import NavbarCom from "./component/NavbarCom";
// import Carousel from "./component/CarouselCom";
import Whats from "../components/Whatsapp";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Case } from "@/components/Case";
import { Services } from "@/components/Services";
import { AboutUs } from "@/components/Aboutus";
export default function Home() {
  return (
    <div className="overflow-x-hidden align-middle">
      <Header />
      {/* <NavbarCom /> */}
      {/* <Carousel /> */}
      <Hero />
      <AboutUs />
      <Services />
      <Case />
      <Whats />
      <FAQ />
      <Footer />
    </div>
  );
}
