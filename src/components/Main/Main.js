import React from 'react';
import classes from './Main.module.css';
import LeftBar from './../LeftBar/LeftBar';
import RigthBar from "./../RigthBar/RigthBar";

const main = () => {
    return (
        <div className={'myContainer' + ' ' + classes.properties}>
            <LeftBar/>
            <RigthBar/>
        </div>
    )
};

export default main;