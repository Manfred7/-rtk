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
import {directionSelector, periodSelector} from "../../slices/selectors/card-selectors";
import DirectionDropDown from "../DirectionDropDown/direction-drop-down";
import PeriodDropDown from "../PeriodDropDown/period-dropdown";

const CardsPage = ({data}) => {

    const {periodSix, periodSeven, periodEight, indexesMaps: startMap} = data;
    const selectedPeriod = useSelector(periodSelector);

    let periodData;

    switch (selectedPeriod) {
        case '6':
            periodData = periodSix;
            console.log({periodSix});
            break;
        case '7':
            periodData = periodSeven;
            console.log({periodSeven});
            break;
        case '8':
            periodData = periodEight;
            console.log({periodEight});
            break;
        default:
            console.error('Не корректный период ', selectedPeriod)
            console.warn('Не корректный период ', periodData);

    }


    const direction = useSelector(directionSelector);


    const sv1 = periodData.sv1.stars;
    const sv2 = periodData.sv2.stars;
    const svIdx = startMap.svIdx;

    const s2 = periodData.s2.stars;
    const s1 = periodData.s1.stars;
    const sIdx = startMap.sIdx;


    const sz1 = periodData.sz1.stars;
    const sz2 = periodData.sz2.stars;
    const szIdx = startMap.szIdx;


    const yv1 = periodData.yv1.stars;
    const yv2 = periodData.yv2.stars;
    const yvIdx = startMap.yvIdx;


    const y1 = periodData.y1.stars;
    const y2 = periodData.y2.stars;

    const yIdx = startMap.yIdx;

    const yz1 = periodData.yz1.stars;
    const yz2 = periodData.yz2.stars;
    const yzIdx = startMap.yzIdx;


    const z1 = periodData.z1.stars;
    const z2 = periodData.z2.stars;

    const zIdx = startMap.zIdx;


    const v1 = periodData.v1.stars;
    const v2 = periodData.v2.stars;

    const vIdx = startMap.vIdx;


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
    /*    function onChange(date, dateString) {
               console.log(date, dateString);
           }*/
    const directionSetting = getDirectionSetting(direction);

    console.log(directionSetting);

    return (
        <>

            <div style={{textAlign: "left", marginBottom: "10px", marginLeft: "30px", marginTop: "30px"}}>
                <PeriodDropDown/>
            </div>

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
