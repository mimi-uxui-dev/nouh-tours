import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import OurProcess from "@/components/sections/OurProcess";
import OurServices from "@/components/sections/OurServices";
import Quote from "@/components/sections/Quote";
import Stats from "@/components/sections/Stats";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nouh Tours</title>

        <meta property="og:title" content="Study in Italy with Nouh Tours" />
        <meta
          name="description"
          content=" Study in Italy with Nouh – Your Journey Starts Here! Nouh specializes in guiding students to pursue their dreams of
        studying in Italy. From selecting the right university to
        navigating visa applications, Nouh ensures a smooth and
        stress-free process every step of the way. "
          key="desc"
        />
      </Head>
      <Hero />
      <div className=" xl:px-10">
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
            href={"https://www.instagram.com/mimi_khoudour/"}
            target="_blank"
          >
            Mimi K
          </Link>
        </footer>
      </div>
    </div>
  );
}
