import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import {useDispatch} from "react-redux"
import {AppDispatch} from "./store"
import {requestCurrenciesAndPull} from "./store/reducers/currency"
import {Col, Row, Spin} from "antd"
import {useTypedSelector} from "./utils/useTypedSelector";
import CurrencyForm from "./Components/CurrencyForm/CurrencyForm";
import CurrentCurrency from "./Components/CurrentCurrency/CurrentCurrency";

const App: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const currencies = useTypedSelector((state => state.currency.currencies))

    useEffect(() => {
        dispatch(requestCurrenciesAndPull())
    }, [])

    return (
        <Row justify={'center'} style={{height: '100vh'}}>
            {currencies.length
                ?
                <Col style={{display: "flex", alignItems: "center"}}>
                    <CurrencyForm currencies={currencies}/>
                    <CurrentCurrency/>
                </Col>
                :
                <div style={{display: "flex", alignItems: 'center'}}>
                    <Spin size={"large"}/>
                </div>}
        </Row>
    )
}

export default App
