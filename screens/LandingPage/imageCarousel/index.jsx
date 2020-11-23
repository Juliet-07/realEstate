import React from "react";
import { SlideWrap } from "./styled";
import ScrollingDiv from "../../../components/Carousel";
import house1 from "../../../assets/images/house1.jpg";
import house2 from "../../../assets/images/house2.jpg";
import house3 from "../../../assets/images/house3.jpg";
import house4 from "../../../assets/images/house4.jpg";
import house5 from "../../../assets/images/house5.jpg";
import house6 from "../../../assets/images/house6.jpg";


const Slide = () => {
    const images = [
        {
            img:<img src={house1} alt="" />
        },
        {
            img:<img src={house2} alt="" />
        },
        {
            img:<img src={house3} alt="" />
        },
        {
            img:<img src={house4} alt="" />
        },
        {
            img:<img src={house5} alt="" />
        },
        {
            img:<img src={house6} alt="" />
        },
    ]
  return (
    <div>
      <ScrollingDiv autoScroll={true} scrollOuterBg='#003333' scrollCardHeight='250px'
      scrollArrowBg="#ffffff47"> 
        {images.map(({img})=>(
          <SlideWrap>
            {img}
          </SlideWrap>
        ))}
      </ScrollingDiv>
    </div>
  );
};
export default Slide;
