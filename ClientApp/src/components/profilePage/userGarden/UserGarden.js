import React, {useEffect, useState} from 'react';
import style from './UserGarden.module.css';
import {Garden} from './garden/Garden';

export const UserGarden = () => {
    const [lines, setLines] = useState([]);
    const [selectedGardenIndex, setSelectedGardenIndex] = useState(null);
    
    const getAllGardens = async () => 
    {
        const userId = localStorage.getItem('userId')
        let response = await fetch(`https://localhost:7135/api/Gardens/GetAllByUserId/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        
        const json = await response.json()
        console.log(json)
    }
    
    const addGarden = async (gardenName) =>
    {
        const gardenModel = {
            Name: gardenName
        }
        
        console.log('accessToken', localStorage.getItem('accessToken'))

        let response = await fetch("https://localhost:7135/api/Gardens/Add",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                    
                },
                body: JSON.stringify(gardenModel)
            })

        const json = await response.json()
        console.log(json)
    }
    
    getAllGardens()

    const addLine = async () => {
        const gardenNumber = lines.length + 1;
        setLines([...lines, <div onClick={() => handleGardenClick(lines.length)} key={lines.length}>
            New Garden{gardenNumber}
        </div>]);
        
        // await addGarden(`Огород ${gardenNumber}`)
    };

    const handleGardenClick = (index) => {
        setSelectedGardenIndex(index);
    };

    return (
        <div className={style.q}>
            <section className={style.sectionUseGarden}>
                <div>
                    <button className={style.buttonAdd} onClick={addLine}>Добавить новый сад</button>
                </div>
                {lines.map((line, index) => (
                    <div key={index}>
                        <button
                            className={index === selectedGardenIndex ? style.selectedButton : style.button}
                            onClick={() => {
                                handleGardenClick(index)
                            }}>
                            Сад № {index + 1}
                        </button>
                        {selectedGardenIndex === index && <Garden props={index + 1}/>}
                    </div>
                ))}
            </section>
        </div>
    );
};
