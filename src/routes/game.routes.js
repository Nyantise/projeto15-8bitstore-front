import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { apiURL, CartContext } from "../components/Globlal"
import { useNavigate, useParams } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"
import axios from "axios"

export default function GamesPage(){
    const navigate = useNavigate()
    const [gameInfo, setGameInfo] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const URL = apiURL+"products/"+id

        const promise = axios.get(URL)
        
        promise.then((a)=>{
            setGameInfo(a.data[0])
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
        })
    },[])

    return (
        <GamesStyle>
            <div className="shadow"/>
            <img className="cover" src={gameInfo.img} />
            <div className="header">
                <IoMdArrowRoundBack className="back" onClick={()=> navigate(-1)}/>
            </div>
            <div className="content">
                <div className="liltip"/>
            </div>
        </GamesStyle>
    )
}

const GamesStyle = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .shadow{
        top: 0;
        position: absolute;
        height: 35%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
    }
    .cover{
        top: 0;
        position: absolute;
        height: 35%;
        width: 100%;
        object-fit: cover;
    }

    .header{
        position: relative;
        width: 100%;
        padding-inline: 16px;
        z-index: 20;

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
        height: 70%;
        width: 100vw;
        margin-top: 30px;
        overflow-y: scroll;
        z-index: 10;

        .liltip{
            margin-top: 12px;
            width: 25%;
            height: 6px;
            border-radius: 50px;
            background-color: #656ded;
        }
    }
`