import styled from 'styled-components'
import Link from 'next/link'
import SearchBar from './searchBar';
import { useState, useEffect } from 'react';
import { TokenContext } from '../../contexts/tokenContext';

export default function Header(){

    const [token, setToken] = useState('');
    const [image, setImage] = useState('');
    const [clicked,setClicked] = useState(false);

    useEffect(() => {
        const localStorageToken = JSON.parse(localStorage.token);
        const localStorageImage = JSON.parse(localStorage.image);

        if (localStorageToken) {
            setToken(localStorageToken);
        } else {
            console.log('Token não encontrado');
        };
        if(localStorageImage){
            setImage(localStorageImage);
        }else{console.log('imagem não encontrada')}
    }, []);

    function click(){
        setClicked(!clicked);
    }


    return(
        <HeaderBordy>
         
                <Link href={'/'}><Logoimg src='/assets/Title.svg' alt='logo'/></Link>
                <AuthMenu>
                    {token ? 
                    <>
                        <img onClick={click}  className='arrow' src='../../assets/arrowExpandMore.svg' alt='arrow'/>
                        <div clicked={String(clicked)}><p>Logout</p></div>
                    </> 
                    : 
                    <>
                        <Link href='/signIn'>Login</Link>
                        <Link href='/signUp'><button>signUp</button></Link>
                    </>}
                   
                    {image ? <Link href={'/createGame'}><Userimg image={true} src={image} alt='userImg'/></Link> : 
                     <Link href={'/'}><Userimg src='../../assets/userIconYellow.svg' alt='genericImage'/></Link>
                    }
                </AuthMenu>

            
        </HeaderBordy>
    )
}

const HeaderBordy = styled.div`
    width: 100%;
    height: 100px;
    background: #655691;

    padding: 0px 90px;
    box-sizing:border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0px;
    left:0px;
    z-index:5;

`

const Logoimg = styled.img`
    width: 80%;
    max-width: 350px;
    min-width: 100px;

`
const AuthMenu = styled.div`
    width: auto;
    height: auto;

    display: flex;
    justify-content:space-between;
    align-items:center;
    transition: all linear .1s;

    position: relative;

    *{
        margin: 0px 4px;
    }

    .arrow{
        width: 30px;
        transform: ${props => props.children[0].props.children[1].props.clicked == 'true' ? 'rotate(180deg)' : ''};
        transition: all linear .1s;
    }
    

    a{
        color: white;
         text-decoration:none;
         font-size: 16px;

         &:hover{
             color: #fee204;
         }
    }

    div{
        width: auto;
        min-width: 75px;
        height: 40px;
        border-radius: 0px 0px 8px 8px;

        position: absolute;
        top: ${props => ( props.children[0].props.children[1].props.clicked == 'true' ? '74px' : '34px')};
        left: 0px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => ( props.children[0].props.children[1].props.clicked == 'true' ? '#140A2F' : '#655691')};;
        z-index: -1;
        transition: all linear .1s;



        p{
            color: ${props => ( props.children[0].props.children[1].props.clicked == 'true' ? 'white' :'#655691')};
            font-size: 16px;
            z-index: 0;
            transition: all linear .1s;

        }
    }

`

const Userimg = styled.img`
    width: 40px;
    height: 40px;

    border-radius:80px;
    object-fit:cover;
    border: ${props => props.image ? '3px solid #fee204' : console.log(props)};
`;
