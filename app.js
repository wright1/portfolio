import React from "react"
import  {Section, GlobalStyle}  from "./src/components/styling/styles"
import image from "./public/images/stars.jpg"
import self from "./public/images/selfImage.jpg"
import {Title} from "./src/components/title"
import {Blurb} from "./src/components/blurb"
import {Name} from "./src/components/name"
import {ImagePanel} from "./src/components/styling/styles"

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
                <ImagePanel  className="panel"/>
            </Section> 
        }
            </>
            
        )
    }
}

// down chevron <div>Icons made by <a href="https://www.flaticon.com/authors/amit-jakhu" title="Amit Jakhu">Amit Jakhu</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>