import React from "react"
import  Section  from "./src/components/styling/styles"
import image from "./public/images/stars.jpg"
import self from "./public/images/selfImage.jpg"
import Title from "./src/components/title"

export default class App extends React.Component{
    state ={
        start:[]
    }

    render(){

        return(

            <Section img={ image }>
                <Title />
            </Section>
            
        )
    }
}