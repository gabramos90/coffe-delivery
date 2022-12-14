import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, textarea, input, button {
        font-family: 'Roboto', sans-serif; 
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h5 {
        font-family: 'Baloo 2', cursive;
    }

    h2, h3, h4, span, p {
        font-family: 'Roboto', sans-serif;
    }
`
