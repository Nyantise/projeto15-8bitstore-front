import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { apiURL, CartContext } from "../components/Globlal"
import { useLocation, useNavigate } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"
import axios from "axios"

export default function GamesPage(){
    const navigate = useNavigate()
    const [cart, setCart] = useContext(CartContext)
    const [gameList, setGameList] = useState([])

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const [search,] = queryParams.values()

    useEffect(()=>{
        const URL = apiURL+"products"+location.search

        const promise = axios.get(URL)
        
        promise.then((a)=>{
            console.log(a.data)
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
        })
    },[])

    function ReadList(){
        return gameList.map((item) => (
            <span>
                <h3>{item.desc}</h3>
                <h3 className={item.type}>{"R$"+item.value.toFixed(2)}</h3>
            </span>
        ))
    }

    return (
        <GamesStyle>
            <div className="header">
                <IoMdArrowRoundBack className="back" onClick={()=> navigate("/")}/>
                <h1>{search === "a" ? "Todos os Jogos" : search.toUpperCase()}</h1>
            </div>
            <div className="content">
                <div className="liltip"/>
            </div>
        </GamesStyle>
    )
}

const GamesStyle = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header{
        position: relative;
        width: 100%;
        padding-inline: 16px;

        .back{
            margin-top: 16px;
            color: white;
            width: 40px;
            height: 40px;
        }
        h1{
            color: white;
            position: absolute;
            top: 16px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
        background-color: white;
        height: 100%;
        width: 100vw;
        margin-top: 30px;

        .liltip{
            margin-top: 12px;
            width: 25%;
            height: 6px;
            border-radius: 50px;
            background-color: #656ded;
        }
        .emptytit{
            margin-top: 70%;
            text-align: center;
            color: gray;
            font-weight: 400;
        }
        .emptysub{
            text-align: center;
            color: gray;
            font-weight: 300;
        }
    }
`