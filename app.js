import React from "react"
import  Section  from "./src/styling/styles"
import image from "./public/images/stars.jpg"
import self from "./public/images/selfImage.jpg"

export default class App extends React.Component{
    state ={
        start:[]
    }

    render(){

        return(

            <Section img={ image }>
                <p>The clay support.</p>
            </Section>
            
        )
    }
}