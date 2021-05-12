import React from "react";
import logo from "./assets/img/portfolio/submarine.png";

const PortfolioItme = () => (
  <div class="col-md-6 col-lg-4">
    <div
      class="portfolio-item mx-auto"
      data-toggle="modal"
      data-target="#portfolioModal6"
    >
      <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <div class="portfolio-item-caption-content text-center text-white">
          <i class="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src={logo} alt="..." />
    </div>
  </div>
);

export default PortfolioItme;
