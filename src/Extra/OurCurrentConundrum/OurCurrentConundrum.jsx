/*
1. How would you describe the concept of "state"?
A way to Raect to remember saved values from within a component.
This is similar to declaring variables from within a component, with a few added bonuses.


2. When would you want to use props instead of state?
Anytime you pass data into a component so that component can determine what will get displayed on the screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from within the component.
(And "remember" those values even when React re-renders the component)


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. States are mutable.
*/


import "./OurCurrentConundrum.css";
import React from "react";

export default function OurCurrentConundrum() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */

    function addItem(){
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    //-----------------------------------------------------THIS IS ANOTHER EXERCISE-----------------------------------------------------

    /*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay = "";
    (hours >= 4 && hours < 12) ?  timeOfDay = "morning" :
    (hours >= 12 && hours < 17)  ?  (timeOfDay = "afternoon") :
    (hours >= 17 && hours < 20)  ?  (timeOfDay = "evening") : timeOfDay="night";
    return `Good ${timeOfDay}, ${name}!`
}
let newGreeting = greeting("Bob");



    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
            {newGreeting}
        </div>
    )
}