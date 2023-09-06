import { useEffect, useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
    
    const [pets, setPets] = useState([]);  
    
    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const data = await response.json();
        setPets(data);
    }
    
    useEffect(() => {                   
        fetchPets();
    }, [])

    const postPet = async (newPet) => {  
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPet)
        })
        const savedPet= await response.json();
        setPets([...pets, savedPet])
    }

    const deletePet = async (id) => {
        // the deletes from database
        await fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        // the below deletes locally
        const keptPets = pets.filter((pet) => pet.id !== parseInt(id));
        setPets(keptPets);
    }
    

    return (
        <>
            <h1>Generate A Pet</h1>
            <PetForm pets = {pets} postPet={postPet}/>
            <PetList pets = {pets} deletePet={deletePet}/>
        </>
    );
 }

 export default PetContainer;