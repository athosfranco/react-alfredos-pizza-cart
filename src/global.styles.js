import { createGlobalStyle } from "styled-components";

/*
font-family: 'Italianno', cursive;
font-family: 'Lato', sans-serif;
*/

export const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Lato', sans-serif;
 }

 html, body {
    max-width: 100%;
    overflow-x: hidden;

    a:hover, a:visited, a:link, a:active
{
    text-decoration: none;
}
}






`;
