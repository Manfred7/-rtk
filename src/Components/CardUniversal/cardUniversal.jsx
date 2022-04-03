import React from 'react';
import s from "./cardcardUniversal.module.css"

const CardUniversal = ({stars}) => {

    return (<div className={s.world}>
        <div className={s.land}>

            <div className={s.elementWater}>
                <div className={s.caption}>
                    <div className={s.side}>Север</div>
                    <div className={s.star}>1</div>
                    <div className={s.star}>{stars["s"]}</div>
                </div>
            </div>


            <div className={s.elementTree3}>
                <div className={s.caption}>
                    <div className={s.side}>Восток</div>
                    <div className={s.star}>3</div>
                    <div className={s.star}>{stars["v"]}</div>
                </div>

            </div>

            <div className={s.elementTree4}>
                <div className={s.caption}>
                    <div className={s.side}>Юго-Восток</div>
                    <div className={s.star}>4</div>
                    <div className={s.star}>{stars["yv"]}</div>
                </div>
            </div>

            <div className={s.elementFire}>
                <div className={s.caption}>
                    <div className={s.side}>Юг</div>
                    <div className={s.star}>9</div>
                    <div className={s.star}>{stars["y"]}</div>
                </div>
            </div>

            <div className={s.elementEarth2}>
                <div className={s.caption}>
                    <div className={s.side}>Юго-Запад</div>
                    <div className={s.star}>2</div>
                    <div className={s.star}>{stars["yz"]}</div>
                </div>
            </div>

            <div className={s.elementEarth5}>
                <div className={s.star}>
                    {stars["centr"]}
                </div>
            </div>

            <div className={s.elementEarth8}>
                <div className={s.caption}>
                    <div className={s.side}>Северо-Восток</div>
                    <div className={s.star}>8</div>
                    <div className={s.star}>{stars["sv"]}</div>
                </div>
            </div>

            <div className={s.elementMetal7}>
                <div className={s.caption}>
                    <div className={s.side}>Запад</div>
                    <div className={s.star}>7</div>
                    <div className={s.star}>{stars["z"]}</div>
                </div>
            </div>

            <div className={s.elementMetal6}>
                <div className={s.caption}>
                    <div className={s.side}>Северо-Запад</div>
                    <div className={s.star}>6</div>
                    <div className={s.star}>{stars["sz"]}</div>
                </div>
            </div>

        </div>
    </div>);
};

export default CardUniversal;
