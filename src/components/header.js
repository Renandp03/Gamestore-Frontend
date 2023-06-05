import styled from 'styled-components'
import Link from 'next/link'
import SearchBar from './searchBar';
import { useContext } from 'react';
import { TokenContext } from '../../contexts/tokenContext';

export default function Header(){
    const { image } = useContext(TokenContext);
    return(
        <HeaderBordy>
            <div>
                <Link href='/'><Logoimg src='/assets/Title.svg' alt='logo'/></Link>
                <Link href='/signUp'><Userimg src={image} alt='userImg'/></Link>
            </div>
        </HeaderBordy>
    )
}

// function Userimg(){
//     return(
//         <></>
//     )
// }

const HeaderBordy = styled.div`
    width: 100%;
    height: 100px;
    background-color: #140A2F;
    position: fixed;
    top:0px;

    display: flex;
    justify-content:center;
    align-items: center;

    div{
        display: flex;
        justify-content:space-between;
        min-width:600px;
        width: 100%;
        max-width:1000px
    }

    a{
        color: white;
        text-decoration:none;
    }
`;

const Logoimg = styled.img`
    width: 200px;
`;

const Userimg = styled.img`
    width: 40px;
    height: 40px;
    border-radius:80px;
    border: 3px solid #fee204;
    object-fit:cover;
`;