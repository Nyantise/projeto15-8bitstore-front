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


    return (
        <HomeStyle>
            <Header/>
            <div className="content">
                <CategoriesCarrousel />
                <div className="pop-game">

                </div>
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

        .pop-game{
            padding-inline: 18px;
            margin-top: 50px;
            
            h2{
                color: #36324f;
            }
        }
    }
`