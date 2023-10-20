import "./MakingApiCalls.css"
import React from "react"

export default function MakingApiCalls() {
    const [starWarsData, setStarWarsData] = React.useState({})
    //EVERYTIME WE SET USING USESTATE WE RE-RENDER THE COMPONENT 
    const [count, setCount] = React.useState(1)
    
    // 1. GET the data (fetch)
    // 2. Save the data to state
    //THIS FETCH  REQUEST IS A SIDE EFECT BECAUSE IS REACHING OUTSIDE OF REACT ECOSYSTEM BUT ALSO TRYING TO SET SOME STATE IN THE PROCESS

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
    
        React.useEffect(() => {
            fetch(`https://swapi.dev/api/people/${count}`)
                 .then(res => res.json())
                 .then(data => setStarWarsData(data))
        }, [count])         
        //}, [])      
        /*THERE HAS TO BE A SECOND PARAMETER, THIS PARAMETER MAKES THE STATE TO RENDER EVERYTIME THE DEPENDENCY changes,
        IN THIS CASE [count] actually updates everytime so it will run for every new value, if  you just want to render just once
        you can use just [], EVERYTIME WE PRESS THE BUTTON AND THE COUNT GOES UP, THE API ITS BEEBN CALLED, 
        TO AVOID THAT JUS [] AND IT WILL RENDER ONCE*/
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
        </div>
    )
}


/*
1. What is a "side effect" in React? What are some examples?
Any code you want to run that react is not in charge to render, such as local store, suckets, APIS, TWO STATES TO KEEP IN SIC


2. What is NOT a "side effect" in React? Examples?
Anything that react is in charge of, such maining states, the UI in sync with the data, render DOM elements.


3. When does React run your useEffect function? When does it NOT run
   the effect function?
   -As soon as the component loads(first render)
   -On every re-render of the component (assuming no dependecies array)
   -will NOT run the effect when the dependencies in the array stay the same between renders


4. How would you explain what the "dependecies array" is?
    -Second parameter to the useEffect function
    -A way for React to know wheter it shold re-run the effect situation
*/