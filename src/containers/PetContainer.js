import { useEffect, useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
    
    const [pets, setPets] = useState([]);   
    
    useEffect(() => {                   // ADDED
        const fetchPets = async () => {
            const response = await fetch("http://localhost:8080/pets");
            const data = await response.json();
            setPets(data);
        }
        fetchPets();
    }, [])

    return (
        <>
            <h1>Generate A Pet</h1>
            <PetForm />
            <PetList pets = {pets} />
        </>
    );
 }

 export default PetContainer;