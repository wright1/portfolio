import React from "react"
import  {Section, GlobalStyle}  from "./src/components/styling/styles"
import image from "./public/images/stars.jpg"
import self from "./public/images/selfImage.jpg"
import {Title} from "./src/components/title"

export default class App extends React.Component{
    state ={
        start:[]
    }

    render(){
        const width = window.innerWidth < 380;

        return(
            <>
            <GlobalStyle />
            <Section img={ image } attachment={"fixed"}>
                <Title />
            </Section>
            {width ? 
            <Section img={ self }>
            </Section>:
            <Section>
                <p>cats</p>
            </Section> 
        }
            </>
            
        )
    }
}