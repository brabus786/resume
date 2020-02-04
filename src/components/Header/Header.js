import React, { Component } from 'react';
import classes from './Header.module.css';



class Header extends Component {

    render() {
        return (
            <header>
                <div className={'myContainer' + ' ' + classes.wrap}>
                    <div className={classes.header}>
                        <h1 className={classes.tytle}>{this.props.leng.en ? 'Nick Pilipchatin' : 'Николай Пилипчатин'}</h1>
                        <p className={"regText"}>Web {this.props.leng.en ? 'Developer' : 'Разработчик'}</p>
                    </div>
                    <div className={classes.leng}>
                        <span onClick={this.props.hendChange} className={this.props.leng.en ? classes.active : classes.en}>En</span>
                        <span className={classes.palka}>|</span>
                        <span onClick={this.props.hendChange} className={this.props.leng.ru ? classes.active : classes.en}>Ru</span>
                    </div>
                </div>
            </header>
        )
    }

};

export default Header;