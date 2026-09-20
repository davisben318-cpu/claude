import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileStickyCta from "./components/layout/MobileStickyCta";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import ValueProps from "./components/sections/ValueProps";
import Reveal from "./components/sections/Reveal";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import ServiceArea from "./components/sections/ServiceArea";
import FinalCta from "./components/sections/FinalCta";
import QuoteForm from "./components/sections/QuoteForm";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Services />
        <ValueProps />
        <Reveal />
        <Process />
        <Testimonials />
        <ServiceArea />
        <FinalCta />
        <QuoteForm />
      </main>

      <Footer />
      <MobileStickyCta />
      {/* Spacer so the mobile sticky CTA never covers footer content */}
      <div className="h-[76px] lg:hidden" aria-hidden="true" />
    </div>
  );
}
