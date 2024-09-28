import "./globals.css";
import { Itim } from "next/font/google";

const itim = Itim({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
      </head>
      <body className={`${itim.className} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
