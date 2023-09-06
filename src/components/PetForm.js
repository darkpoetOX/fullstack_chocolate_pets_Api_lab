import { useState } from "react";

const PetForm = () => {

    const [statePet, setStatePet] = useState(   
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    )

    const handleChange = (event) => {       
        let propertyName = event.target.name; // 'name' is the name of the target that triggered the event: 'name'/'type'
        let copiedPet = {...statePet};
        copiedPet[propertyName] = event.target.value;
        setStatePet(copiedPet)
    }

    const handleFormSubmit = (event) => {  
        event.preventDefault()
        postPet(statePet)
        setStatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h3>Add a new pet</h3>
            
            <input 
                type="text"
                placeholder="pet name"
                onChange={handleChange}    
                name="name"               
                value={statePet.name} 
            /> 
                
            <input
                type="text"
                placeholder="pet type" 
                onChange={handleChange}    
                name="type"               
                value={statePet.type} 
            />
                
            <input
                type="text"
                placeholder="pet breed"
                onChange={handleChange}    
                name="breed"               
                value={statePet.breed}  
            />

            <input
                type="number"
                placeholder="pet age" 
                onChange={handleChange}    
                name="age"               
                value={statePet.age} 
            />
        
            
            <button type="submit">OK</button>      
        </form>

    );

}

export default PetForm;