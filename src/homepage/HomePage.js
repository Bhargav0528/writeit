import { useEffect, useState } from "react"
import AboutUs from "./AboutUs"
import Blog from "./Blog"
import ContactUs from "./ContactUs"

import styled from "styled-components"

import "./homepage.css"

function HomePage() {

    const age = 23

    const[whattorender, setWhattorender] =   useState("blog")

    const[logocolor, setLogoColor] =   useState("#008b8b")

    const[usrname, setUserName] =   useState("XYZ")


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let tempusername = usrname;
    //         tempusername = tempusername  + "X";
    //         setUserName(tempusername)
    //         console.log(tempusername)
    //     }, 2000);

    //     return () => clearInterval(interval)
    // }, [usrname])

    
    return (
        <div>
            {/* Headers  */}
            <div className="headercontainer">
                <HeaderContainer>
                    <h1 style={{color: logocolor}}>WriteIt</h1>
                </HeaderContainer>

                <MenuContainer>
                    <h4 
                        style={{cursor: "pointer"}} 
                        onClick={() => {setWhattorender("aboutus")}}
                    >
                        About Us
                    </h4>
                    <h4 
                        style={{cursor: "pointer"}} 
                        onClick={() => {setWhattorender("contactus")}}
                    >
                        Contact Us
                    </h4><h4 
                        style={{cursor: "pointer"}} 
                        onClick={() => {setWhattorender("blog")}}
                    >
                       Blog
                    </h4>
                </MenuContainer>
            </div>
            {/* Headers  */}


            {/* Body  */}
                {
                    whattorender == "blog" 
                    ? <Blog />
                    : whattorender == "aboutus"
                        ? <AboutUs 
                            userName={usrname} 
                            ageOfTheUser={age} 
                            changeLogoColor={() => {
                                setLogoColor("#000")
                            }}
                        />
                    : <ContactUs />
                }
            
            {/* Body  */}
        </div>
    )
}


const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

const MenuContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    width: 400px;
    justify-content: space-evenly;

`;

export default HomePage



/*
display - block

flexbox



<h1 style={{}} abc={} xyz={javascript variable}>

justify-content - snake
justifyContent - camel 


Homepage - parent
 -- username    

    About Us - child




    How convert normal css styles -> react object css style using camel case
    Props
    Props Passing from parent to child
    Conditional Rendering

    UseEffect 
    UseState


    useEffect(function, dependency list)
     - []


    setInterval(function, 2000)

    setTimeout(function, 2000)


    Styles = > 
    1) Inline styles 
    2) External CSS class
    3) Styled components
*/