import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB-CLONE",
  description: "Imdb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* Navbar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
