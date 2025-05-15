import About from "./components/About";
import Appbar from "./components/Appbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import useFullScreenScroll from "./hooks/useFullscreenScroll";

export default function App() {
  useFullScreenScroll();
  return (
    <div className="transition-colors duration-700 bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col select-none">
      <Appbar/>
      <main className="flex-grow">
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
