import React from 'react'
import {Col, Row, Select} from "antd";
import {useTypedSelector} from "../../utils/useTypedSelector";
import {currencyActions, ICurrency} from "../../store/reducers/currency";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
const {Option} = Select

interface IProps {
    currencies: ICurrency[]
}

const CurrencyForm: React.FC<IProps> = ({currencies}) => {

    const dispatch = useDispatch<AppDispatch>()



    const onChangeHandler = (value: string) => {
        dispatch(currencyActions.setSelectedCurrency({country: value}))
    }

    return (
        <Row justify={'center'}>
            <Select
                showSearch
                style={{width: 200}}
                placeholder="Select a currency"
                optionFilterProp="children"
                onChange={onChangeHandler}
                filterOption={(input, option) => {
                    try {
                        return option?.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0
                    } catch (e) {
                        return false
                    }

                }}
            >
                {currencies.map(currency =>
                    <Option key={currency.country} value={currency.country}>
                        <img src={`https://flagcdn.com/16x12/${currency.country.toLowerCase()}.png`}/>
                        {currency.symbol}
                    </Option>)}
            </Select>
        </Row>
    )
}

export default CurrencyForm