import React from 'react';
import logo from "../../assets/img/Photo-I-am.png";
import logoW from "../../assets/img/Photo-I-am.webp";
import classes from './LeftBar.module.css'


const LeftBar = (props) => {

    return (
        <div className={'leftBar' + ' ' + classes.parent}>
            <div className={classes.wrapImg}>
                <picture>
                    <source type="image/webp" srcSet={logoW} />
                    <source type="image/jpeg" srcSet={logo} />
                    <img alt="img" src={logo} />
                </picture>
            </div>
            <p className={'tytle'}>{props.leng.leng.en ? 'Info' : 'Контактная информация'}</p>
            <p>Phone</p>
            <a rel="noopener" href="tel:+380501596204">+380501596204</a>
            <p>Telegram</p>
            <a rel="noopener" href="https://t.me/Nikolay_Pilipchatin">@Nikolay_Pilipchatin</a>
            <p>Email</p>
            <a rel="noopener" href="mailto:nikolay.pylypchatin@gmail.com">nikolay.pylypchatin@gmail.com</a>
            <p className={'tytle'}>{props.leng.leng.en ? 'Skills' : 'Навыки'}</p>
            <ul>
                <li>JavaScript ES5, 6, 7 & jQuery</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>HTML5 & CSS3</li>
                <li>SASS/SCSS/LESS</li>
                <li>Gulp</li>
                <li>Bootstrap 4</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>Git Basics</li>
                <li>Responsive markup</li>
                <li>Cross-browser and</li>
                <li>valid markup</li>
                <li>Understanding of the BEM</li>
                <li>methodology</li>
            </ul>
            <p className={'tytle'}>{props.leng.leng.en ? 'Languages' : 'Знание языков'}</p>
            <p style={{ color: '#5D5D5D' }}>{props.leng.leng.en ? 'Basic' : 'Начальный'} English</p>

        </div>
    )
};


export default LeftBar;