import './index.scss';

const AnimalItem = ({ animal, selectedAnimal, handleAnimalSelect }) => {
    const handleClick = () => {
        if (handleAnimalSelect) {
            handleAnimalSelect(animal);
        }
    };

    return (
        <div
            className="animal-select-content-item"
            key={animal.animalId}
            onClick={handleClick}
            style={selectedAnimal && selectedAnimal.animalId === animal.animalId? { border: '1px solid #FCCB30' } : {}}
        >
            <img src={animal.animalImg} alt="" />
            <div className="animal-select-content-item-info">
                <div className="animal-select-content-item-info-name">{animal.animalName}</div>
                <div className="animal-select-content-item-info-type">{animal.animalType.breed}</div>
            </div>
        </div>
    );
};

export default AnimalItem;