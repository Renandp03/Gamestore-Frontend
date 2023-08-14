import styled from "styled-components"

export default function MobileMenu(){
    return(
        <MenuBory>
            <img src="assets/userIconYellow.svg" alt=""/>
            <img src="assets/arrows.svg" alt=""/>
        </MenuBory>
    )
}

const MenuBory = styled.div`

    display: flex;
    
        img{
            width: 34px;
        }

`