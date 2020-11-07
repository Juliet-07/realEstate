/*
 * page: Home
 * author: Juliet Kelechi
 * Date: September, 20, 2020
 */

import React from "react";
// import TakeAStand from "./TakeAStand";
// import AfricaRising from "./AfricaRising";
// import LeadersQuote from "./LeadersQuotes";
import LandingHeader from "./LandingHeader";
// import TextCarousel from "./TextCarousel";
// import Stats from "./Stats";
import {useQuery} from "@apollo/client";
import {LANDING_PAGE_STATS} from "../../lib/queries/landingPageStats.gql";
import {PageLoader} from "../../components/Loaders";
import {ToastMessage, type} from "../../components/ToastMessage";
// import SignPetitionSummary from "./SignPetitionSummary";

const Landing = () => {
  

  return (
    <div>
      <LandingHeader />
      {/* <TakeAStand />
      <SignPetitionSummary />
      <AfricaRising />
      <LeadersQuote /> */}
      {/* <Stats
        content={[
          { number: 500, label: "Registered Users", id: 1 },
          { number: 109, label: "Senators", id: 2 },
          { number: 360, label: "Legislators", id: 3 },
          { number: 500, label: "Petitions", id: 4 },
          // { number: data.getStudentsCount, label: "Students", id: 2 },
          // { number: data.countClass, label: "Classes", id: 3 },
          // { number: data.getTeachersCount, label: "Teachers", id: 4 },
        ]} */}
      {/* /> */}
    </div>
  );
};

export default Landing;
