import React from 'react';
import classes from './RigthBar.module.css';
import Experience from './../Experience/Experience'

const RigthBar = () => {
    return (
        <div className={'RigthBar'+ ' ' +classes.RigthBar}>
            <p className={'tytle'+' '+classes.RTytle}>Profile</p>
            <p>
                I am a Frontend developer with over 2 years of experience one of which is commercial. I worked on 2
                e-commerce projects based on CMS Opencart which have traffic more than 300 000 visitors per month each.
            </p>
            <p>
                Technology stack: JavaScript (ES5, 6, 7), React, Ajax, jQuery, HTML5 & CSS3 (Flexbox), SASS/SCSS/LESS, Gulp,
                Bootstrap 4, PHP, SQL(MySql) Git.
            </p>
            <p>
                I have experience in the development of cross-browser, valid and responsive websites. Mark up using w3
                validator. Fluent in the use of Photoshop during mark up development. I have a basic understanding of
                OOP in js and PHP languages.
            </p>
            <p>
                I have a clear understanding of the mobile-first approach in markup, familiar with methodology BEM.
                Complete understanding of DOM (search, manipulation), js Events.
            </p>
            <p className={'tytle'}>
                Employment History
            </p>
            <p>
                Frontend Developer of e-commerce projects, Tesla Weld, Tatra Garden
            </p>
            <p>
                2018 – 2019
            </p>
            <p>
                My main responsibilities were frontend development based on CMS Opencart of the main website and sites
                for launching advertising campaigns I was developing animated interfaces and interactive block on the
                pages (Quizzes, animations...) Website optimization using Google PageSpeed Insight and fixing bugs found
                by w3 validator.
            </p>

            <Experience />

        </div>
    )
};

export default RigthBar;
