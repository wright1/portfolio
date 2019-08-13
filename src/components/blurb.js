import React from "react"
import styled from "styled-components"

const BlurbDiv = styled.div`
color: #140036;
font-family: 'Open Sans', sans-serif;
font-weight: 300;
font-size: 1.7em;
width: 70vw;
padding-left: 1em;
  p{
a{
    color: #7C89B3;
}
a:hover{
    color: #4972B5;
}
> .word1{
    font-family: 'Fredericka the Great', cursive;
    font-size: 1.8em;
}
> .word2{
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 1.2em;
}
> .word3{
    font-family: 'PT Sans Narrow', cursive;
    font-size: 1.6em;
}
}
@media(max-width: 380px){
    font-size: 1em;
    width: 90vw;
} 
`

export const Blurb = () => {
   return(
       <BlurbDiv>
           <p>
               Former bored sales assistant turned <span className="word1">web-developer</span>.
               </p>
               <p>Recent graduate of <span className="word2"><a href="https://www.foundersandcoders.com">Founders and Coders</a></span> bootcamp.</p>
              <p> I spend my spare time avoiding <span className="word3">cupcakes</span>, trying to get 
               into shape and learning <span className="word1">Java</span>.<br></br>
               presently looking for a junior developer role within a supportive and
               progressive environment.
           </p>
       </BlurbDiv>
   ) 
}