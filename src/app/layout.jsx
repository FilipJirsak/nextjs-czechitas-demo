import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default ({ children }) => {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png"/>
      </head>
      <body className={`bg-[#FCFCFC] text-black dark:bg-black dark:text-white ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
};
