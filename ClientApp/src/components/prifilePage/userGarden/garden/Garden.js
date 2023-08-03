import React from 'react';
import style from './garden.module.css';

export const Garden = ({vegetables, handleChange, vegetableOptions}) => {
        return (
            <div>
                <table className={style.border}>
                    <thead>
                    <tr className={style.border}>
                        <th className={style.border}>&nbsp;</th>
                        <th className={`${style.border} ${style.temp}`}>T &#8451;</th>
                        <th className={style.border}>Нужно полить</th>
                        <th className={style.border}>Нужны удобрения</th>
                        <th className={style.border}>Еще какая-то информация</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vegetables.map((vegetable, index) => (
                        <tr key={index} className={style.border}>
                            <td className={style.border}>
                                <select className={style.select}
                                    value={vegetable.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                >
                                    <option value="">Выберите овощ</option>
                                    {vegetableOptions.map((option, i) => (
                                        <option key={i} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className={style.border}>{vegetable.temperature}</td>
                            <td className={style.border}>{vegetable.water}</td>
                            <td className={style.border}>{vegetable.fertilizers}</td>
                            <td className={style.border}>{vegetable.information}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
;
export default Garden;