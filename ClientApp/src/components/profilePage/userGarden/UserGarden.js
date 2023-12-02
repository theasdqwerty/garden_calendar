import React, {useEffect, useState, useRef} from 'react';
import style from './UserGarden.module.css';
import {Garden} from './garden/Garden';
import {Modal} from "../../modal/Modal";
import {Dropdown} from "reactstrap";
import Swal from "sweetalert2";

export const UserGarden = () => {
    const [lines, setLines] = useState([]);
    const [selectedGardenIndex, setSelectedGardenIndex] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [addresses, setAddresses] = useState([])
    
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
    }
    
    useEffect(() => {
        getAllAddresses()
    }, [])

    const getAllAddresses = async () => {
        const userId = localStorage.getItem('userId')
        let response = await fetch(`https://localhost:7135/api/RReestrObjects/`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        
        const json = await response.json()
        
        // Для отладки
        for (let i = 0; i < json.length; i++)
        {
            if (json[i].objectName === null)
                json[i].objectName = `Город №${i + 1}`
        }
        
        return setAddresses(json)
    }
    
    const addGarden = async (e) =>
    {
        e.preventDefault();
        const address = document.getElementById("selectId");
        const addressId = address.options[address.selectedIndex].value
        const addressResponse = await fetch(`https://localhost:7135/api/RReestrObjects/${addressId}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')

                }
            })

        const addressJson = await addressResponse.json()
        const gardenName = document.getElementById("inputId").value ?? ''
        const gardenModel = {
            ObjectId: addressJson.id,
            Name: gardenName,
        }
        
        if (gardenModel.Name === '')
        {
            setIsModal(false)
            Swal.fire({
                title: "Информация",
                text: "Не указанно название огорода",
                icon: "warning"
            })
            return
        }
        
        let gardenResponse = await fetch("https://localhost:7135/api/Gardens/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')

                },
                body: JSON.stringify(gardenModel)
            })
        
        var gardenJson = await gardenResponse.json()
        
        // console.log(gardenJson)

        const userGardenModel = {
            UserId: parseInt(localStorage.getItem('userId')),
            GardenId: gardenJson.id
        }
        
        console.log(userGardenModel)
        
        await fetch("https://localhost:7135/api/UserGardens/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')

                },
                body: JSON.stringify(userGardenModel)
            })
        
        setIsModal(false)
    }
    
    const addLine = async () => {
        setIsModal(true)
        
        // const gardenNumber = lines.length + 1;
        // setLines([...lines, <div onClick={() => handleGardenClick(lines.length)} key={lines.length}>
        //     New Garden{gardenNumber}
        // </div>]);
        
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
            <Modal
                isVisible={isModal}
                title={"Огород"}
                onClose={() => setIsModal(false)}
                content={
                    <div className={style.createGardenModalDialog}>
                        <input id='inputId' className={style.input} type="text" placeholder="Введите название сада"></input>
                        <select id='selectId' className={style.dropdown}>
                            {
                                addresses.map(
                                    (address, index) => 
                                        <option key={index} value={address.id}>{address.objectName}</option>)
                            }
                        </select>
                    </div>
                }
                footer={
                    <button onClick={addGarden} className={style.button}>Создать</button>
                }
            />
        </div>
    );
};
