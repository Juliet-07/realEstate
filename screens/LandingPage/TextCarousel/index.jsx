/*
 * section: TextCarousel
 */

import React from "react";
import { TextCarouselWrap } from "./styled";
import { FlexibleDiv } from "../../../components/Box/styles";
import ScrollingDiv from "../../../components/Carousel";
import { generateID } from "../../../lib/generateID";

const TextCarousel = () => {
  const cardData = [
    {
      number: "01",
      quote:
        "  Our Mission is to be the most successful real estate firm in Nigeria and it's neighbouring countries",
    },
    {
      number: "02",
      quote:
        " Professional state of the art techniques specializing in the marketing, rentals and selling of new/resale luxury homes, undeveloped land and commercial and investment opportunities.",
    },
    {
      number: "03",
      quote:
        " To have a team of experienced professionals in key positions around the state that will handle realistic values for it's own investments affiliates as well as it's joint venture partners",
    },
    {
      number: "04",
      quote:
        "  Finally, to continually explore new ideas and technology. To make the selling and buying of real estate faster, less costly and easier",
    },
  ];
  return (
    <>
      <ScrollingDiv
        scrollCardBg="#003333"
        scrollOuterBg="#003333"
        scrollArrowBg="#ffffff47"
        scrollArrowCol="#F4F5F7"
        scrollCardGaps="0"
      >
        {cardData.map((item, i) => (
          <TextCarouselWrap key={generateID(15)}>
            <FlexibleDiv
              className="container"
              alignItems="stretch"
              flexWrap="no-wrap"
            >
              <div className="number">
                <FlexibleDiv>
                  <h1>{item.number}</h1>
                </FlexibleDiv>
                <h3>{item.year}</h3>
              </div>

              <FlexibleDiv
                className="content"
                flexDir="column"
                justifyContent="space-between"
              >
                <p>{item.quote}</p>
                <h3 className="author">{item.author}</h3>
              </FlexibleDiv>
            </FlexibleDiv>
          </TextCarouselWrap>
        ))}
      </ScrollingDiv>
    </>
  );
};

export default TextCarousel;
