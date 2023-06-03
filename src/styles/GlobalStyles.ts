import { createGlobalStyle } from "styled-components";
import image from "../assets/fundo-colorido-desfocado-vivido.jpg";

export default createGlobalStyle`

    :root {
        --color-color-primary: #A4B7FC;
        --color-color-secondary: #806EBF;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #F1F0F1;
        --color-negative: #e60000;
        font-size: 60%;   

      
    }
  
    @media (min-width: 700px) {
      :root {
        font-size: 62.5%; // root font-size: 10px;
      }
    }
    
    * {
      margin:0;
      padding: 0;
      outline:0;
      box-sizing: border-box; 
      
    }
  
    body,html{
      width: 100vw;
      height: 100vh;
    }
  
    body {
      background-image: url(${image});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      overflow-x: hidden;
    }
  
    body, input, button, textarea {
      font-family: 'Gabriela', serif;

      font-size: 1.6rem;
    }
  
    h1, h2, h3, h4, h5, h6, strong{
      font-weight: 500;
    }
  
    button {
      cursor: pointer;
    }
  `;
