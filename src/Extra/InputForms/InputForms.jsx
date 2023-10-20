import React from "react"
import "./InputForms.css"

export default function InputForms() {
    // eslint-disable-next-line no-unused-vars
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName:"", 
            email:"", 
            comments:"",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    
  /*  function handleChange(event) {
        setFormData(prevDataForm =>{
            return{
                ...prevDataForm,
                [event.target.name]: event.target.value
            }
        })
        
    }
*/

    function handleChange(event) {
        const {name, value, type, checked} = event.target                            //This method is called destructuring
        setFormData(prevDataForm =>{
            return{
                ...prevDataForm,
                [name]: type === "checkbox" ? checked : value
            }
        })
        
    }
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
    }

    function validation(){
        <div className="col">
            <h1>Final Object</h1>
            <p>This is my final Object</p>
            {Object.keys(formData).map(Data => {
                return<div>{Data}</div>})}
    </div>
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                key={formData.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}                                //Now the value its been controlled by the state not the input
            />
            <input
                key={formData.lastName} 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
            key={formData.email}
            type="email"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            />
            <textarea
            key={formData.comments} 
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
            value={formData.comments}
            />
            <input
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button onclick={validation}>Submit</button>
            <br />
            <br />
        </form>
        
    )
}


/*
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
   Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
    As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
    The name property


4. What's different about a saving the data from a checkbox element
   vs. other form elements?
    A checkbox uses the "checked" property to determine what shold be saved in state. 
    Other form elements use the "value" property instead


5. How do you watch for a form submit? How can you trigger
   a form submit?
    onSubmit handler on the "form" element.
   */