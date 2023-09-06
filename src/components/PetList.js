import Pet from "./Pet";

const PetList = ({ pets, deletePet }) => {
    
    const petComponents = pets.map(pet => {   // ADDED
        return <Pet 
                key={pet.id} 
                pet={pet} 
                deletePet={deletePet}
                />
    })

    return (
        <>
            <h3>List of Pets</h3>
            <hr />
            {petComponents}
        </>
    );
}

export default PetList;