import styled from 'styled-components'
import Link from 'next/link'
import searchBar from './searchBar';

export default function Header(){
    return(
        <HeaderBordy>
            <Link href='/'><Logoimg src='/assets/Title.svg' alt='logo'/></Link>
            <searchBar/>
            <Link href='/signUp'>SIGNUP</Link>
        </HeaderBordy>
    )
}

const HeaderBordy = styled.div`
    width: 100%;
    height: 100px;
    background-color: #140A2F;
    padding: 0px 50px;

    display: flex;
    align-items: center;

    a{
        color: white;
        text-decoration:none;
    }
`;

const Logoimg = styled.img`
    width: 300px;
`;