import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
     <>
      <Header />
      <Hero />
      <About />
      <Carousel />
      <Footer />
    </>
  );
}
