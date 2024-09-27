import Features from "@/components/Home/Features";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Features />
        {/* <WhyChooseUs /> */}
        <Testimonials />
      </main>
    </>
  );
}
