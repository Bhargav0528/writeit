import { useEffect, useState } from "react"

const name = "XYZ"

const car = {
    engine: "V8",
    breaks: "2",
    seats: "5"
}

const features = [
    "It has offline mode",
    "cateorize",
    "Voice to text mode",
    "Collaborator"
]

let hi = []



function NoteHomePage() {

    // State variables - hold a value
    // value changes, the whole component rerenders
    // posts will be in the state variable posts = [1,2,3,4]
    // post id = 5
    // posts = [1,2,3,4,5]
    
    const [featuresArr, setFeatures] = useState([])
    
    useEffect(() => {
        effect()
    },[])


    const effect = () => {
        hi =  features.map(element => {
            return <li>{element}</li>
        }) 
        
        setFeatures(hi)
    }

     
    return (
        <div>
            <h1>
                Hi {name}
            </h1>
            <h1>
                A NOTE TAKING APPLICATION
            </h1>
            <p>
                I have a car with engine {car.engine} and no. of seats are {car.seats}
            </p>

            <ul>
                {featuresArr}
            </ul>

        </div>
    )
}
//JSX
export default NoteHomePage;



/*

featuresArr = []

useEffect() before the component renders , 
temp = [<p>feature1</p>, <p>feature2</p>]

setFeatures(temp) -> [] -> [4 elements] ,
React will notice that change

and it will render the whole component again 

<ul>{featuresArr}</ul>


useEffect - is lifecycle management function - before the page renders, [], when any variable in the useEffect function changes.
useState


() => {}
*/