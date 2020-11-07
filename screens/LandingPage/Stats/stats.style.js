import styled from 'styled-components';

export const NumberStatBox = styled('div')`
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background-color: #002626;
  
  .InnerContainer {
     width:${({ContainerWidth}) => ContainerWidth ? ContainerWidth : "70%"};
     display:flex;
     justify-content:space-around;
     align-items:center;
     flex-wrap:wrap;
     padding:56px 0;
  
    .StatBox {
      width:20%;
      margin:20px 0;
      display:flex;
      justify-content:space-around;
      align-items:center;
      flex-direction:column;
      min-width:180px;
        
      .NumberSection {
        font-size: 66px;
        color: #eeeeee;
        font-family: 'Rubik', sans-serif;
      }
        
      .LabelSection {
        font-size: 16px;
        color: #8C8C8C;
        padding-top: 15px;
        text-transform: uppercase;
        font-family: 'Rubik', sans-serif; 
      }
    }
  }
`;