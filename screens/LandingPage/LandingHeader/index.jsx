/*
 * component: Landing Header
 * author: Juliet Kelechi
 * Date: September, 20, 2020
 */

import React from 'react';
import { LandingHeaderBox } from "./landingHeader.styles";
import { useRouter } from "next/router";

const LandingHeader = () => {
  const router = useRouter();

  return (
    <LandingHeaderBox>
      <div className="overlay" />
      <section>
        <div className="info">
          <h3>A & E Properties</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan vel odio sit amet lacinia. Integer placerat, diam ut sagittis tincidunt, turpis justo viverra metus, vel finibus mi tortor eu purus.
          </p>
        </div>
        
        {/* <Button
          type={"button"}
          click={() => router.push('/sign-up')}
          icon={<BsArrowRight />}
          text={"Get Started"}
        /> */}
      </section>
    </LandingHeaderBox>
  );
};

export default LandingHeader;