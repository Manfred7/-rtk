import React from 'react';
import s from "./cardcardUniversal.module.css"


const Land = ({star, caption, baseStar,isVneGua }) => {
    console.log(caption)
    console.log(isVneGua)
    return (
        <div className={s.caption}>
            <div className={s.side}>{caption}</div>
            <div className={s.star}>{baseStar}</div>
            <div className={s.star}>{star}</div>
            {isVneGua && <div>вне гуа</div>
            }
        </div>
    )
}
const CardUniversal = ({stars, vneGua}) => {


    return (<div className={s.world}>
        <div className={s.land}>

            <h1>вне гуа: {vneGua} </h1>

            <div className={s.elementWater}>
                <Land star={stars["s"]} caption="Север" baseStar={1} isVneGua={vneGua.indexOf(1)!=-1}/>
            </div>

            <div className={s.elementTree3}>
                <Land star={stars["v"]} caption="Восток" baseStar={3} isVneGua={vneGua.indexOf(3)!=-1}/>
            </div>

            <div className={s.elementTree4}>
                <Land star={stars["yv"]} caption="Юго-Восток" baseStar={4} isVneGua={vneGua.indexOf(4)!=-1}/>
            </div>

            <div className={s.elementFire}>
                <Land star={stars["y"]} caption="Юг" baseStar={9} isVneGua={vneGua.indexOf(9)!=-1}/>
            </div>

            <div className={s.elementEarth2}>
                <Land star={stars["yz"]} caption="Юго-Запад" baseStar={2} isVneGua={vneGua.indexOf(2)!=-1}/>
            </div>

            <div className={s.elementEarth5}>
                <div className={s.star}>
                    {stars["centr"]}
                </div>
            </div>

            <div className={s.elementEarth8}>
                <Land star={stars["sv"]} caption="Северо-Восток" baseStar={8} isVneGua={vneGua.indexOf(8)!=-1}/>
            </div>

            <div className={s.elementMetal7}>
                <Land star={stars["z"]} caption="Запад" baseStar={7} isVneGua={vneGua.indexOf(7)!=-1}/>
            </div>

            <div className={s.elementMetal6}>
                <Land star={stars["sz"]} caption="Северо-Запад" baseStar={6} isVneGua={vneGua.indexOf(6)!=-1}/>
            </div>

        </div>
    </div>) ;
};

export default CardUniversal;
