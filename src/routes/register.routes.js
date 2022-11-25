import styled from "styled-components"
import { RegisterForm } from "../components/RegisterForm"

export default function RegisterPage(){
    return (
        <HomeStyle>
            <RegisterForm />
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`