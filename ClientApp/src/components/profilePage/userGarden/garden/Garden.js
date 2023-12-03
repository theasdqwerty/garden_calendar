import style from './garden.module.css';
import {useState, useEffect} from "react";
import {Modal} from "../../../modal/Modal";
import React from "react";
import trash from '../../../../image/trash.png'

export const Garden = ({plants, garden, saveHandler}) => {
    const [rows, setRows] = useState(garden.plants);
    const [isModal, setModal] = useState(false);
    const vegetables = plants;

    useEffect(() => {
        garden.plants = rows.filter(r => r.id !== undefined);
    }, [rows]);

    const addRow = () => {
        const newRow = {
            name: "Выбрать культуру",
            recommendation: "",
        };
        setRows((prevRows) => [...prevRows, newRow]);
    };

    const handleCultureChange = (vegetable) => {
        // console.log("vegetable", vegetable)
        const emptyRowIndex = rows.findIndex(
            (row) => row.name === "Выбрать культуру");
        if (emptyRowIndex !== -1) 
        {
            const selectedVegetable = plants.find((item) => item.name === vegetable.name);
            if (selectedVegetable) 
            {
                const updatedRow = { 
                    ...rows[emptyRowIndex],
                    id: vegetable.id,
                    name: vegetable.name,
                    recommendation: vegetable.recommendation
                };
                
                const updatedRows = [...rows];
                updatedRows[emptyRowIndex] = updatedRow;
                setRows(updatedRows);
                garden.plants = rows.filter(r => r.id !== undefined);
            }
        }
        setModal(false);
    };

    const handleModalOpen = () => {
        setModal(true);
    };

    const handleDeleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    return (
        <div className={style.main}>
            <div className={style.scrollTable}>
                <table className={style.table}>
                    <thead>
                    <tr>
                        <th className={style.cultureColumn}>Культура</th>
                        <th>Рекомендации</th>
                        <th width='105px'></th>
                    </tr>
                    </thead>
                </table>
                <div className={style.scrollTableBody}>
                    <table>
                    <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className={style.buttonCulture} onClick={handleModalOpen}>
                                {row.name}
                            </td>
                            <td>{row.recommendation}</td>
                            <td className={style.trash}>
                                <img
                                    className={style.delete}
                                    src={trash}
                                    alt={"иконка удаления"}
                                    onClick={() => handleDeleteRow(index)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            <div className={style.buttons}>
                <button className={style.buttonAdd} onClick={addRow}>
                    Добавить
                </button>
                <button className={style.buttonAdd} onClick={saveHandler}>
                    Сохранить
                </button>
            </div>

            <Modal
                isVisible={isModal}
                title={"Выберете овощ"}
                onClose={() => setModal(false)}
                content={
                    <div className={style.list}>
                        <ul className={style.buttonList}>
                            {vegetables.map((vegetable, index) => (
                                <li className={style.buttonVeg}
                                    key={vegetable.id}
                                    onClick={() => handleCultureChange(vegetable)}>
                                    {vegetable.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            />
        </div>
    );
};
