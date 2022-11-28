import styled from "styled-components"
import { FaChessRook, FaGamepad } from "react-icons/fa"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { RiApps2Fill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

export default function PopCarrousel(){
    const navigate = useNavigate()

    return(
        <PopStyle>
            
        </PopStyle>
    )
}

const PopStyle = styled.div`
    display: flex;
    margin-top: 24px;
    width: 100vw;
    justify-content: space-evenly;

        .category{
            border-radius: 22px;
            width: 16vw;
            height: 16vw;
            background-color: blue;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
      
            .icon{
                color: white;
                width: 50%;
                height: 50%;
            }
            h3{
                position: absolute;
                bottom: -28px;
                left: 50%;
                transform: translateX(-50%);
                color: #36324f;
                font-weight: 400;
            }
        }
`