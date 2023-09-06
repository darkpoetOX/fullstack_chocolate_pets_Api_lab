import Pet from "./Pet";

const PetList = ({ pets }) => {
    
    const petComponents = pets.map(pet => {   // ADDED
        return <Pet 
                key={pet.id} 
                pet={pet} />
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