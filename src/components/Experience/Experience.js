import React from 'react';
import classes from './Experience.module.css';
import test1 from './../../assets/img/Screenshot_1.png';
import test2 from './../../assets/img/Screenshot_2.png';
import test3 from './../../assets/img/Screenshot_3.png';
import test4 from './../../assets/img/Screenshot_4.png';
import test5 from './../../assets/img/Screenshot_5.png';
import test6 from './../../assets/img/Screenshot_6.png';
import test7 from './../../assets/img/Screenshot_7.png';
import test8 from './../../assets/img/Screenshot_8.png';
import test9 from './../../assets/img/Screenshot_9.png';
import test10 from './../../assets/img/Screenshot_10.png';
import test11 from './../../assets/img/Screenshot_11.png';
import test12 from './../../assets/img/Screenshot_12.png';
import test13 from './../../assets/img/Screenshot_13.png';
import test14 from './../../assets/img/Screenshot_14.png';
import test15 from './../../assets/img/Screenshot_15.png';

const Experience = () => {
    return (
        <div className={classes.block}>
            <p className={'tytle'}>Test work:</p>
            <div className={classes.blockLinck}>
                <a rel="noopener" target="_blank" href="https://brabus786.github.io/dist/">
                    <img src={test1} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://brabus786.github.io/webakula-test/dist/">
                    <img src={test2} alt="img"/>
                </a>
            </div>
            <p className={'tytle'}>Examples of my work at Tesla Weld / Tatra garden:</p>
            <div className={classes.blockLinck}>
                <a rel="noopener" target="_blank" href="https://tatragarden.ua/">
                    <img src={test3} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://tatragarden.ua/evropejskie-kultivatory">
                    <img src={test4} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/birthday">
                    <img src={test5} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/mma-230">
                    <img src={test6} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/oborudovanie-dlya-privarki-shpilek">
                    <img src={test7} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="http://blog.prosvarka.com.ua/">
                    <img src={test8} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="http://blog-tig-a.prosvarka.com.ua/">
                    <img src={test9} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/mma">
                    <img src={test10} alt="img"/>
                </a>
            </div>
            <p className={'tytle'}>Freelance</p>
            <div className={classes.blockLinck}>
                <a rel="noopener" target="_blank" href="https://hot-floor.pp.ua/">
                    <img src={test11} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="http://zonty.proizvoditel.co.ua/">
                    <img src={test13} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="http://dymohody.proizvoditel.co.ua/">
                    <img src={test12} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="https://plodovkaopt.pp.ua">
                    <img src={test14} alt="img"/>
                </a>
                <a rel="noopener" target="_blank" href="http://medok.ludmila-goncharova.com/">
                    <img src={test15} alt="img"/>
                </a>
            </div>
        </div>
    )
};

export default Experience;