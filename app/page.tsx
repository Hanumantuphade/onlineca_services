import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection />

      <Footer />
    </main>
  );
}
