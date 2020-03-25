import React from 'react';
import styles from './BlockLink.module.scss';

const BlockLink = (props) => {
    const technology = props.technology.map((data, i) => {
        return <span key={i}>{data}</span>
    })

    return (
        <div className={styles.BlockLink}>
            <div className={styles.wrapA}>
                <a rel="noopener noreferrer" target="_blank" href={props.href}>
                    <picture>
                        <source type="image/webp" srcSet={props.imgW} />
                        <source type="image/jpeg" srcSet={props.img} />
                        <img src={props.img} alt="img" />
                    </picture>
                </a>
            </div>
            <div className={styles.blockTechnology} >
                {technology}
            </div>
        </div>
    );
};

export default BlockLink;