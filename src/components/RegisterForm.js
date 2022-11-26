
import { useState } from "react"
import { FormStyle } from "./LoginForm";
import { apiURL, Loading } from "./Globlal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function RegisterForm(){
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")
    const [load, setLoad] = useState(false)

    function submit(e){
        e.preventDefault()
        setLoad(true)
        const URL = apiURL+"sign-up"
        const body = {
            name,
            email,
            password: pass
        }
        const promise = axios.post(URL, body)
        
        promise.then((a)=>{
            navigate("/sign-in")
            setLoad(false)
        })
        promise.catch((a)=>{
            const msg = a.response.data.message
            alert(msg)
            setLoad(false)
        })
    }



    return(
        <FormStyle onSubmit={submit}>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e=> setName(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
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
            <input
                type="password"
                placeholder="Confirmar senha"
                value={pass2}
                onChange={e=> setPass2(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <button 
                type="submit"
                disabled={pass !== pass2 ? "disabled" : "" || load === true ? "disabled" : ""}
            >{load === false ? "Cadastrar" : <Loading/>}</button>
            
            <button
                className="register"
                disabled={load === true ? "disabled" : ""}
                onClick={()=> navigate("/signin")}
            >Já tem uma conta? Entre agora!
            </button>
        </FormStyle>
    )
}