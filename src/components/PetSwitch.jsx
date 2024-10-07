import { useState } from 'react';
import '@/scss/PetSwitch.scss';

const PetSwitch = ({ onPetSelected }) => {
    const [isDogSelected, setIsDogSelected] = useState(true);
    const [firstClick, setFirstClick] = useState(true);
    const handleSelectType = () => {
        setIsDogSelected(!isDogSelected)
        if (onPetSelected) {
            onPetSelected(!isDogSelected ? 'dog' : 'cat');
        }
    }
    return (
        <div className="pet-switch">
            <div
                className={`pet-option first-option ${isDogSelected ? 'active' : ''} ${!firstClick ? 'pet-option-left' : ''}`}
                onClick={() => handleSelectType()}
            >
                汪星人
            </div>
            <div
                className={`pet-option pet-option-right ${!isDogSelected ? 'active' : ''}`}
                onClick={() => {
                    handleSelectType(); if (firstClick) {
                        setFirstClick(false);
                    }
                }}
            >
                喵星人
            </div>
        </div>
    );
};

export default PetSwitch;