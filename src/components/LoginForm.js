
import { useContext, useState } from "react"
import styled from "styled-components"
import { apiURL, AuthContext, Loading} from "./Globlal";
import axios from "axios";
import HomePage from "../routes/home.routes";
import { useNavigate } from "react-router-dom";

export function LoginForm(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [load, setLoad] = useState(false)
    const [user, setUser] = useContext(AuthContext)

    function submit(e){
        e.preventDefault()
        setLoad(true)
        const URL = apiURL+"sign-in"

        const body = {
            email,
            password: pass
        }
        const promise = axios.post(URL, body)
        
        promise.then((a)=>{
            setUser(a.data)
            setLoad(false)
            navigate("/")
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
            setLoad(false)
        })
    }

    return(
        <FormStyle onSubmit={submit}>
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="password"
                placeholder="Senha"
                value={pass}
                onChange={e=> setPass(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <button 
                type="submit"
                disabled={load === true ? "disabled" : ""}
            >{load === false ? "Entrar" : <Loading/>}</button>

            <button
                className="register"
                disabled={load === true ? "disabled" : ""}
                onClick={()=> navigate("/sign-up")}
            >Primeira vez? Cadastre-se!
            </button>
        </FormStyle>
    )
}

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
   
    input{
            border-radius: 8px;
            padding: 16px;
            border: none;
            margin-bottom: 7px;
            font-weight: 700;
        }
        
        div{
            display: flex;
            gap: 7px;
            input{
                width: 100%;
            }
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            padding: 14px;
            border: none;
            margin-top: 14px;
            color: white;
            background-color: #FC78A7;
            font-weight: 700;
            font-size: 18px;
        }
        .register{
            background-color: transparent;
            font-size: 16px;
            font-weight: 700;
        }
`