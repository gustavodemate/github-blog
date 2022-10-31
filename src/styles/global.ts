import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors['base-background']};
        color: ${props => props.theme.colors['base-title']};
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button, a {
        font-family: 'Nunito', sans-serif;
        
    }

`;