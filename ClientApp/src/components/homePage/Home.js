import React, {Component} from 'react';
import ovoshi from '../../image/ovoshi.jpg'
import style from './Home.module.css'
import image1 from '../../image/1.jpg'
import dachaOgorod from '../../image/dacha-ogorod.jpg'
import flowers from '../../image/flowers.jpg'
import mushrooms from '../../image/mushrooms.webp'
import berrys from '../../image/berrys.webp'
import plant from '../../image/plantPNG.png'
import fliverPNG from '../../image/flowersPNG.png'
import musgroomPNG from '../../image/mushroomsPNG.png'
import berryPNG from '../../image/berriesPNG.png'
import family from '../../image/family.jpg'
import "../../fonts/MarckScript-Regular.ttf"

export class Home extends Component {
    static displayName = Home.name;


    render() {
        return (
            <section className={style.section}>
                <div className={style.block}>
                    <div className={style.headerBlock}>
                        <div className={style.headerTextBlock}>
                            <h2 className={style.headerTitle}>Создайте свой уникальный календарь!</h2>
                            <p className={style.headerParagraph}>Основываясь на выбранных вами овощах и фруктах вы
                                получите совершенно уникальный
                                календарь, который подходит именно для вас</p>
                            <button className={style.headerButton}>Создать</button>
                        </div>
                        <div className={style.containerImage}>
                            <img className={`${style.headerImage} ${style.headerImageOne}`} src={ovoshi} alt='овощи'/>
                        </div>
                    </div>
                    <div className={style.headerBlock}>
                        <div className={style.containerImage}>
                            <img className={`${style.headerImage}  ${style.headerImageTwo}`} src={image1} alt='овощи'/>
                        </div>
                        <div className={style.headerTextBlock}>
                            <h2 className={style.headerTitle}>Узнайте больше о том как сажать картоху</h2>
                            <p className={style.headerParagraph}> Какая-то полезная инфа про садоводство и прочее с этим
                                связанное или это может быть инфа как пользоваться данным сайтом я хз</p>
                            <button className={style.headerButton}>Узнать</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className={style.info}>Полезная информация про садоводство</h3>
                    <ul className={style.infoList}>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={dachaOgorod} alt='овощи с огорода'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}>Огород</span>
                                <img className={style.icon} src={plant} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link}
                                   href="https://www.ogorod.ru/ru/now/pests/13612/Vse-vrediteli-sada-foto-nazvanija-opisanija-i-mery-borby.htm">О
                                    вредителях</a>
                                <a className={style.link}
                                   href="https://sadkodesign.com.ua/recommendations/uhod-za-sadom/vidy-udobreniy-i-rekomendacii-po-ih-ispolzovaniyu">Про
                                    удобрения</a>
                                <a className={style.link}
                                   href="https://dacha.avgust.com/for-garden-home/articles/vidy-sornyakov-ogoroda/">Про
                                    Сорняки</a>
                                <a className={style.link}
                                   href="https://instrumental.by/blog/garden/instrumenty-i-oborudovanie--stati-o-neobhodimom-inventare-dlya-sada.html">Оборудование</a>
                            </div>
                        </li>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={flowers} alt='Цветы'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}> Цветы</span>
                                <img className={style.icon} src={fliverPNG} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link}
                                   href="https://agro-market24.ru/blog/komnatnye-rasteniya/komnatnye-tsvety-iz-semyan/">Комнатные
                                    цветы</a>
                                <a className={style.link}
                                   href="https://blog.domclick.ru/dom-i-uyut/post/samye-poleznye-komnatnye-rasteniya">Полезные
                                    комнатные растения</a>
                                <a className={style.link}
                                   href="https://zelenysad.ru/kakie-tsvety-v-ogorode-posadit-7-luchshih-tsvetov-dlya-ogoroda/">Цветы
                                    для огорода</a>
                            </div>
                        </li>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={mushrooms} alt='Цветы'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}> Грибы</span>
                                <img className={style.icon} src={musgroomPNG} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link} href="https://dzen.ru/a/ZN9gpPD0X2xkYW4d">Обзор всех видов
                                    грибов</a>
                                <a className={style.link}
                                   href="https://media.mts.ru/technologies/197851-vesennie-griby/">Где и что
                                    собирать</a>
                                <a className={style.link} href="https://www.nexplorer.ru/news__12807.htm">Календарь
                                    грибника</a>
                            </div>
                        </li>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={berrys} alt='Цветы'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}>  Ягоды</span>
                                <img className={style.icon} src={berryPNG} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link}
                                   href="https://www.ogorod.ru/ru/sad/other/18028/Kakie-yagody-mojno-bystro-vyrastit-na-dache.htm">Деревенские
                                    ягоды</a>
                                <a className={style.link}
                                   href="https://www.russianfood.com/recipes/bytype/?fid=91">Рецепты</a>
                                <a className={style.link}
                                   href="https://www.gastronom.ru/text/lekarstvennye-svojstva-yagod-1001248">Народная
                                    медицина</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.insertContainer}>
                    <div className={style.insert}>
                        <h2 className={style.info}> Готовы к нам присоединиться?</h2>
                        <div className={style.buttonContainer}>
                            <button className={style.whiteButton}>Войти</button>
                            <button className={style.blueButton}>Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
