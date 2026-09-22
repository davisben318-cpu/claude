import DisclaimerBar from "./components/layout/DisclaimerBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileStickyCta from "./components/layout/MobileStickyCta";
import Hero from "./components/sections/Hero";
import Introduction from "./components/sections/Introduction";
import Services from "./components/sections/Services";
import Equipment from "./components/sections/Equipment";
import Work from "./components/sections/Work";
import BuiltAroundTheWork from "./components/sections/BuiltAroundTheWork";
import Process from "./components/sections/Process";
import Faq from "./components/sections/Faq";
import Reviews from "./components/sections/Reviews";
import ServiceArea from "./components/sections/ServiceArea";
import FinalCta from "./components/sections/FinalCta";
import EstimateForm from "./components/sections/EstimateForm";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-paper-50"
      >
        Skip to content
      </a>

      <DisclaimerBar />
      <Header />

      <main id="main">
        <Hero />
        <Introduction />
        <Services />
        <Equipment />
        <Work />
        <BuiltAroundTheWork />
        <Process />
        <Faq />
        <Reviews />
        <ServiceArea />
        <FinalCta />
        <EstimateForm />
      </main>

      <Footer />
      <MobileStickyCta />
      {/* Spacer so the mobile sticky CTA never covers footer content */}
      <div className="h-[76px] lg:hidden" aria-hidden="true" />
    </div>
  );
}
