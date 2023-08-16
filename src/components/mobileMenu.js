import { useState } from "react"
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from "styled-components"

export default function MobileMenu(){

    const [clicked,setClicked] = useState(false);
    const router = useRouter();


    function click(){
        setClicked(!clicked)
    }

    return(
        <MenuBory clicked={clicked}>
            <img className="menu" src="assets/MobileMenu.svg" alt="menu" onClick={click}/>
            <img src="assets/userIconYellow.svg" alt=""/>
            <div>
                <Link href={'/signIn'}><button>login</button></Link>
                <Link href={'/signUp'}><button>signUp</button></Link>
            </div>
        </MenuBory>
    )
}

const MenuBory = styled.div`

    display: flex;
    position: relative;

    width: auto;
    height: auto;
    
    img{
        width: 34px;
        cursor: pointer;
        z-index:5;
    }

    div{
        position: absolute;
        top: ${props => props.clicked ? '67px' : '-10px'};
        left: 0px;
        transition: all linear .2s;

    }

    button{
        width: 100%;
        height: 34px;
        font-size: 16px;
        color: ${props => props.clicked ? 'white' : '#655691'};
        background: ${props => props.clicked ? '#140A2F' : '#655691'};
        border:none;
        transition: all linear .2s;
        z-index:1;

        &:hover{
            color: ${props => props.clicked ? '#FDDD08' : '#655691'};
            background: ${props => props.clicked ? '#15004F' : '#655691'};
        }

    }
    a{
        &:last-child{
            button{border-radius: 0px 0px 8px 8px;}
        }
    }

`