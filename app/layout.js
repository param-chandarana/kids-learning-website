import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Engaging Kids Learning Platform | KL",
  description:
    "Explore fun and interactive educational resources designed for kids. Our platform offers engaging activities, printables, and a child-friendly interface for enjoyable learning.",
  keywords:
    "kids learning, educational resources, interactive activities, printables, child-friendly interface",
  author: "Your Name or Organization",
  openGraph: {
    title: "Engaging Kids Learning Platform | KL",
    description:
      "Explore fun and interactive educational resources designed for kids. Our platform offers engaging activities, printables, and a child-friendly interface for enjoyable learning.",
    image: "/path/to/your/image.jpg", // Replace with actual image path
    url: "https://yourdomain.com", // Replace with actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Engaging Kids Learning Platform | KL",
    description:
      "Explore fun and interactive educational resources designed for kids. Our platform offers engaging activities, printables, and a child-friendly interface for enjoyable learning.",
    image: "/path/to/your/image.jpg", // Replace with actual image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
