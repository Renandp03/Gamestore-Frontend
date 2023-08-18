import { useContext, useState, useEffect } from "react"
import Link from 'next/link'
import styled from "styled-components"
import { TokenContext } from "../../contexts/tokenContext";
import { useRouter } from "next/router";

export default function Menu(){

    const {token,image,setToken,setImage,setUserId,setFavorites} = useContext(TokenContext);
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

    function logout(){
		localStorage.setItem("token", JSON.stringify(''));
        localStorage.setItem("image", JSON.stringify(''));
        localStorage.setItem("userId", JSON.stringify('0'));
        setToken('');
        setImage('');
        setUserId(0);
        setFavorites([])
        router.push('/');
        setTimeout(() => location.reload(), 1000)
    }

    return(
        <MenuBory clicked={clicked}>
            {token ? 
            <>
                <img className="arrow" src="../../assets/arrowExpandMore.svg" alt="menu" onClick={click}/>
            </> : 
            <>
                <Link className='signIn' href='/signIn'>Login</Link>
                <Link href='/signUp'><button className='signUp'>signUp</button></Link>
                <img className='menuIcon' src="../../assets/MobileMenu.svg" alt="menu" onClick={click}/>
            </>}
            
            {image ? <img className="userImage" src={image} alt="onlineUser"/> :
            <img src="assets/userIconYellow.svg" alt="offlineUser"/>}
            <div>
                { token ? 
                <>
                <button onClick={logout} className='logout'>logout</button>
                </> :
                <>
                <Link className="offlineButton" href={'/signIn'}><button>login</button></Link>
                <Link className="offlineButton" href={'/signUp'}><button>signUp</button></Link>
                </>}
            </div>
        </MenuBory>
    )
}

const MenuBory = styled.div`

    display: flex;
    align-items: center;
    position: relative;

    width: auto;
    height: 34px;
    gap: 6px;
    
    img{
        width: 34px;
        height: 34px;
        border-radius: 34px;
        cursor: pointer;
        object-fit:cover;
        z-index:2;
    }
    .arrow{
        transform: ${props => props.clicked ? 'rotate(180deg)' : ''};
        transition: all linear .1s;
    }

    .userImage{
        width: 40px;
        height: 40px;
        border: 3px solid #fee204;
    }

    a{
        color: white;
         text-decoration:none;
         font-size: 16px;

         &:hover{
             color: #fee204;
         }
    }

    .signUp{
        width: 75px;
        height: 35px;
        color: white;
        background: none;
        border-radius: 8px;
        border: 2px solid #fee204;
        font-size: 16px;
        transition: all linear .2s;
        cursor:pointer;

         &:hover{
            color: #fee204;
            border: 2px solid #FFB800;
            background: #655691;
        }
    }

    div{
        min-width: 75px;
        position: absolute;
        top: ${props => props.clicked ? '67px' : '-10px'};
        left: 0px;
        gap: 6px;
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
        z-index:0;

        &:hover{
            color: ${props => props.clicked ? '#FDDD08' : '#655691'};
            background: ${props => props.clicked ? '#15004F' : '#655691'};
        }

    }

    .logout{
        border-radius: 0px 0px 8px 8px;
    }

    a{
        &:last-child{
            button{border-radius: 0px 0px 8px 8px;}
        }
    }

    @media(max-width:600px){
        .signUp, .signIn{
            display: none;
        }
    }
    @media(min-width:600px){
        .menuIcon, .offlineButton{
            display: none;
        }
    }

`
