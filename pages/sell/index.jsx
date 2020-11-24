import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import { Banner } from "./styled";

const Sell = () => {
  return (
    <GeneralLayout>
      <Banner>
        <div className="overlay">
          <section>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                accumsan vel odio sit amet lacinia. Integer placerat, diam ut
                sagittis tincidunt, turpis justo viverra metus, vel finibus mi
                tortor eu purus.
              </p>
            </div>
          </section>
        </div>
      </Banner>
    </GeneralLayout>
  );
};

export default Sell;
