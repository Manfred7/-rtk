import React from 'react';
import {Select, Space} from "antd";
import { chousePeriod} from "../../slices/reduxStore";
import {useDispatch} from "react-redux";

const {Option} = Select;

const PeriodDropDown = () => {
    const dispatch = useDispatch();

    const handleChangePeriod = (newPeriod) => {
        dispatch(chousePeriod(newPeriod));
    }

    return (

        <Space direction="vertical" size={12}>
            {/*<DatePicker onChange={onChange} picker="year"/>*/}
            <label>Период постройки</label>
            <Select
                showSearch
                style={{width: 300}}
                placeholder="Период постройки дома"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }

                onChange={(value, option) =>  handleChangePeriod(option.key)  }

                defaultValue="6"
            >
                <Option key="6" value="6">1964 - 1984(4 февраля) 6 период</Option>
                <Option key="7" value="7">1984 - 2004(4 февраля) 7 период</Option>
                <Option key="8" value="8">2004 - 2024(4 февраля) 8 период</Option>


            </Select>
        </Space>

    );
};

export default PeriodDropDown;
