import styled from 'styled-components'
import Link from 'next/link'
import SearchBar from './searchBar';
import { useContext } from 'react';
import { TokenContext } from '../../contexts/tokenContext';

export default function Header(){
    const { token,image } = useContext(TokenContext);
    return(
        <HeaderBordy>
            <div className='space'>
                <Link href={'/'}><Logoimg src='/assets/Title.svg' alt='logo'/></Link>
                <AuthMenu>
                    {token ? 
                    <>
                        <Link href='/signIn'>Login</Link>
                        <Link href='/signUp'><button>signUp</button></Link>
                    
                    </> 
                    : 
                    <>
                        <Link href='/signIn'>Login</Link>
                        <Link href='/signUp'><button>signUp</button></Link>
                    </>}
                    
                    {image ? <Link href={'/createGame'}><Userimg image={true} src={image} alt='userImg'/></Link> : 
                    <Userimg src='../../assets/userIconYellow.svg' alt='genericImage'/>}
                </AuthMenu>
            </div>
            
        </HeaderBordy>
    )
}

const HeaderBordy = styled.div`
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, #1B0166 0%, #08001F 100%);
    position: fixed;
    top:0px;
    z-index:5;

    display: flex;
    justify-content:center;
    align-items: center;

    *{
        transition: all easy .2s;
    }

    .space{
        display: flex;
        justify-content:space-between;
        width: 90%;
        min-width: 375px;
        max-width: 1000px
    }

    a{
        color: white;
        text-decoration:none;
        font-size: 16px;

        &:hover{
            color: #fee204;
        }
    }
`;

const Logoimg = styled.img`
    width: 200px;
`;

const AuthMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 200px;

    button{
        width: 75px;
        height: 35px;
        color #fee204;
        background: none;
        border-radius: 8px;
        border: 2px solid #fee204;
        font-size: 16px;
        transition: all linear .2s;
        cursor:pointer;

         &:hover{
            border: 2px solid #FFB800;
        }
    }
`
    


const Userimg = styled.img`
    width: 40px;
    height: 40px;
    border-radius:80px;
    object-fit:cover;
    border: ${props => props.image ? '3px solid #fee204' : 'none'};
`;
