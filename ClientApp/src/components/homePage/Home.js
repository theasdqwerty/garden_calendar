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

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            // <div>
            //   <h1>Garden calendar</h1>
            //   <p>Welcome to your new single-page application, built with:</p>
            //   <ul>
            //     <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
            //     <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
            //     <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            //   </ul>
            //   <p>To help you get started, we have also set up:</p>
            //   <ul>
            //     <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
            //     <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
            //     <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            //   </ul>
            //   <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            // </div>
            <section>
                {/*<h1>Календарь садовода</h1>*/}
                <div className={style.block}>
                    <div className={style.headerBlock}>
                        <div className={style.headerTextBlock}>
                            <h2 className={style.headerTitle}>Создайте свой уникальный календарь!</h2>
                            <p className={style.headerParagraph}>Основываясь на выбранных вами овощах и фруктах вы
                                получите совершенно уникальный
                                календарь, который подходит именно для вас</p>
                            <button className={style.headerButton}>Создать</button>
                        </div>
                        <div>
                            <img className={style.headerImage} src={ovoshi} alt='овощи'/>
                        </div>
                    </div>
                    <div className={style.headerBlock}>
                        <div>
                            <img className={style.headerImage} src={image1} alt='овощи'/>
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
                    <h3>Полезная информация про садоводство</h3>
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
                                <a className={style.link} href="/#">Про удобрения</a>
                                <a className={style.link} href="/#">Про Сорняки</a>
                                <a className={style.link} href="/#">Оборудование</a>
                            </div>
                        </li>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={flowers} alt='Цветы'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}> Цветы</span>
                                <img className={style.icon} src={fliverPNG} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link} href="/#">Ссылка 1</a>
                                <a className={style.link} href="/#">Ссылка 2</a>
                                <a className={style.link} href="/#">Ссылка 3</a>
                            </div>
                        </li>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={mushrooms} alt='Цветы'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}> Грибы</span>
                                <img className={style.icon} src={musgroomPNG} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link} href="/#">Ссылка 1</a>
                                <a className={style.link} href="/#">Ссылка 2</a>
                                <a className={style.link} href="/#">Ссылка 3</a>
                            </div>
                        </li>
                        <li className={style.dropdown}>
                            <img className={style.infoImg} src={berrys} alt='Цветы'/>
                            <div className={style.dropbtn}>
                                <span className={style.postscript}>  Ягоды</span>
                                <img className={style.icon} src={berryPNG} alt='icon'/>
                            </div>
                            <div className={style.dropdownContent}>
                                <a className={style.link} href="/#">Ссылка 1</a>
                                <a className={style.link} href="/#">Ссылка 2</a>
                                <a className={style.link} href="/#">Ссылка 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.forumBlock}>
                    <h2>Делитесь рецептами и советами на нашем форуме</h2>
                    <div className={style.forumContainer}>
                        <div>
                            <img className={style.image} src={family} alt='family'/>
                        </div>
                        <div className={style.textContainer}>
                            <p>Елена Мишаева</p>
                            <p className={style.forumText}> С дочкой вырастили вот такою прекрасную капусту. Календарь
                                показал идеальное время для
                                посадки, а так же на форуме подсказали как ухаживать и вот что уродилось!!! Мы в
                                восторге</p>
                        </div>
                    </div>
                    <div className={style.commentList}>
                        <div className={style.commentItem}>
                            <h3>Посадила тыкву выросла карета!!!</h3>
                            <p>Это невероятно, посадила семена тыквы, прислушивалась всех рекомендаций календарика и
                                выросла гигантская 2ух метровая тыква, до сих пор с мужем не можем поверить.</p>
                            <p>Вероника Степанова</p>
                        </div>
                        <div className={style.commentItem}>
                            <h3>Бой с колорадами</h3>
                            <p> Год назад посадили картошку, вроде бы все хорошо было, да вот только колорады все поели,
                                но у соседей все было хорошо мы очень удивились как же так и тут они рассказали нам про
                                этот чудесный календарь, теперь благодаря правильному уходу и своевременным напоминаниям
                                вредители нам не страшны, в погребе уже места нет все картохой завалено. </p>
                            <p> Дед Максим</p>
                        </div>
                        <div className={style.commentItem}>
                            <h3>Правильные пчелы</h3>
                            <p>Эта удивительная история не случилась бы, если не этот чудесный календарик. Благодаря
                                советам у нас выросли изумительные цветы на их аромат слетелись все пчелы и построили
                                рядом с домом себе гнездо. Пчелки добрые и мирные спокойно подпускают к себе и лают
                                забирать свой мед. Спасибо этому сайтику за такое невероятное соседство.</p>
                            <p>Диана Врухина</p>
                        </div>
                    </div>
                </div>
                <div className={style.insert}>
                    <h2> Готовы к нам присоединиться?</h2>
                    <div className={style.buttonContainer}>
                        <button className={style.whiteButton}>Войти</button>
                        <button className={style.blueButton}>Зарегистрироваться</button>
                    </div>
                </div>
            </section>
        );
    }
}
