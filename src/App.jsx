import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import "./sass/app.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: false,
    });

    // Refresh AOS khi DOM thay đổi
    AOS.refresh();

    // Smooth scroll behavior
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
