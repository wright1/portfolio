import styled, { css} from "styled-components"

 const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100vh;
    background-image: url(${props=>props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    justify-content: center;
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 2.7em;
    @media(min-width: 668px){
        font-size: 1.2em;
    }
    
`

export default Section