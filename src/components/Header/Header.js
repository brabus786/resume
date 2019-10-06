import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={'myContainer' + ' ' + classes.header}>
                <h1 className={classes.tytle}>Nick Pilipchatin</h1>
                <p className={"regText"}>Frontend Developer</p>
            </div>
        </header>
    )
};

export default Header;