import React from 'react';
import {Select, Space} from "antd";
import {chouseDirection} from "../../slices/reduxStore";
import {useDispatch} from "react-redux";

const {Option} = Select;

const DirectionDropDown = () => {
    const dispatch = useDispatch();

    const handleChangeDirection = (newDirection) => {
        dispatch(chouseDirection(newDirection));
    }

    return (

            <Space direction="vertical" size={12}>
                {/*<DatePicker onChange={onChange} picker="year"/>*/}
                <label>Направление</label>
                <Select
                    showSearch
                    style={{width: 300}}
                    placeholder="Градус на двери"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }

                    onChange={(value, option) =>  handleChangeDirection(option.key)  }
                    defaultValue="15"

                >
                    <Option key="sv1" value="1">23 - 37 СВ-1</Option>
                    <Option key="sv23" value="2">38 - 67 СВ-23 </Option>

                    <Option key="vostok1" value="3">68 - 82 Восток-1</Option>
                    <Option key="vostok23" value="4">83 - 112 Восток-23</Option>

                    <Option key="yv1" value="5">113 - 127 ЮВ-1</Option>
                    <Option key="yv23" value="6">128 - 157 ЮВ-23</Option>
                    <Option key="yug1" value="7">158 - 172 Юг-1</Option>
                    <Option key="yug23" value="8">173 - 202 Юг-23</Option>

                    <Option key="yz1" value="9">203 - 217 ЮЗ-1</Option>
                    <Option key="yz23" value="10">218 - 247 ЮЗ-23</Option>

                    <Option key="zapad1" value="11">248 - 262 Запад-1</Option>
                    <Option key="zapad23" value="12">263 - 292 Запад-23</Option>

                    <Option key="sz1" value="13">293 - 307 СЗ-1</Option>
                    <Option key="sz23" value="14">308 - 337 СЗ-23</Option>

                    <Option key="sever1" value="15">338 - 352 Север-1</Option>
                    <Option key="sever23" value="16">353 - 22 Север-23</Option>
                </Select>
            </Space>

            );
};

export default DirectionDropDown;
