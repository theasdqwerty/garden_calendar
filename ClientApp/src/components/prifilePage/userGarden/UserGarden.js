import React, { useState } from 'react';
import style from './UserGarden.module.css';
import { Garden } from './garden/Garden';
import Weather from "../weather/Weather";

const vegetableOptions = ['Капуста', 'Картоха', 'Свекла', 'Огурчик'];

export const UserGarden = () => {

    const [vegetables, setVegetables] = useState([
        { name: 'Капуста', temperature: '-', water: '-', fertilizers: '-', information: '-' }

    ]);
    const addRow = () => {
        setVegetables([
            ...vegetables,
            { name: '', temperature: '-', water: '-', fertilizers: '-', information: '-' },
        ]);
    };
    const handleChange = (index, field, value) => {
        const updatedVegetables = [...vegetables];
        updatedVegetables[index][field] = value;
        setVegetables(updatedVegetables);
    };
    return (
        <div>
            <div className={style.weatherContainer}>
                <h1>Мой огород</h1>
                <div>
                    Температура сегодня
                    <div>
                        <Weather/>
                    </div>
                </div>
            </div>

            <div>
                <div className={style.headerContainer}>
                    <h2>Добавить грядку</h2>
                    <button className={style.headerButton} onClick={addRow}>Добавить</button>
                </div>
                <Garden vegetables={vegetables} handleChange={handleChange} vegetableOptions={vegetableOptions} />
            </div>
        </div>
    );
};
export default UserGarden;