import { createGlobalStyle } from "styled-components";
import JalnanOTF from "../Fonts/JalnanOTF.woff";

const GlobalStyle = createGlobalStyle`
    @font-face { 
        font-family: 'yg-jalnan';
        src: url(${JalnanOTF});
    }
    body {
        font-family: 'yg-jalnan';
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
