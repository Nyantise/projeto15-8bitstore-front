import { useContext, useState } from "react"
import styled from "styled-components"
import { apiURL, AuthContext, CartContext } from "../components/Globlal"
import { useNavigate } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"
import axios from "axios"

export default function CartPage(){
    const navigate = useNavigate()
    const [cart, setCart] = useContext(CartContext)
    const [user] = useContext(AuthContext)
    const [orderState, setOrderState] = useState(false)

    function ReadList(){
        return cart.map(item => (
            <div className="product"
            onClick={()=> navigate("/game/"+item.gameid)}
            >
                <div className="title">
                    <h3>{item.title}</h3>
                    <h3>{"R$"+Number(item.price).toFixed(2)+" x "+item.quantity}</h3>
                </div>
                <h2>{"R$"+Number(item.price*item.quantity).toFixed(2)}</h2>
            </div>
        ))
    }

    function totalValue(){
        let tValue = 0
        cart.map(item => tValue += item.price*item.quantity)
        return tValue
    }

    function order(){

        const newCart = cart.map(item => {return {productId: item.gameid, quantity: item.quantity}})

        const URL = apiURL+"cart/"+user.id
        const body = {
            products: newCart
        }
        const config = {
            headers: { "Authorization": "Bearer "+user.token }
        }

        const promise = axios.post(URL, body, config)
        
        promise.then((a)=>{
            console.log(a.data)
            setCart([])
            navigate("/order")
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
        })

        console.log(user)

    }


    return (
        <CartStyle>
            {orderState ? 
            <>
                <div className="shadow"/>
                <ShowUP>
                    {user === false 
                    ?<>
                        <h2>Voce precisa criar uma conta para continuar</h2>
                    </> 
                    
                    :<h2>Deseja finalizar a compra?</h2>}
                    {user === false 
                    ?<>
                    <button
                    onClick={()=> navigate("/sign-up")}
                    >Criar Conta</button>
                    </>
                    
                    :<span>
                        <button
                        onClick={()=> setOrderState(false)}
                        >Não</button>
                        <button
                        onClick={()=> order()}
                        >Sim</button>
                    </span>}
                </ShowUP>
            </>
            : <></>}
            <div className="header">
                <IoMdArrowRoundBack className="back" onClick={()=> navigate(-1)}/>
                <h1>Carrinho</h1>
            </div>
            <div className="content">
                <div className="liltip"/>
                {cart.length === 0 
                    ?<>
                        <h1 className="emptytit">Aqui tá meio vazio</h1>
                        <h3 className="emptysub">Que tal dar uma olhada em nossa loja?</h3>
                    </>
                    :<>
                        <ReadList />
                    </>
                }
            </div>
            <div className="bottombar">
                <h1>{"R$"+Number(totalValue()).toFixed(2)}</h1>
                <button
                onClick={()=>{setOrderState(true)}}
                >Finalizar Compra</button>
            </div>
        </CartStyle>
    )
}

const CartStyle = styled.div`
    position: relative;
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
            margin-bottom: 32px;
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
        .product{
            border-radius: 12px;
            background-color: rgba(25,25,25,0.08);
            margin-block: 8px;
            padding-inline: 16px;
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
    .shadow{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.6);
        z-index: 49;
    }
`

const ShowUP = styled.div`
    border-radius: 12px;
    background-color: white;
    width: 90%;
    height: 70vw;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;

    span{
        display: flex;
        gap: 16px;
    }
    button{
        font-size: 22px;
        padding-block: 6px;
        padding-inline: 12px;
    }
`