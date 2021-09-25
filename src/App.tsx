import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import './App.scss'
import {useDispatch} from "react-redux"
import {AppDispatch} from "./store"
import {requestCurrenciesAndPull} from "./store/reducers/currency"
import {Col, Row, Spin} from "antd"
import CurrencyForm from "./Components/CurrencyForm/CurrencyForm"
import CurrentCurrency from "./Components/CurrentCurrency/CurrentCurrency";
import {useTypedSelector} from "./utils/useTypedSelector";


const App: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const currencies = useTypedSelector((state => state.currency.currencies))

    useEffect(() => {
        dispatch(requestCurrenciesAndPull())
    }, [])

    return (
        <Row justify={'center'}>
            {currencies.length
                ?
                <Col>
                    <CurrencyForm currencies={currencies}/>
                    <CurrentCurrency/>
                </Col>
                :
                <Spin size={"large"}/>}
        </Row>
    )
}

export default App
