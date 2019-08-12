import React from "react"
import styled from "styled-components"

const BlurbDiv = styled.div`
color: #02075D;
`

export const Blurb = () => {
   return(
       <BlurbDiv>
           <p>
               Former bored sales assistant turned <span id="word1">web-developer</span>.
               Recent graduate of <span><a href="https://www.foundersandcoders.com">Founders and Coders</a></span> bootcamp.<br></br>
               I spend my spare time avoiding <span>cupcakes</span>, trying to get 
               into shape and learning <span>Java</span>.<br></br>
               presently looking for a junior developer role within a supportive and
               progressive environment.
           </p>
       </BlurbDiv>
   ) 
}