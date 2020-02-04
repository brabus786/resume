import React from 'react';
import classes from './Experience.module.css';
import test1 from './../../assets/img/Screenshot_1.png';
import test1W from './../../assets/img/Screenshot_1.webp';
import test2 from './../../assets/img/Screenshot_2.png';
import test2W from './../../assets/img/Screenshot_2.webp';
import test3 from './../../assets/img/Screenshot_3.png';
import test3W from './../../assets/img/Screenshot_3.webp';
import test4 from './../../assets/img/Screenshot_4.png';
import test4W from './../../assets/img/Screenshot_4.webp';
import test5 from './../../assets/img/Screenshot_5.png';
import test5W from './../../assets/img/Screenshot_5.webp';
import test6 from './../../assets/img/Screenshot_6.png';
import test6W from './../../assets/img/Screenshot_6.webp';
import test7 from './../../assets/img/Screenshot_7.png';
import test7W from './../../assets/img/Screenshot_7.webp';
import test8 from './../../assets/img/Screenshot_8.png';
import test8W from './../../assets/img/Screenshot_8.webp';
import test9 from './../../assets/img/Screenshot_9.png';
import test9W from './../../assets/img/Screenshot_9.webp';
import test10 from './../../assets/img/Screenshot_10.png';
import test10W from './../../assets/img/Screenshot_10.webp';
import test11 from './../../assets/img/Screenshot_11.png';
import test11W from './../../assets/img/Screenshot_11.webp';
import test12 from './../../assets/img/Screenshot_12.png';
import test12W from './../../assets/img/Screenshot_12.webp';
import test13 from './../../assets/img/Screenshot_13.png';
import test13W from './../../assets/img/Screenshot_13.webp';
import test14 from './../../assets/img/Screenshot_14.png';
import test14W from './../../assets/img/Screenshot_14.webp';
import test15 from './../../assets/img/Screenshot_15.png';
import test15W from './../../assets/img/Screenshot_15.webp';
import test16 from './../../assets/img/Screenshot_16.png';
import test16W from './../../assets/img/Screenshot_16.webp';


const Experience = (props) => {
    return (
        <div className={classes.block}>
            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Works to showcase my skills:' : 'Тестовые задания'}</p>
            <div className={classes.blockLinck}>
                <a rel="noopener" target="_blank" href="https://brabus786.github.io/codebright/build/">
                    <picture>
                        <source type="image/webp" srcSet={test16W} />
                        <source type="image/jpeg" srcSet={test16} />
                        <img src={test16} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://brabus786.github.io/dist/">
                    <picture>
                        <source type="image/webp" srcSet={test1W} />
                        <source type="image/jpeg" srcSet={test1} />
                        <img src={test1} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://brabus786.github.io/webakula-test/dist/">
                    <picture>
                        <source type="image/webp" srcSet={test2W} />
                        <source type="image/jpeg" srcSet={test2} />
                        <img src={test2} alt="img" />
                    </picture>
                </a>
            </div>
            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Examples of my work at ' : 'Примеры моей работы в'} Tesla Weld / Tatra garden:</p>
            <div className={classes.blockLinck}>
                <a rel="noopener" target="_blank" href="https://tatragarden.ua/">
                    <picture>
                        <source type="image/webp" srcSet={test3W} />
                        <source type="image/jpeg" srcSet={test3} />
                        <img src={test3} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://tatragarden.ua/evropejskie-kultivatory">
                    <picture>
                        <source type="image/webp" srcSet={test4W} />
                        <source type="image/jpeg" srcSet={test4} />
                        <img src={test4} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/birthday">
                    <picture>
                        <source type="image/webp" srcSet={test5W} />
                        <source type="image/jpeg" srcSet={test5} />
                        <img src={test5} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/mma-230">
                    <picture>
                        <source type="image/webp" srcSet={test6W} />
                        <source type="image/jpeg" srcSet={test6} />
                        <img src={test6} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/oborudovanie-dlya-privarki-shpilek">
                    <picture>
                        <source type="image/webp" srcSet={test7W} />
                        <source type="image/jpeg" srcSet={test7} />
                        <img src={test7} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="http://blog.prosvarka.com.ua/">
                    <picture>
                        <source type="image/webp" srcSet={test8W} />
                        <source type="image/jpeg" srcSet={test8} />
                        <img src={test8} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="http://blog-tig-a.prosvarka.com.ua/">
                    <picture>
                        <source type="image/webp" srcSet={test9W} />
                        <source type="image/jpeg" srcSet={test9} />
                        <img src={test9} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://teslaweld.com/mma">
                    <picture>
                        <source type="image/webp" srcSet={test10W} />
                        <source type="image/jpeg" srcSet={test10} />
                        <img src={test10} alt="img" />
                    </picture>
                </a>
            </div>
            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Freelance' : 'Внештатно'}</p>
            <div className={classes.blockLinck}>
                <a rel="noopener" target="_blank" href="http://dymohody.proizvoditel.co.ua/">
                    <picture>
                        <source type="image/webp" srcSet={test12W} />
                        <source type="image/jpeg" srcSet={test12} />
                        <img src={test12} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="http://zonty.proizvoditel.co.ua/">
                    <picture>
                        <source type="image/webp" srcSet={test13W} />
                        <source type="image/jpeg" srcSet={test13} />
                        <img src={test13} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://hot-floor.pp.ua/">
                    <picture>
                        <source type="image/webp" srcSet={test11W} />
                        <source type="image/jpeg" srcSet={test11} />
                        <img src={test11} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="https://plodovkaopt.pp.ua">
                    <picture>
                        <source type="image/webp" srcSet={test14W} />
                        <source type="image/jpeg" srcSet={test14} />
                        <img src={test14} alt="img" />
                    </picture>
                </a>
                <a rel="noopener" target="_blank" href="http://medok.ludmila-goncharova.com/">
                    <picture>
                        <source type="image/webp" srcSet={test15W} />
                        <source type="image/jpeg" srcSet={test15} />
                        <img src={test15} alt="img" />
                    </picture>
                </a>
            </div>
        </div>
    )
};

export default Experience;