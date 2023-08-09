import { createGlobalStyle } from "styled-components";

export const GloabalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Noto+Sans:wght@100;400;500;600;700&display=swap');

:root{
--pink-primary: #D14B8F;
--pink-secondary: #B6116E;
--orange-primary: #F79552;
--green-primary: #7EBC43;
--green-secundary: #4FBFA5;
--black-primary: #1D1D1B;
--gray-primary: #888888;
--gray-secondary: #F5F5F5;
--white-primary: #fff; 
--font-lato: font-family: 'Lato', sans-serif;
--font-noto: font-family: 'Noto Sans', sans-serif;
}


*{
padding: 0;
margin: 0;
font-family: 'Lato', sans-serif;
box-sizing: border-box;
}

button, a {
    cursor: pointer;
}

`;
