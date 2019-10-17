import React from 'react';
import classes from './RigthBar.module.css';
import Experience from './../Experience/Experience';
import LengEN from "./LengEN/LengEN";
import LengRU from "./LengRU/LengRU";



const RigthBar = (props) => {
    let x = props.leng.leng;
    function f(x) {
        if(x.en){
            return <LengEN/>
        }
        if(x.ru){
            return <LengRU/>
        }

    }
    return (
        <div className={'RigthBar'+ ' ' +classes.RigthBar}>
            {f(x)}
            <Experience leng = {props} />
        </div>
    )
};

export default RigthBar;
