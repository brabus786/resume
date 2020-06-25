import React from 'react';
import classes from './Main.module.css';
import LeftBar from './../LeftBar/LeftBar';
import RigthBar from "./../RigthBar/RigthBar";

const main = (props) => {


    // const date = new Date();
    // console.log(`${date.getDay()} ${date.getMonth()} ${date.getFullYear()} `);

    return (
        <div className={'myContainer' + ' ' + classes.properties}>
            <LeftBar leng={props} />
            <RigthBar leng={props} />
        </div>
    )
};

export default main;