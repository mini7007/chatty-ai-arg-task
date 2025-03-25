import React from "react";
import GlobalStyles from "./GlobalStyles";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Content from "./components/Content";
import ReviewSection from "./components/ReviewSection";
import FAQSection from "./components/FAQSection";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Features />
      <Content />
      <ReviewSection />
      <FAQSection />
      <DownloadApp />
      <Footer />
      
    </>
  );
}

export default App;
