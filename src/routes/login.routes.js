import styled from "styled-components"
import { LoginForm } from "../components/LoginForm"

export default function LoginPage(){
    return (
        <LoginStyle>
            <LoginForm />
        </LoginStyle>
    )
}

const LoginStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`