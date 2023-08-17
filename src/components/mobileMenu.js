import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from "styled-components"
import { TokenContext } from "../../contexts/tokenContext";

export default function MobileMenu(){

    const {image,setToken,setImage,setUserId} = useContext(TokenContext);
    console.log(image);
    const [clicked,setClicked] = useState(false);
    const router = useRouter();



    useEffect(() => {
        const localStorageToken = JSON.parse(localStorage.token);
        const localStorageImage = JSON.parse(localStorage.image);
        const localStorageUserId = JSON.parse(localStorage.userId);

        if (localStorageToken) {
            setToken(localStorageToken);
        }
        if(localStorageImage){
            setImage(localStorageImage);
        }
        if(localStorageUserId){
            setUserId(localStorageUserId);
        }
    }, []);

   
    function click(){
        setClicked(!clicked)
    }

    return(
        <MenuBory clicked={clicked}>
            <img src="assets/MobileMenu.svg" alt="menu" onClick={click}/>
            
            {image ? <img className="userImage" src={image} alt="onlineUser"/> :
            <img src="assets/userIconYellow.svg" alt="offlineUser"/>}
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
        height: 34px;
        border-radius: 34px;
        cursor: pointer;
        object-fit:cover;
        z-index:5;
    }
    .userImage{
        border: 3px solid yellow;
    }


    div{
        position: absolute;
        top: ${props => props.clicked ? '70px' : '-10px'};
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

    @media(min-width:600px){
        display: none;
    }

`