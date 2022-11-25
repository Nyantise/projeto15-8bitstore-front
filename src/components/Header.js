import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "./Globlal"
import logout from "../assets/logout.svg"
import { BiSearchAlt } from "react-icons/bi";

export default function Header(){
    const [user, setUser] = useContext(AuthContext)
    
    return(
        <HeaderStyle>
            <div className="header">
                <div className="greet">
                    <h1>Bem vindo,{user.name}</h1>
                    <h2>O que você gostaria de jogar?</h2>
                </div>
                <img src={logout} alt=""
                    onClick={()=> setUser(false)}
                />
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Nome do jogo ou categoria"
                    // value={email}
                    // onChange={e=> setEmail(e.target.value)}
                    // required
                    // disabled={load === true ? "disabled" : ""}
                />
                <BiSearchAlt className="search"/>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.header{
        width: 85vw;
        display: flex;
        justify-content: space-between;
        padding-block: 24px;
        margin-top: 8px;

        .greet{
            display: flex;
            flex-direction: column;
            color: white;
        } 
        h2{
            line-height: 20px;
            font-weight: 400;
        }
        h1{
            margin-bottom: 0;
        }
    }
    .input-container{
        width: 85%;
        display: flex;
        justify-content: center;
        position: relative;

        input{
            width: 100%;
            border-radius: 20px;
            padding-bottom: 12px;
            padding-top: 14px;
            padding-inline: 10px;
            border: none;
            margin-bottom: 7px;
            font-weight: 400;
            font-size: 16px;
            text-indent: 40px;
        }::placeholder{
        
        }
        .search{
            position: absolute;
            top: 50%;
            transform: translateY(-55%);
            left: 12px;
            height: 32px;
            width: 32px;
            color: #6F76EE;
        }
    }
`