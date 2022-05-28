import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: linear-gradient(to bottom right, #ffdeff, #e6f0ff);
        color: ${(props) => props.theme.colors.fonts};
        font-family: 'Catamaran', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, a, button {
        font-family: 'Catamaran', sans-serif;
    }

  
`

export default GlobalStyles
