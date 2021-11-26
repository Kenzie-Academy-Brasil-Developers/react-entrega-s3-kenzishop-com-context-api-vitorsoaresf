import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        background-color: var(--grey-0);
        font-family: 'Inter', sans-serif;
    }

    :root{
        --purple-50:#a29bfe;
        --purple-100:#6c5ce7;
        --white: #fff;
        --green: #27ae60;
        --grey-100: #333333;
        --grey-50: #999999;
        --grey-0: #F5F5F5;
    }
`;

export default GlobalStyle;
