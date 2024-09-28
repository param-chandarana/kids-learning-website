import "./globals.css";
import { Itim } from "next/font/google";

const itim = Itim({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${itim.className} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
