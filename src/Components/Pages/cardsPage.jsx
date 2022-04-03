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
import {useSelector} from "react-redux";
import {directionSelector} from "../../slices/selectors/card-selectors";
import DirectionDropDown from "../DirectionDropDown/direction-drop-down";

const CardsPage = () => {

    const direction = useSelector(directionSelector);

    /*    function onChange(date, dateString) {
            console.log(date, dateString);
        }*/
    const sv1 = [74, 96, 52, 28, 39, 41, 17, 63, 85];
    const sv2 = [85, 63, 17, 41, 39, 28, 52, 96, 74];
    const svIdx = ["y", "yz", "z", "yv", "centr", "sz", "v", "sv", "s"];

    const s2 = [21, 66, 48, 39, 12, 84, 75, 57, 93];
    const s1 = [93, 57, 75, 84, 12, 39, 48, 66, 21];
    const sIdx = ["yv", "y", "yz", "v", "centr", "z", "sv", "s", "sz"];

    const sz1 = [75, 66, 12, 21, 57, 84, 93, 48, 39];
    const sz2 = [39, 48, 93, 84, 57, 21, 12, 66, 75];
    const szIdx = ["v", "yv", "y", "sv", "centr", "yz", "s", "sz", "z"];


    const yv1 = [93, 84, 39, 48, 75, 12, 21, 66, 57];
    const yv2 = [57, 66, 21, 12, 75, 48, 39, 84, 93];
    const yvIdx = ["z", "sz", "s", "yz", "centr", "sv", "y", "yv", "v"];

    const y2 = [39, 75, 57, 48, 21, 93, 84, 66, 12];
    const y1 = [12, 66, 84, 93, 21, 48, 57, 75, 39];
    const yIdx = ["sz", "s", "sv", "z", "centr", "v", "yz", "y", "yv"];

    const yz1 = [58, 36, 71, 14, 93, 82, 25, 69, 47];
    const yz2 = [47, 69, 25, 82, 93, 14, 71, 36, 58];
    const yzIdx = ["s", "sv", "v", "sz", "centr", "yv", "z", "yz", "y"];


    const z2 = [72, 26, 37, 94, 48, 83, 59, 61, 15];
    const z1 = [15, 61, 59, 83, 48, 94, 37, 26, 72];
    const zIdx = ["sv", "v", "yv", "s", "centr", "y", "sz", "z", "yz"];


    const v2 = [51, 16, 95, 38, 84, 49, 73, 62, 27];
    const v1 = [27, 62, 73, 49, 84, 38, 95, 16, 51];
    const vIdx = ["yz", "z", "sz", "y", "centr", "s", "yv", "v", "sv"];


    const prepareCardInfo = (cardStart, directionArray) => {

        console.log(cardStart);
        console.log(directionArray);
        let elem = {}
        let i = 0;
        while (i < directionArray.length) {
            const idx = directionArray[i];
            const sv1_curr = cardStart[i];
            elem = {
                ...elem,
                [idx]: sv1_curr
            };

            i++;
        }

        console.log(elem);
        return elem

    }


    const getDirectionSetting = (vDirection) => {


        let cardInfo = prepareCardInfo(sv1, svIdx);
        const details = vDirection.match("1") ? "1" : "23";

        if (vDirection.match("sever")) {
            return {
                customDirectionProp: customNordProp,
                caption: "Север " + details,
                stars: vDirection.match("1") ? prepareCardInfo(s1, sIdx) : prepareCardInfo(s2, sIdx)
            }
        }

        if (vDirection.match("yug")) {

            return {
                customDirectionProp: customSouthProp,
                caption: "Юг " + details,

                stars: vDirection.match("1") ? prepareCardInfo(y1, yIdx) : prepareCardInfo(y2, yIdx)
            }
        }

        if (vDirection.match("vostok")) {

            return {
                customDirectionProp: customEastProp,
                caption: "Восток " + details,
                stars: vDirection.match("1") ? prepareCardInfo(v1, vIdx) : prepareCardInfo(v2, vIdx)


            }
        }

        if (vDirection.match("zapad")) {

            return {
                customDirectionProp: customWestProp,
                caption: "Запад " + details,
                stars: vDirection.match("1") ? prepareCardInfo(z1, zIdx) : prepareCardInfo(z2, zIdx)
            }
        }

        if (vDirection.match("sv")) {

            return {
                customDirectionProp: customNordEastProp,
                caption: "CВ " + details,
                stars: vDirection.match("1") ? prepareCardInfo(sv1, svIdx) : prepareCardInfo(sv2, svIdx)
            }
        }

        if (vDirection.match("sz")) {

            return {
                customDirectionProp: customNordWestProp,
                caption: "CЗ" + details,
                stars: vDirection.match("1") ? prepareCardInfo(sz1, szIdx) : prepareCardInfo(sz2, szIdx)
            }
        }

        if (vDirection.match("yz")) {

            return {
                customDirectionProp: customSouthWestProp,
                caption: "ЮЗ" + details,
                stars: vDirection.match("1") ? prepareCardInfo(yz1, yzIdx) : prepareCardInfo(yz2, yzIdx)
            }
        }


        if (vDirection.match("yv")) {

            return {
                customDirectionProp: customSouthEstProp,
                caption: "ЮВ" + details,
                stars: vDirection.match("1") ? prepareCardInfo(yv1, yvIdx) : prepareCardInfo(yv2, yvIdx)
            }
        }


    }

    const directionSetting = getDirectionSetting(direction);

    console.log(directionSetting);

    return (
        <>


            <div style={{textAlign: "left", marginBottom: "10px", marginLeft: "30px", marginTop: "30px"}}>
                <DirectionDropDown/>
            </div>
            <div style={{display: "flex", direction: "row", flexWrap: "wrap", alignItems: "center"}}>


                {/*     <div>
                     <CardLoShu/>
                 </div>*/}

                <div>

                    <CustomProperties properties={directionSetting.customDirectionProp}>
                        <CardUniversal stars={directionSetting.stars}/>
                    </CustomProperties>
                    <h2>{directionSetting.caption}</h2>
                </div>


            </div>

        </>
    );
};

export default CardsPage;
