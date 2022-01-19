import { useEffect, useState } from "react"
import AboutUs from "./AboutUs"
import Blog from "./Blog"
import ContactUs from "./ContactUs"

import styled from "styled-components"

import "./homepage.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

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
            <BrowserRouter>
            <div className="headercontainer">
                <HeaderContainer>
                    <h1 style={{color: logocolor}}>WriteIt v1</h1>
                </HeaderContainer>

                
                <MenuContainer>
                    <Link to="/about-us">
                        <h4 style={{cursor: "pointer"}} >
                            About Us
                        </h4>
                    </Link>

                    <Link to="/contact-us">
                        <h4 style={{cursor: "pointer"}}  >
                            Contact Us
                        </h4>
                    </Link>

                    <Link
                        state={"dawdw"}
                        to={{pathname : "/blog", state: {xyz: "dawdw"}}}>
                        <h4 style={{cursor: "pointer"}} >
                        Blog
                        </h4>
                    </Link>
                </MenuContainer>
            </div>
            {/* Headers  */}


            {/* Body  */}
                
                    <Routes>
                        <Route path="/" element={<ContactUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </BrowserRouter>
            
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