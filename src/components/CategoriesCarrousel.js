import styled from "styled-components"
import { FaChessRook, FaGamepad } from "react-icons/fa"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { RiApps2Fill } from "react-icons/ri"

export default function CategoriesCarrousel(){

    return(
        <CategoriesStyle>
            <div className="category">
                <FaGamepad className="icon"/>
                <h3>Arcade</h3>
            </div>
            <div className="category">
                <GiFullMotorcycleHelmet className="icon"/>
                <h3>Corrida</h3>
            </div>
            <div className="category">
                <FaChessRook className="icon"/>
                <h3>Estratégia</h3>
            </div>
            <div className="category">
                <RiApps2Fill className="icon"/>
                <h3>Mais</h3>
            </div>
        </CategoriesStyle>
    )
}

const CategoriesStyle = styled.div`
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
            }
        }

`