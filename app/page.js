import Features from "@/components/Home/Features";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </>
  );
}
