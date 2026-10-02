import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";
import Footer from "./components/layout/Footer";

import ScrollProgress from "./components/Animation/ScrollProgress";
import CustomCursor from "./components/Animation/CustomCursor";

function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Campus />
        <Testimonials />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}

export default App;