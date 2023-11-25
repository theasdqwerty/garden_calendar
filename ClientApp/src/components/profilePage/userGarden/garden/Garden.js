import React, {useState} from 'react';
import style from './garden.module.css';

export const Garden = ({props}) => {
    const [rows, setRows] = useState([]);

    const handleClick = () => {
        const newRow = (
            <div>
                <tr className={style.tr}>

                    <td className={`${style.row} ${style.rowBody}`}>
                        <select className={style.list}>
                            <option defaultValue>Выбери овощ</option>
                            <option>Огурчик</option>
                            <option>Помидорка</option>
                            <option>Тыковка</option>
                            <option>Петрушечка</option>
                        </select>
                    </td>
                    <td className={`${style.row} ${style.rowBody}`}>2</td>
                    <td className={`${style.row} ${style.rowBody}`}>3</td>
                    <td className={`${style.row} ${style.rowBody}`}>4</td>
                </tr>
            </div>

        );
        setRows(prevRows => [...prevRows, newRow]);
    };

    return (
        <div>

            <div className={style.block}>
                <div>
                    <h1>Таблица культур № {props}</h1>
                    <div className={style.tableBlock}>
                        <button className={style.button} onClick={handleClick}>+</button>
                        <table className={style.table}>

                            <thead className={style.tableHeadMenu}>
                            <tr className={style.tr}>
                                <td className={style.row}>
                                    Культура
                                </td>
                                <td className={style.row}>
                                    Минимальная температура
                                </td>
                                <td className={`${style.row} ${style.row}`}>
                                    Максимальная температура
                                </td>
                                <td className={style.row}>
                                    Влажность почвы
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            {rows.map((row, index) => (
                                <React.Fragment key={index}>{row}</React.Fragment>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>

    );
};