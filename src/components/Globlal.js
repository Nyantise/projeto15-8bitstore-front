import { ThreeDots } from "react-loader-spinner"
import { createContext, useState } from 'react';
import styled from "styled-components";

export const apiURL = "https://eightbit-api.onrender.com/"

export function httpQuerySelector(search, limit){
    if (limit === 0)
        return "?search="+search
    else
        return "?search="+search+"&limit="+limit
}

export const AuthContext = createContext([false, () => {}])
export const CartContext = createContext([[], () => {}])

export const GlobalProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[cart, setCart]}>
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
        </CartContext.Provider>
    )
}


export const Loading = (props) => {
    return <ThreeDots
        height={props.height === undefined ? 24 : props.height} 
        width={props.width === undefined ? 50 : props.height} 
        radius={props.radius === undefined ? 9 : props.height}
        color={props.color === undefined? "#ffffff" : props.color} 
        ariaLabel="three-dots-loading"
        visible={true}
    />
}

export const PageLoad = ()=>{
    return (
        <ThisLoad>
            <Loading />
        </ThisLoad>
    )
}
const ThisLoad = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E0E13;
`

// export function SaveUser(user){
//    if ( localStorage.length < 1 ){
//     localStorage.setItem('user', JSON.stringify(user))
//    } 
// }
