/*
 * page: Home
 * author: Juliet Kelechi
 * Date: September, 20, 2020
 */

import React from "react";
import LandingHeader from "./LandingHeader";
import Slide from "./imageCarousel";

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <Slide/>
    </div>
  );
};

export default Landing;
