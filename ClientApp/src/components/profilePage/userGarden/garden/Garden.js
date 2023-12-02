import style from './garden.module.css';
import {useState} from "react";
import {Modal} from "../../../modal/Modal";
import React from "react";
import {data} from "../../data";
import trash from '../../../../image/trash.png'

export const Garden = () => {
    const [rows, setRows] = useState([]);
    const [isModal, setModal] = useState(false);
    const vegetables = data.map((item) => item.name);

    //============================================================
    const example = {
        minT: 12,
        maxT: 33,
        vlajnost: 99,
    };
    //============================================================

    const addRow = () => {
        const newRow = {
            culture: "Выбрать культуру",
            minTemperature: "",
            maxTemperature: "",
            soilMoisture: "",
        };
        setRows((prevRows) => [...prevRows, newRow]);
    };

    const handleCultureChange = (vegetable) => {
        const emptyRowIndex = rows.findIndex(
            (row) => row.culture === "Выбрать культуру"
        );
        if (emptyRowIndex !== -1) {
            const selectedVegetable = data.find((item) => item.name === vegetable);
            if (selectedVegetable) {
                const updatedRow = {
                    ...rows[emptyRowIndex],
                    culture: vegetable,
                    minTemperature: selectedVegetable.minTemperaturaForPlanting,
                    maxTemperature: selectedVegetable.maxTemperaturaForPlanting,
                    soilMoisture: example.vlajnost,
                };
                const updatedRows = [...rows];
                updatedRows[emptyRowIndex] = updatedRow;
                setRows(updatedRows);
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
                <table>
                    <thead>
                    <tr>
                        <th>Культура</th>
                        <th>Минимальная температура</th>
                        <th>Максимальная температура</th>
                        <th>Влажность почвы</th>
                        <th></th>
                    </tr>
                    </thead>
                </table>
                <div className={style.scrollTableBody}>
                    <table>
                    <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className={style.buttonCulture} onClick={handleModalOpen}>
                                {row.culture}
                            </td>
                            <td>{row.minTemperature}</td>
                            <td>{row.maxTemperature}</td>
                            <td>{row.soilMoisture}</td>
                            <td>
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
                <button className={style.buttonAdd}>
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
                                <li
                                    className={style.buttonVeg}
                                    key={index}
                                    onClick={() => handleCultureChange(vegetable)}
                                >
                                    {vegetable}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            />
        </div>
    );
};
