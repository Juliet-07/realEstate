import styled from "styled-components";
import HeaderBng from '../../assets/images/bng/green-angles-bng.jpg'
import {FlexibleDiv} from "../../components/Box/styles";

export const RecallAndPetitionWrap = styled('div')`
  background: #FFF;
  
  header {
    height: 60vh;
    background-color: #2F96B4;
    background: url(${HeaderBng}) center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    position: relative;
    
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgb(0,51,51);
        background: -moz-linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
        background: -webkit-linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
        background: linear-gradient(65deg, rgba(0, 51, 51, 0.88) 5%, rgba(16, 119, 119, 0.91) 33%, rgba(251, 251, 251, 0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#003333",endColorstr="#fbfbfb",GradientType=1);
    }
    
    section {
      width: 100%;
      z-index: 1000;
      
       h3 {
        color: ${({color, theme}) => color ? color : theme.palette.grey[200]};
        font-weight: 300;
        line-height: 1.2;
      }
      
      @media (min-width: 830px) and (max-width: 1210px) {
        width: 80%;
      }
      
      @media (min-width: 650px) and (max-width: 829px) {
        width: 90%;
        
        h3 {
          line-height: 1;
        }
      }
      
      @media (max-width: 649px) {
        width: 100%;
        
        h3 {
          line-height: 1;
        }
      }
      
      @media (max-width: 480px) {
        text-align: center;
        
        h3 {
          font-size: 2rem;
        }
      }
    }
    
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  
  .main {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  
  .state {
    padding: 1.5rem 0;
  }
  
  .state_chips {
    flex-wrap: wrap;
    margin-bottom: 1rem;
    
    a {
      border: 1px solid #00949473;
      border-radius: 4px;
      padding: 0.5rem 0.5rem;
      text-align: center;
      margin: 0 0.5rem;
      
      h3 {
        font-size: small;
        font-weight: 500;
      }
      
      @media screen and (max-width: 492px) {
        margin-bottom: 1rem;
      }
    }
    
    .isActive {
      background: #003333;
      h3 {
        color: #FFFFFF;
      }
    }
  }
  
  .display_pane {
    width: 100%;
    
    h5 {
      padding-left: 2rem;
      padding-top: 3rem;
    }
    
    .card_wrap {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      flex-wrap: wrap;
    }
    
    .card {
      width: 29%;
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
      background: #F9F9F9;
      border-radius: 0 0 5px 5px;
      transition: all ease-in-out .2s;
      
      .image_wrap {
        width: 100%;
        height: 280px;
        max-width: 100%;
        max-height: 280px;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .content_wrap {
        padding: 0.2rem 0 0.8rem;
        
        h6 {
          text-align: center;
        }
        
        .flexed {
          width: 100%;
          padding: 1rem;
          
          aside p {
            strong {
              font-weight: 400;
              color: #474747;
              font-size: small;
            }
          }
        }
      }
      
      :hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.28);
        transform: scale(0.97);
      }
    }
  }
  
  @media screen 
    and (min-width: 525px)
    and (max-width: 867px) {
      .main {
      .state h2 {
        font-size: 2.5rem;
      }
    }
    
    .display_pane {
      h5 {
        padding-left: 0;
      } 
      
      .card_wrap {
        flex-direction: row;
        
        .card {
          width: 43%;
        }
      }
    }
    } 
  
  @media screen and (max-width: 610px) {
    .main {
      .state h2 {
        font-size: 2.5rem;
      }
    }
    
    .display_pane {
      h5 {
        padding-left: 0;
      } 
      
      .card_wrap {
        flex-direction: column;
        
        .card {
          width: 100%;
        }
      }
    }
  }
`;

export const ModalContentWrap = styled(FlexibleDiv)`
  padding: 1rem;
  
  .top_content_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .image_wrap__modal {
    width: 150px;
    display: flex;
    height: 150px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  
  .top_content_name_wrap {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h6, p {
      text-align: center;
    }
  }
  
  .decree {
    text-align: center;
    
    span {
      font-size: 1rem;
    }
  }
  
  button {
    margin: 20px auto;
  }
`;