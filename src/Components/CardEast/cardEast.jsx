import React from 'react';
import s from "./cardEast.module.css"

const CardEast = () => {
    return (<div className={s.world}>
            <div className={s.land}>

                <div className={s.elementWater}>
                    <div className={s.caption}>
                        <div className={s.side}>Север</div>
                        <div className={s.star}>1</div>
                    </div>
                </div>


                <div className={s.elementTree3}>
                    <div className={s.caption}>
                        <div className={s.side}>Восток</div>
                        <div className={s.star}>3</div>
                    </div>

                </div>

                <div className={s.elementTree4}>
                    <div className={s.caption}>
                        <div className={s.side}>Юго-Восток</div>
                        <div className={s.star}>4</div>
                    </div>
                </div>

                <div className={s.elementFire}>
                    <div className={s.caption}>
                        <div className={s.side}>Юг</div>
                        <div className={s.star}>9</div>
                    </div>
                </div>

                <div className={s.elementEarth2}>
                    <div className={s.caption}>
                        <div className={s.side}>Юго-Запад</div>
                        <div className={s.star}>2</div>
                    </div>
                </div>

                <div className={s.elementEarth5}></div>

                <div className={s.elementEarth8}>
                    <div className={s.caption}>
                        <div className={s.side}>Северо-Восток</div>
                        <div className={s.star}>8</div>
                    </div>
                </div>

                <div className={s.elementMetal7}>
                    <div className={s.caption}>
                        <div className={s.side}>Запад</div>
                        <div className={s.star}>7</div>
                    </div>
                </div>

                <div className={s.elementMetal6}>
                    <div className={s.caption}>
                        <div className={s.side}>Северо-Запад</div>
                        <div className={s.star}>6</div>
                    </div>
                </div>

            </div>
        </div>);
};

export default CardEast;
