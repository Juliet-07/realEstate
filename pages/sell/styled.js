import styled from "styled-components";
import house5 from "../../assets/images/house5.jpg";
export const Banner = styled("div")`
  background: url(${house5}) center no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(0, 51, 51);
    background: -moz-linear-gradient(
      65deg,
      rgba(0, 51, 51, 0.88) 5%,
      rgba(16, 119, 119, 0.66) 33%,
      rgba(251, 251, 251, 0) 100%
    );
    /*background: -webkit-linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
    background: linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);*/
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#003333",endColorstr="#fbfbfb",GradientType=1);
  }
  section {
    width: 100%;
    z-index: 1000;

    .info {
      width: 60%;
      position:absolute;
      top:150px;
      left:70px
    }
    p {
      color: ${({ color, theme }) => (color ? color : theme.palette.grey[300])};
      padding-bottom: 2rem;
      font-size: 0.859rem;
      text-align: justify;
      font-weight: 100px;
    }
  }
`;
