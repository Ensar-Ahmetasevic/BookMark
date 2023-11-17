import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata = {
  title: "Bookmark Next App with TailwindCSS",
  description:
    "A clean and simple interface to organize your favourite websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} scroll-smooth`}>
      <body className="overflow-x-hidden  font-rubik">{children}</body>
    </html>
  );
}
