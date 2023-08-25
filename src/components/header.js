import styled from 'styled-components'
import Link from 'next/link'
import Menu from './menu';


export default function Header(){

    return(
        <HeaderBordy>
         
                <Link href={'/'}><Logoimg src='/assets/Title.svg' alt='logo'/></Link>
                <Menu/>

            
        </HeaderBordy>
    )
}

const HeaderBordy = styled.div`
    width: 100%;
    height: 100px;
    background: #655691;

    padding: 0px 10%;
    box-sizing:border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0px;
    left:0px;
    z-index:2;

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
        cursor: pointer;
    }
    

    a{
        color: white;
         text-decoration:none;
         font-size: 16px;

         &:hover{
             color: #fee204;
         }
    }

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

    div{
        width: auto;
        min-width: 75px;
        height: 40px;
        border-radius: 0px 0px 8px 8px;

        position: absolute;
        top: ${props => ( props.children[0].props.children[1].props.clicked == 'true' ? '74px' : '24px')};
        left: 0px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => ( props.children[0].props.children[1].props.clicked == 'true' ? '#140A2F' : '#655691')};;
        z-index: -1;
        transition: all linear .1s;
        cursor: pointer;



        p{
            color: ${props => ( props.children[0].props.children[1].props.clicked == 'true' ? 'white' :'#655691')};
            font-size: 16px;
            z-index: 0;
            transition: all linear .1s;

        }
    }

    @media(max-width:600px){
        display: none;
    }

`
const Userimg = styled.img`
    width: 40px;
    height: 40px;

    border-radius:80px;
    object-fit:cover;
    border: ${props => props.image ? '3px solid #fee204' : 'none'};
`;
