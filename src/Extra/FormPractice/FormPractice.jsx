import React from "react"
import "./FormPractice.css"

export default function FormPractice() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    const [formData, SetFormData] = React.useState({
        email: "",
        password:"",
        confirmPassword: "",
        newsletter: true
    })



    function handleSubmit(event) {
        event.preventDefault()
       formData.password === formData.confirmPassword ? <div>Successfully signed up</div> : <div> passwords to not match</div>
       if(formData.joinedNewsletter) {
        console.log("Thanks for signing up for our newsletter!")
    }
    }


    function handleChange(event){
        const {type, name, value, checked} = event.target
        SetFormData (prevData =>{
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        checked={formData.newsletter}
                        name="newsletter"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    // 1. GET the data (fetch)
    // 2. Save the data to state
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

