import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Sequence from "../components/Sequence";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Project Section */}
      <Projects />
      {/* Client Testimonial */}
      {/* Service Section */}
      <Services />
      {/* Sequence Section */}
      <Sequence />
      {/* FAQ Section */}
      {/* Footer */}
      <section className="h-dvh"></section>
    </div>
  );
}
