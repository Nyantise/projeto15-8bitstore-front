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
            setGameList(a.data)
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
        })
    },[])

    function ReadList(){
        return gameList.map((item) => (
            <div className="game-wrapper"
            onClick={()=>navigate("/game/"+item._id)}
            >
                <h2>{item.title}</h2>
                <img src={item.img}/>
                <h3>{"R$"+Number(item.price).toFixed(2)}</h3>
            </div>
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
                <ReadList />
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
            font-size: 24px;
            color: white;
            position: absolute;
            top: 24px;
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
        overflow-y: scroll;

        .liltip{
            margin-top: 12px;
            width: 25%;
            height: 6px;
            border-radius: 50px;
            background-color: #656ded;
        }
        .game-wrapper{
            width: 100%;
            padding: 16px;
            position: relative;

            img{
                object-fit: cover;
                margin-inline: auto;
                width: 100%;
                height: 180px;
                border-radius: 12px;
            }
            h3{
                border-radius: 8px;
                padding-inline: 12px;
                padding-top: 4px;
                color: white;
                background-color: rgba(25,25,25,0.6);
                position: absolute;
                bottom: 30px;
                right: 24px;
            }
        }
    }
`