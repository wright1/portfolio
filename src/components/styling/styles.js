import styled from "styled-components"

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
    font-size: 4.5em;
    
`

export default Section