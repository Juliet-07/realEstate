import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import { P } from "../../components/FontSize/styles";
import { Banner } from "../../styles/about.styles";
import TextCarousel from "../../screens/LandingPage/TextCarousel";
const About = () => {
  return (
    <GeneralLayout>
      <Banner>
        <div className="overlay">
          <section>
            <div className="info">
              <P
                style={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                ABOUT US
              </P>
            </div>
          </section>
        </div>
      </Banner>
      <div>
        <P style={{ color: "black" }}>
          A & E Properties is a premier upscale real estate firm that specialize
          in buying, selling and renting of luxury homes and condominiums
          particularly in about 12 states in Nigeria.
        </P>
      </div>
      <TextCarousel />
    </GeneralLayout>
  );
};
export default About;
