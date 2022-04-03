import React from 'react';
import CustomProperties from "react-custom-properties";
import {customEastProp, customNordProp, customSouthProp, customWestProp} from "../../data/cards-setting";
import CardUniversal from "../CardUniversal/cardUniversal";
import { useSelector} from "react-redux";
import {directionSelector} from "../../slices/selectors/card-selectors";
import DirectionDropDown from "../DirectionDropDown/direction-drop-down";

const CardsPage = () => {

    const direction = useSelector(directionSelector);

    /*    function onChange(date, dateString) {
            console.log(date, dateString);
        }*/

    /*const [direction, setDirection] = useState("sever1");*/

    /* const starsYug = [12, 66, 84, 93, 21, 48, 57, 75, 39];*/
    let ccc = [];
    ccc["sz"] = 12;
    ccc["s"] = 66;
    ccc["sv"] = 84;

    ccc["z"] = 93;
    ccc["centr"] = 21;

    ccc["v"] = 48;

    ccc["yz"] = 57;
    ccc["y"] = 75;
    ccc["yv"] = 39;


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


    }

    const directionSetting = getDirectionSetting(direction);

    console.log(directionSetting);

    return (
        <>

            <DirectionDropDown/>

            <div style={{display: "flex", direction: "row", flexWrap: "wrap"}}>


                <div>

                    <CustomProperties properties={directionSetting.customDirectionProp}>
                        <CardUniversal stars={ccc}/>
                    </CustomProperties>
                    <h2>{directionSetting.caption}</h2>
                </div>


                {/*   {((direction === "sever1") | (direction === "sever23")) &&

                    <div>

                        <CustomProperties properties={customNordProp}>
                            <CardUniversal stars={ccc}/>
                        </CustomProperties>
                        <h2>Север {direction === "sever1" ? "1" : "23"}</h2>
                    </div>
                }
*/}
                {/*
                {((direction === "yug1") | (direction === "yug23")) && <div>

                    <CustomProperties properties={customSouthProp}>
                        <CardUniversal stars={ccc}/>
                    </CustomProperties>
                    <h2>Юг {direction === "yug1" ? "1" : "23"}</h2>
                </div>
                }

                {((direction === "vostok1") | (direction === "vostok23")) && <div>
                    <CustomProperties properties={customEastProp}>
                        <CardUniversal stars={ccc}/>
                    </CustomProperties>
                    <h2>Восток {direction === "vostok1" ? "1" : "23"}</h2>
                </div>
                }*/}

               {/* {((direction === "zapad1") | (direction === "zapad23")) && <div>
                    <CustomProperties properties={customWestProp}>
                        <CardUniversal stars={ccc}/>
                    </CustomProperties>
                    <h2>Запад {direction === "zapad1" ? "1" : "23"}</h2>
                </div>
                }
*/}
            </div>

        </>
    );
};

export default CardsPage;
