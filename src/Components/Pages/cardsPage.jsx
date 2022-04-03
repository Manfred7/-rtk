import React, {useState} from 'react';
import {Select, Space} from "antd";
import CustomProperties from "react-custom-properties";
import {customEastProp, customNordProp, customSouthProp, customWestProp} from "../../data/cards-setting";
import CardUniversal from "../CardUniversal/cardUniversal";
import {useDispatch, useSelector} from "react-redux";
import {chouseDirection} from "../../slices/cardSlice";
import {directionSelector} from "../../slices/selectors/card-selectors";


const {Option} = Select;

const CardsPage = () => {

    const dispatch = useDispatch();

    const direction =  useSelector(directionSelector);

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    /*const [direction, setDirection] = useState("sever1");*/

    const starsYug = [12, 66, 84, 93, 21, 48, 57, 75, 39];
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

    const handleChangeDirection = (newDirection) => {
        /*console.log("rrr", newDirection);*/

        dispatch(chouseDirection(newDirection));
    }
    return (
        <>
            <Space direction="vertical" size={12}>
                {/*<DatePicker onChange={onChange} picker="year"/>*/}

                <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }

                    onChange={(value, option) => {

                        handleChangeDirection(option.key)
                    }
                    }
                    defaultValue="sever1"
                >
                    <Option key="sever1" value="1">338 - 352 sever1</Option>
                    <Option key="sever23" value="2">353 - 22 sever23 </Option>
                    <Option key="yug1" value="3">158 - 172 yug1</Option>
                    <Option key="yug23" value="4">173 - 202 yug23</Option>
                    <Option key="zapad1" value="5">248 - 262 zapad1</Option>
                    <Option key="zapad23" value="6">263 - 292 zapad23</Option>
                    <Option key="vostok1" value="7">68 - 82 vostok1</Option>
                    <Option key="vostok23" value="8">83 - 112 vostok23</Option>
                </Select>
            </Space>

            <div style={{display: "flex", direction: "row", flexWrap: "wrap"}}>

                {((direction === "sever1") | (direction === "sever23")) &&

                    <div>

                        <CustomProperties properties={customNordProp}>
                            <CardUniversal stars={ccc}/>
                        </CustomProperties>
                        <h2>Север {direction === "sever1" ? "1" : "23"}</h2>
                    </div>
                }

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
                }

                {((direction === "zapad1") | (direction === "zapad23")) && <div>
                    <CustomProperties properties={customWestProp}>
                        <CardUniversal stars={ccc}/>
                    </CustomProperties>
                    <h2>Запад {direction === "zapad1" ? "1" : "23"}</h2>
                </div>
                }

            </div>

        </>
    );
};

export default CardsPage;
