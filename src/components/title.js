import React from "react"
import styled from "styled-components"

const TitleP = styled.div`
color: white;
font-size: 1.6em;
line-height: 1.2em;
> .line1, .line4{
    font-family:'PT Sans Narrow', sans-serif;
    font-size: 1.8em;
}
> .line2{
    font-family: 'Fredericka the Great', cursive;
    font-size: 1.3em;
    
}
` 

export const Title = () =>{
    return(

  <TitleP>
    <span className="line1">NOT</span><br></br>
    <span className="line2">your average</span><br></br>
    <span className="line3">junior<br></br>full-stack</span><br></br>
    <span className="line4">DEVELOPER</span>
  </TitleP>

    )
}
export default Title
