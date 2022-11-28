import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { apiURL, AuthContext, CartContext, MyCart } from "../components/Globlal"
import { useNavigate, useParams } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"
import axios from "axios"

export default function GamesPage(){
    const navigate = useNavigate()
    const [gameInfo, setGameInfo] = useState([])
    const [categoriesString, setCategoriesString] = useState("")
    const {id} = useParams()
    const [user] = useContext(AuthContext)
    const [cart, setCart] = useContext(CartContext)
    const [showCart, setShowCart] = useState(0)

    function cutterText(array){
        let string =''
        for (let i = 0; i < array.length; i++) {
            if(i!==0){
                string = string+", "+array[i]
            }
            else{
                string = string + array[i]
            }
        }
        return string
    }

    function addToCart(gameid, title, price, img){
        let cartArr = cart
        const body = {
            gameid,
            title,
            price,
            img
        }
        cartArr.push(body)
        setCart(cartArr)
        setShowCart(cartArr.length)
    }

    useEffect(()=>{
        setShowCart(cart.length)
        const URL = apiURL+"products/"+id

        const promise = axios.get(URL)
        
        promise.then((a)=>{
            setGameInfo(a.data[0])
            setCategoriesString(cutterText(a.data[0].categories))
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
                <MyCart className="cart" count={showCart.length}/>
            </div>
            <div className="content">
                <div className="liltip"/>
                <h1>{gameInfo.title}</h1>
                <h2>Categoria: {categoriesString}</h2>
                <h3>{gameInfo.desc}</h3>
            </div>
            <div className="bottombar">
                <h1>{"R$"+Number(gameInfo.price).toFixed(2)}</h1>
                <button
                onClick={()=> addToCart(id, gameInfo.title, gameInfo.price, gameInfo.img)}
                >Adicionar ao carrinho</button>
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
        display: flex;
        justify-content: space-between;
        
        .cart{
            margin: 16px;
        }
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
        h1{
            padding-inline: 32px;
            line-height: 28px;
            text-align: center;
            margin-top: 32px;
            margin-bottom: 12px;
        }
        h2{
            margin-top: 16px;
            width: 100%;
            padding-inline: 38px;
        }
        h3{
            padding-inline: 38px;
            margin-top: 16px;
        }
    }


    .bottombar{
        padding-inline: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 80px;
        z-index: 11;
        position: absolute;
        bottom: 0;
        background-color: white;

        button{
            border-radius: 12px;
            color: white;
            font-size: 19px;
            padding-inline: 16px;
            padding-block: 10px;
            border: none;
            background-color: #656ded;
        }
    }

`