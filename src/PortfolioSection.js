import React from "react";
import PortfolioItme from "./PortfolioItme";

const PortfolioSection = () => (
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
        Portfolio
      </h2>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-center">
        <PortfolioItme />
        <PortfolioItme />
        <PortfolioItme />
        <PortfolioItme />
        <PortfolioItme />
        <PortfolioItme />
      </div>
    </div>
  </section>
);

export default PortfolioSection;
