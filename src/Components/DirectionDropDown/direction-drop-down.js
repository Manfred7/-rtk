import React from 'react';
import {Select, Space} from "antd";
import {chouseDirection} from "../../slices/cardSlice";
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

                    onChange={(value, option) =>  handleChangeDirection(option.key)  }
                    defaultValue="sever1"
                >
                    <Option key="sv1" value="1">23 - 37 sv1</Option>
                    <Option key="sv23" value="2">38 - 67 sv23 </Option>

                    <Option key="vostok1" value="3">68 - 82 vostok1</Option>
                    <Option key="vostok23" value="4">83 - 112 vostok23</Option>

                    <Option key="yv1" value="5">113 - 127 yv1</Option>
                    <Option key="yv23" value="6">128 - 157 yv23</Option>
                    <Option key="yug1" value="7">158 - 172 yug1</Option>
                    <Option key="yug23" value="8">173 - 202 yug23</Option>

                    <Option key="yz1" value="9">203 - 217 yz1</Option>
                    <Option key="yz23" value="10">218 - 247 yz23</Option>

                    <Option key="zapad1" value="11">248 - 262 zapad1</Option>
                    <Option key="zapad23" value="12">263 - 292 zapad23</Option>

                    <Option key="sz1" value="13">293 - 307 sz1</Option>
                    <Option key="sz23" value="14">308 - 337 sz23</Option>

                    <Option key="sever1" value="155">338 - 352 sever1</Option>
                    <Option key="sever23" value="16">353 - 22 sever23 </Option>







                </Select>
            </Space>

            );
};

export default DirectionDropDown;
