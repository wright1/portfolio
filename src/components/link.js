import React from "react"
import styled from "styled-components"


const LinkDiv = styled.div`
margin-top: 5vh;
text-align: center;
`

export const Chevron = ({place, image}) => {
    return(
        <LinkDiv>
        <a href={place}><img src={image}></img></a>
        </LinkDiv>
    )
}




