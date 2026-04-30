import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

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
      {/* Sequence Section */}
      {/* FAQ Section */}
      {/* Footer */}
      <section className="h-dvh"></section>
    </div>
  );
}
