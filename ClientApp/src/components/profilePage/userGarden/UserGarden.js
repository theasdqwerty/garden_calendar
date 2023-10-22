import React, { useState } from 'react';
import style from './UserGarden.module.css';
import { Garden } from './garden/Garden';
import Weather from "../weather/Weather";

export const UserGarden = () => {
    const [lines, setLines] = useState([]);
    const [selectedGardenIndex, setSelectedGardenIndex] = useState(null);

    const addLine = () => {
        const gardenNumber = lines.length + 1;
        setLines([...lines, <div onClick={() => handleGardenClick(lines.length)} key={lines.length}>
            New Garden{gardenNumber}
        </div>]);
    };

    const handleGardenClick = (index) => {
        setSelectedGardenIndex(index);
    };

    return (
        <div>
            <section className={style.sectionUseGarden}>
                <div>
                    <button className={style.buttonAdd} onClick={addLine}>Add Garden</button>
                </div>
                {lines.map((line, index) => (
                    <div key={index}>
                        <button
                            className={index === selectedGardenIndex ? style.selectedButton : style.button}
                            onClick={() => handleGardenClick(index)}
                        >
                            New Garden{index + 1}
                        </button>
                        {selectedGardenIndex === index && <Garden />}
                    </div>
                ))}
            </section>
        </div>
    );
};