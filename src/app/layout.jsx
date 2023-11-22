import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default ({ children }) => {
  return (
    <html lang="cs">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black text-white ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
};
