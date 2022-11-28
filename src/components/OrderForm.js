
import { useContext, useState } from "react"
import styled from "styled-components"
import { apiURL, AuthContext, Loading} from "./Globlal";
import axios from "axios";
import HomePage from "../routes/home.routes";
import { useNavigate } from "react-router-dom";

export function OrderForm(){
    const navigate = useNavigate()
    const [adress, setAdress] = useState("")
    const [method, setMethod] = useState("")
    const [user, setUser] = useContext(AuthContext)

    function submit(e){
        e.preventDefault()
        const URL = apiURL+"order"

        const body = {
            adress,
            method
        }
        const config = {
            headers: { "Authorization": "Bearer "+user.token }
        }
        const promise = axios.post(URL, body, config)
        
        promise.then((a)=>{
            navigate("/")
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
        })
    }

    return(
        <FormStyle onSubmit={submit}>
            <input
                type="text"
                placeholder="Endereço"
                value={adress}
                onChange={e=> setAdress(e.target.value)}
                required
            />
            <label>Metodo de Pagamento</label>
            <span>
                <input type="radio" checked={method === 'Cartão de Crédito/Débito'} value="Cartão de Crédito/Débito" onClick={() => setMethod('Cartão de Crédito/Débito')} />
                <label>Cartão de Crédito/Débito</label>
            </span>
            <span>
                <input type="radio" label="PIX" checked={method === 'PIX'} value="PIX" onClick={() => setMethod('PIX')} />
                <label>Pix</label>
            </span>
            <span>
                <input type="radio" label="Boleto" checked={method === 'Boleto'} value="Boleto" onClick={() => setMethod('Boleto')} />
                <label>Boleto</label>
            </span>
            <button 
                type="submit"
                disabled={method ==="" ? "disabled" : ""}
            >Enviar</button>
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