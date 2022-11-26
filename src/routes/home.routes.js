import { useContext, useState } from "react"
import styled from "styled-components"
import { apiURL, AuthContext } from "../components/Globlal"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import CategoriesCarrousel from '../components/CategoriesCarrousel'

export default function HomePage(){
    const navigate = useNavigate()
    const [user, setUser] = useContext(AuthContext)
    const [list, setList] = useState(false)

    // useEffect(()=>{
    //     const URL = apiURL+"posts"
    //     const config = {
    //         headers: {'Authorization': 'Bearer ' + user.token}
    //     }

    //     const promise = axios.get(URL, config)
        
    //     promise.then((a)=>{
    //         setList(a.data)
    //     })
    //     promise.catch((a)=>{
    //         const msg = a.response;
    //         alert(msg)
    //         console.log(user.token)
    //     })
    // },[])

    // function ReadList(){
    //     return list.map((item) => (
    //         <span>
    //             <h3>{item.desc}</h3>
    //             <h3 className={item.type}>{"R$"+item.value.toFixed(2)}</h3>
    //         </span>
    //     ))
    // }

    return (
        <HomeStyle 
        state={1===2? "start" : "center"}
        >
            <Header/>
            <div className="content">
                <CategoriesCarrousel />
            </div>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .content{
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
        background-color: white;
        height: 100%;
        width: 100vw;
        margin-top: 30px;
    }
`