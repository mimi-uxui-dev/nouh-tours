import Hero from "@/components/sections/Hero";
import OurProcess from "@/components/sections/OurProcess";
import OurServices from "@/components/sections/OurServices";
import Quote from "@/components/sections/Quote";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <OurProcess />
      <Quote />
    </div>
  );
}
