import { useEffect } from "react";

function AboutUs(props) {

    useEffect(() => {
        console.log("Changes", props.userName)
    }, [props.userName])

    return (
    <div>
        <h1>
            About Us
        </h1>
        <h2>Welcome {props.userName} of age :: {props.ageOfTheUser}</h2>

        <button onClick={() => {props.changeLogoColor()}}>
            Change Logo Color
        </button>
    </div>)
}

export default AboutUs;

/*

props is an object (key~value)
*/
