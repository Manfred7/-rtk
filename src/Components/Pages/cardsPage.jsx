import React from 'react';
import CustomProperties from "react-custom-properties";
import {
    customEastProp, customNordEastProp,
    customNordProp,
    customNordWestProp, customSouthEstProp,
    customSouthProp, customSouthWestProp,
    customWestProp
} from "../../data/cards-setting";
import CardUniversal from "../CardUniversal/cardUniversal";
import { useSelector} from "react-redux";
import {directionSelector} from "../../slices/selectors/card-selectors";
import DirectionDropDown from "../DirectionDropDown/direction-drop-down";

const CardsPage = () => {

    const direction = useSelector(directionSelector);

    /*    function onChange(date, dateString) {
            console.log(date, dateString);
        }*/

    /* const starsYug = [12, 66, 84, 93, 21, 48, 57, 75, 39];*/
    let ccc = [];
    ccc["sz"] = "";
    ccc["s"] = "";
    ccc["sv"] = "";

    ccc["z"] = "";
    ccc["centr"] = "";

    ccc["v"] = "";

    ccc["yz"] = "";
    ccc["y"] = "";
    ccc["yv"] = "";


    const getDirectionSetting = (vDirection) => {

        const details =  vDirection.match("1") ? "1" :"23";

        if ( vDirection.match("sever")) {
            return {
                customDirectionProp: customNordProp,
                caption: "Север " + details
            }
        }

        if (vDirection.match("yug")) {

            return {
                customDirectionProp: customSouthProp,
                caption: "Юг " + details
            }
        }

        if (vDirection.match("vostok")){

            return {
                customDirectionProp: customEastProp,
                caption: "Восток " + details
            }
        }

        if (vDirection.match("zapad")){

            return {
                customDirectionProp: customWestProp,
                caption: "Запад " + details
            }
        }

        if (vDirection.match("sv")){

            return {
                customDirectionProp: customNordEastProp,
                caption: "CВ " + details
            }
        }

        if (vDirection.match("sz")){

            return {
                customDirectionProp: customNordWestProp,
                caption: "CЗ" + details
            }
        }

        if (vDirection.match("yz")){

            return {
                customDirectionProp: customSouthWestProp,
                caption: "ЮЗ" + details
            }
        }


        if (vDirection.match("yv")){

            return {
                customDirectionProp: customSouthEstProp,
                caption: "ЮВ" + details
            }
        }




    }

    const directionSetting = getDirectionSetting(direction);

    console.log(directionSetting);

    return (
        <>

            <DirectionDropDown/>

            <div style={{display: "flex", direction: "row", flexWrap: "wrap"}}>

            {/*     <div>
                     <CardLoShu/>
                 </div>*/}

                <div>

                    <CustomProperties properties={directionSetting.customDirectionProp}>
                        <CardUniversal stars={ccc}/>
                    </CustomProperties>
                    <h2>{directionSetting.caption}</h2>
                </div>


            </div>

        </>
    );
};

export default CardsPage;
