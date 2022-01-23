import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-tile: #363F5F;
        --text-body: #969CB3;
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size: 16px
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    // REM = 1rem = fontsize

    body {
        background-color: var(--background)
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

// * -webkit-font-smoothing this tag is to show better the font-styles
// * REM = 1rem = font-size
// * is better use % because of default of browser like 110% or 90% on configs of browser
// * is better import font-styles or font-family from public fonts (ex: google) by link