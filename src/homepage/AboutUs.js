function AboutUs(props) {
    return (
        <div>
    <h1>
        About Us
    </h1>
    <h2>Welcome {props.userName} of age :: {props.ageOfTheUser}</h2>
    </div>)
}

export default AboutUs;

/*

props is an object (key~value)
*/
