import React from "react"
import  {Section, GlobalStyle}  from "./src/components/styling/styles"
import image from "./public/images/stars.jpg"
import self from "./public/images/selfImage.jpg"
import {Title} from "./src/components/title"
import {Blurb} from "./src/components/blurb"
import {Name} from "./src/components/name"

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
               <Name />
               <Blurb />
            </Section>:
            <Section>
                <Name />
                <Blurb />
            </Section> 
        }
            </>
            
        )
    }
}