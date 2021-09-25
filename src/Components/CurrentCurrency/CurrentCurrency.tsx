import React from 'react'
import {Col, Row} from "antd";
import {useTypedSelector} from "../../utils/useTypedSelector";

const CurrentCurrency: React.FC = () => {

    const selectedCurrency = useTypedSelector(state => state.currency.selectedCurrency)

    return (
        <>
            {selectedCurrency.country &&
            <Row>
                <Col>
                    <Row>
                        <img src={`https://flagcdn.com/256x192/${selectedCurrency.country.toLowerCase()}.png`}/>
                    </Row>
                    <Row>
                        <strong>{selectedCurrency.symbol}</strong>
                    </Row>
                    <Row>
                        <span>Rate to Euro : {selectedCurrency.rate}</span>
                    </Row>
                </Col>
            </Row>
            }
        </>
    )
}

export default CurrentCurrency