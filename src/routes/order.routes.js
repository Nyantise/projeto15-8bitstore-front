import styled from "styled-components"
import { OrderForm } from "../components/OrderForm"

export default function OrderPage(){
    return (
        <OrderStyle>
            <OrderForm />
        </OrderStyle>
    )
}

const OrderStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`