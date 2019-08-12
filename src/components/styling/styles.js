import styled, { css, createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        color: white;
    font-family: 'Shadows Into Light', cursive;
    -webkit-animation-name: fadeout;
	-webkit-animation-duration: 3s;
	-webkit-animation-timing-function: ease-in;

    }
    html{
        height: 100vh;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100vh;
    background-color: #B3B8B4;
    background-image: url(${props=>props.img || 'none'});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${props=>props.attachment || 'none'};
    background-position: cover;
    overflow: hidden;
    justify-content: center;
    font-family: 'Shadows Into Light Two', cursive;
    @media(min-width: 668px){
        font-size: 1.2em;
    }
    
`

