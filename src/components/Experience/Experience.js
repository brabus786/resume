import React from 'react';

import BlockLink from '../blockLinck/BlockLink';

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
import nedvig from './../../assets/img/Screenshot_4_optimized.png';
import nedvigW from './../../assets/img/Screenshot_4_optimized.webp';
import test20 from './../../assets/img/Screenshot_20.png';
import test20W from './../../assets/img/Screenshot_20.webp';
import tattz from './../../assets/img/tattz.png';
import tattzW from './../../assets/img/tattz.webp';
import videoTattz1 from './../../assets/videoTattz/bandicam 2020-06-25 11-27-35-183.mp4';
import videoTattz2 from './../../assets/videoTattz/bandicam 2020-06-25 11-32-47-848.mp4';
import videoTattz3 from './../../assets/videoTattz/bandicam 2020-06-25 11-36-48-151.mp4';
import videoTattz4 from './../../assets/videoTattz/bandicam 2020-06-25 11-37-45-943.mp4';
import videoTattz5 from './../../assets/videoTattz/bandicam 2020-06-25 11-38-45-828.mp4';
import videoTattz6 from './../../assets/videoTattz/bandicam 2020-06-25 11-42-40-986.mp4';
import videoTattz7 from './../../assets/videoTattz/bandicam 2020-06-25 11-47-05-622.mp4';
import videoTattz8 from './../../assets/videoTattz/bandicam 2020-06-25 11-49-26-502.mp4';
import videoTattz9 from './../../assets/videoTattz/bandicam 2020-06-25 11-51-16-081.mp4';
import videoTattz10 from './../../assets/videoTattz/bandicam 2020-06-25 11-59-29-213.mp4';


const Experience = (props) => {
    return (
        <div className={classes.block}>


            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Project in development' : 'Проект в разработке'}</p>

            <div className={classes.blockLinck}>
                <BlockLink
                    img={tattz}
                    imgW={tattzW}
                    href='http://front.tattz.ru/'
                    technology={['Next.js', 'React.js', 'Redux', 'REST API', 'integration API', 'Node.js', 'Express', 'SCSS', 'Grid ', 'Flex', 'Responsive Layout', 'Mobile first']}
                />

            </div>

            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Video review of the project in development' : 'Видеообзор проекта в разработке'}</p>

            <div className={classes.blockLinck}>
                <video controls  src={videoTattz1}></video>
                <video controls  src={videoTattz2}></video>
                <video controls  src={videoTattz3}></video>
                <video controls  src={videoTattz4}></video>
                <video controls  src={videoTattz5}></video>
                <video controls  src={videoTattz6}></video>
                <video controls  src={videoTattz7}></video>
                <video controls  src={videoTattz8}></video>
                <video controls  src={videoTattz9}></video>
                <video controls  src={videoTattz10}></video>
            </div>

            <p className={'tytle'}>{props.leng.leng.leng.en ? 'New projects' : 'Новые проекты'}</p>

            <div className={classes.blockLinck}>
                <BlockLink
                    img={nedvig}
                    imgW={nedvigW}
                    href='https://comestate.agency/'
                    technology={['Next.js', 'React.js', 'Node.js', 'Express', 'MongoDB', 'SCSS', 'Responsive Layout']}
                />

                <BlockLink
                    img={test20}
                    imgW={test20W}
                    href='https://board.brabus786.now.sh/'
                    technology={['React.js', 'Redax', 'SCSS']}
                />
            </div>


            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Works to showcase my skills:' : 'Работает, чтобы продемонстрировать мои навыки'}</p>
            <div className={classes.blockLinck}>

                <BlockLink
                    imgW={test16W}
                    img={test16}
                    href='https://brabus786.github.io/codebright/build/'
                    technology={['React.js', 'REST API', 'SCSS', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test1W}
                    img={test1}
                    href='https://brabus786.github.io/dist/'
                    technology={['JavaScript', 'CSS', 'HTML', 'Gulp', ' Lazy Load', 'Critical CSS', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test2W}
                    img={test2}
                    href='https://brabus786.github.io/webakula-test/dist/'
                    technology={['JavaScript', 'CSS', 'HTML', 'Gulp', ' Lazy Load', 'Critical CSS', 'Responsive Layout']}
                />


            </div>
            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Examples of my work at ' : 'Примеры моей работы в'} Tesla Weld / Tatra garden:</p>
            <div className={classes.blockLinck}>

                <BlockLink
                    imgW={test3W}
                    img={test3}
                    href='https://tatragarden.ua/'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test4W}
                    img={test4}
                    href='https://tatragarden.ua/evropejskie-kultivatory'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test5W}
                    img={test5}
                    href='https://teslaweld.com/birthday'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test6W}
                    img={test6}
                    href='https://teslaweld.com/mma-230'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test7W}
                    img={test7}
                    href='https://teslaweld.com/oborudovanie-dlya-privarki-shpilek'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test8W}
                    img={test8}
                    href='http://blog.prosvarka.com.ua/'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test9W}
                    img={test9}
                    href='http://blog-tig-a.prosvarka.com.ua/'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test10W}
                    img={test10}
                    href='https://teslaweld.com/mma'
                    technology={['OpenCart', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML', 'Responsive Layout']}
                />

            </div>
            <p className={'tytle'}>{props.leng.leng.leng.en ? 'Freelance' : 'Внештатно'}</p>
            <div className={classes.blockLinck}>

                <BlockLink
                    imgW={test12W}
                    img={test12}
                    href='http://dymohody.proizvoditel.co.ua/'
                    technology={['JavaScript', 'jQuery', 'CSS', 'HTML', 'Gulp', ' Lazy Load', 'Critical CSS', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test13W}
                    img={test13}
                    href='http://zonty.proizvoditel.co.ua/'
                    technology={['JavaScript', 'jQuery', 'CSS', 'HTML', 'Gulp', ' Lazy Load', 'Critical CSS', 'Responsive Layout']}
                />

                <BlockLink
                    imgW={test15W}
                    img={test15}
                    href='http://medok.ludmila-goncharova.com/'
                    technology={['JavaScript', 'jQuery', 'CSS', 'HTML', 'Gulp', ' Lazy Load', 'Critical CSS', 'Responsive Layout']}
                />

            </div>
        </div>
    )
};

export default Experience;