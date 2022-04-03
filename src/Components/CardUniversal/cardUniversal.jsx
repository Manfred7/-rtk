import React from 'react';
import s from "./cardcardUniversal.module.css"


const Land = ({star, caption, baseStar}) => {

    return (
        <div className={s.caption}>
            <div className={s.side}>{caption}</div>
            <div className={s.star}>{baseStar}</div>
            <div className={s.star}>{star}</div>
        </div>
    )
}
const CardUniversal = ({stars}) => {

    return (<div className={s.world}>
        <div className={s.land}>

            <div className={s.elementWater}>
                <Land star={stars["s"]} caption="Север" baseStar={1}/>
            </div>

            <div className={s.elementTree3}>
                <Land star={stars["v"]} caption="Восток" baseStar={3}/>
            </div>

            <div className={s.elementTree4}>
                <Land star={stars["yv"]} caption="Юго-Восток" baseStar={4}/>
            </div>

            <div className={s.elementFire}>
                <Land star={stars["y"]} caption="Юг" baseStar={9}/>
            </div>

            <div className={s.elementEarth2}>
                <Land star={stars["yz"]} caption="Юго-Запад" baseStar={2}/>
            </div>

            <div className={s.elementEarth5}>
                <div className={s.star}>
                    {stars["centr"]}
                </div>
            </div>

            <div className={s.elementEarth8}>
                <Land star={stars["sv"]} caption="Северо-Восток" baseStar={8}/>
            </div>

            <div className={s.elementMetal7}>
                <Land star={stars["z"]} caption="Запад" baseStar={7}/>
            </div>

            <div className={s.elementMetal6}>
                <Land star={stars["sz"]} caption="Северо-Запад" baseStar={6}/>
            </div>

        </div>
    </div>) ;
};

export default CardUniversal;
