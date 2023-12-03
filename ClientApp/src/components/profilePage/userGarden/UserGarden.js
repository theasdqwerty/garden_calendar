import React, {useEffect, useState} from 'react';
import style from './UserGarden.module.css';
import {Garden} from './garden/Garden';
import {Modal} from "../../modal/Modal";
import trash from "../../../image/trash.png";

export const UserGarden = () => {
    const [lines, setLines] = useState([]);
    const [selectedGardenIndex, setSelectedGardenIndex] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [regions, setRegions] = useState([])
    const [gardens, setGardens] = useState([])
    const [newGardenId, setNewGaedenId] = useState(-1)
    const [plants,setPlants] = useState([])
    
    useEffect(() => {
        getRegions()
        getUpdateModel()
        getPlants()
    }, [])
    
    const getPlants = async () =>
    {
        let response = await fetch(`https://localhost:7135/api/Plants`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
        const json = await response.json();
        setPlants(json.map(o => ({id: o.id, name: o.name, recommendation: ""})))
    }
    const getNewGardenId = () =>
    {
        setNewGaedenId(newGardenId - 1)
        return newGardenId;
    }
    
    const handleDeleteGarden = (e) =>
    {
        e.preventDefault()
        const gardenId = e.currentTarget.dataset.id;
        setGardens(gardens.filter(g => g.id != gardenId));
    }
    
    const saveHandler = async (e) =>
    {
        e.preventDefault()
        const updateModel = {
            userId: localStorage.getItem('userId'),
            gardens: gardens.map(g => 
            {
                if (g.id < 0)
                    g.id = null;
                
                return g;
            })
        }
        let response = await fetch(`https://localhost:7135/api/Gardens/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                },
                body: JSON.stringify(updateModel)
            })
        
        var json = await response.json();
        console.log("json responce", json)
        setGardens(json.gardens)
    }
    
    // Получить данные
    const getUpdateModel = async () => 
    {
        const userId = localStorage.getItem('userId')
        let response = await fetch(`https://localhost:7135/api/Gardens/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const json = await response.json();
        console.log(json)
        
        setGardens(json.gardens)
    }

    // Получить все регионы
    const getRegions = async () => {
        let response = await fetch(`https://localhost:7135/api/RReestrObjects/`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const json = await response.json();
        return setRegions(json)
    }
    
    // Добавить модель огорода в state (OnClick на модельном окне)
    const addGardenModel = async (e) =>
    {
        e.preventDefault();
        
        const select = document.getElementById('selectId')
        const regionId = select.options[select.selectedIndex].value
        const region = regions.find(r => r.id == regionId)
        const gardenName = document.getElementById('inputId').value ?? ''
        
        const garden = {
            id: getNewGardenId(),
            userGardenId: null,
            name: gardenName,
            plants: [],
            region: region,
        }
        gardens.push(garden)
        setIsModal(false)
    }
    
    // Добавить огород вызов модельного окна
    const addGardenOnClick = async () => {
        setIsModal(true)
        
        let id = 0;
        setLines([...lines, 
            <div onClick={() => handleGardenClick(lines.length)} key={id++}>{gardens.name}</div>]);
    };

    const handleGardenClick = (index) => {
        setSelectedGardenIndex(index);
    };

    return (
        <div className={style.q}>
            <section className={style.sectionUseGarden}>
                <div>
                    <button className={style.buttonAdd} onClick={addGardenOnClick}>Добавить новый сад</button>
                </div>
                {gardens.map((garden, index) => (
                    <div key={index}>
                        <button
                            className={index === selectedGardenIndex ? style.selectedButton : style.button}
                            onClick={() => {
                                handleGardenClick(index)
                            }}>
                            {garden.name}
                        </button>
                        <button className={style.deleteButton} onClick={handleDeleteGarden} data-id={garden.id}>
                            <img
                                className={style.delete}
                                src={trash}
                                alt={"иконка удаления"}
                            />
                        </button>
                        {selectedGardenIndex === index && <Garden saveHandler={saveHandler} plants={plants} garden={garden}/>}
                    </div>
                ))}
            </section>
            <Modal
                isVisible={isModal}
                title={"Огород"}
                onClose={() => setIsModal(false)}
                content={
                    <div className={style.createGardenModalDialog}>
                        <input id='inputId' className={style.input} type="text" placeholder="Введите название сада"></input>
                        <select id='selectId' className={style.dropdown}>
                            {
                                regions.map(
                                    (region, index) => 
                                        <option key={index} value={region.id}>{region.name}</option>)
                            }
                        </select>
                    </div>
                }
                footer={
                    <button onClick={addGardenModel} className={style.button}>Создать</button>
                }
            />
        </div>
    );
};
