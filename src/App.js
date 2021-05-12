import React from "react";
import NavSection from "./NavSection";
import MasteheadSection from "./MastheadSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ConatctSection";
import FooterSection from "./FooterSection";
import "./styles.css";

const App = () => (
  <div>
    <NavSection />
    <MasteheadSection />
    <PortfolioSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
);
export default App;
