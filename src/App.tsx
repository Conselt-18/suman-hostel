import { useLenis } from "@/lib/use-lenis";
import { Preloader } from "@/components/site/Preloader";
import { Nav, Footer } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { FloorPlan } from "@/components/site/FloorPlan";
import { RoomShowcase } from "@/components/site/RoomShowcase";
import { Facilities } from "@/components/site/Facilities";
import { Balcony, KitchenCommon } from "@/components/site/Balcony";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { FloatingActions } from "@/components/site/FloatingActions";

export default function App() {
  useLenis();
  return (
    <div id="top" className="relative">
      <Preloader />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <FloorPlan />
      <RoomShowcase />
      <Facilities />
      <Balcony />
      <KitchenCommon />
      <Gallery />
      <Location />
      <Booking />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}
