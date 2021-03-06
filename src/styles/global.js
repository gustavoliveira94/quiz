import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        overflow-y: hidden;
        -webkit-font-smoothing: antialiased !important;
        background-color: #e7ecef;
    }
`;

export default GlobalStyle;
