const Pet = ({ pet, deletePet }) => {

    const handleDeletePet = () => {  
        deletePet(pet.id);
    }

    return (
        <>
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button onClick={handleDeletePet}> delete </button>
            <button> show </button>
            <hr />
        </>
    );
}

export default Pet;