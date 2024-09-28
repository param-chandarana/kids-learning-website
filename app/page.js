import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Interactive Kids Learning Platform | Fun and Educational Activities",
  description:
    "Discover a fun and interactive learning platform designed for preschool to early elementary kids. Engage in educational activities, printables, and enjoy a child-friendly interface for safe and exciting learning.",
  keywords:
    "kids learning platform, preschool learning, early elementary education, interactive activities, educational resources, printables, child-friendly interface",
  author: "Kids Learning Platform",
  openGraph: {
    title:
      "Interactive Kids Learning Platform | Fun and Educational Activities",
    description:
      "Discover a fun and interactive learning platform designed for preschool to early elementary kids. Engage in educational activities, printables, and enjoy a child-friendly interface for safe and exciting learning.",
    image: "/public/interactiveActivities.png", // Replace with actual image path
    url: "https://kids-learning-website.vercel.app", // Replace with actual URL
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interactive Kids Learning Platform | Fun and Educational Activities",
    description:
      "Discover a fun and interactive learning platform designed for preschool to early elementary kids. Engage in educational activities, printables, and enjoy a child-friendly interface for safe and exciting learning.",
    image: "/public/interactiveActivities.png", // Replace with actual image path
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
