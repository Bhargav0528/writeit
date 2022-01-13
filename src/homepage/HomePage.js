import { useState } from "react"
import AboutUs from "./AboutUs"
import Blog from "./Blog"
import ContactUs from "./ContactUs"

function HomePage() {

    const usrname = "XYZ"
    const age = 23

    const[whattorender, setWhattorender] =   useState("blog")
    
    return (
        <div>
            {/* Headers  */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                background: "#f5deb3"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px"
                }}>
                    <h1 style={{color: "#008b8b"}}>WriteIt</h1>
                </div>

                <div style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    width: "400px",
                    justifyContent: "space-evenly"
                }}>
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
                </div>
            </div>
            {/* Headers  */}


            {/* Body  */}
                {
                    whattorender == "blog" 
                    ? <Blog />
                    : whattorender == "aboutus"
                        ? <AboutUs userName={usrname} ageOfTheUser={age} />
                    : <ContactUs />
                }
            
            {/* Body  */}
        </div>
    )
}

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

*/