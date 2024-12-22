import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import OurProcess from "@/components/sections/OurProcess";
import OurServices from "@/components/sections/OurServices";
import Quote from "@/components/sections/Quote";
import Stats from "@/components/sections/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <OurProcess />
      <Quote />
      <Stats />
      <Contact />
      {/* <Aboutus /> */}
      <footer className="text-xl font-medium text-center pb-20">
        Made with ❤️ by{" "}
        <Link
          className="text-green-700 underline"
          href={"https://www.instagram.com/mimikhoudour_official/"}
        >
          Mimi K
        </Link>
      </footer>
    </div>
  );
}
