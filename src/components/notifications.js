import styled from "styled-components";
import { useContext } from "react";
import { TokenContext } from "../../contexts/tokenContext";
import Link from "next/link";

export default function Notifications(props){
    const {userId} = useContext(TokenContext);
    const {notifications} = props;
    console.log(notifications);
    return(
        <NotificationsBody>
            {notifications.map((n) => (
                <Link href={'/changeGamePage'}>
                    <Notification key={n.id}>

                        {n.exchange ?
                        n.exchange.desiredGame.owner.id == userId ?
                        <img src={n.exchange.offeredGame.owner.image}/> : 
                        <img src={n.exchange.desiredGame.owner.image}/> : <></>}
                        
                        {n.message.length > 20 ?
                        <p>{(n.message).substring(0,20) + '...'}</p> : 
                        <p>{n.message}</p>
                        }
                    </Notification>
                </Link>
            ))}
        </NotificationsBody>
    )
}

const NotificationsBody = styled.div`
    width: 372px;
    height: 70px;
    position:relative;
    top: 175px;
    right: 0;

    display:flex;
    flex-direction:column;
    align-items: center;

    a{
        text-decoration: none;
        color: none;
    }
    @media(max-width: 900px){
        display: none;
    }

`
const Notification = styled.div`
    width: auto;
    height: auto;
    padding: 6px 25px;
    border-radius: 8px;
    background: #D9D9D9;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 15px;
    cursor:pointer;
    transition: all linear .2s;

    img{
        width: 40px;
        height: 40px;
        border: 1px solid #fee204;
        border-radius: 40px;
        object-fit:cover;
    }

    p{
        font-size:18px;
        color: #3F3F3F;
    }
    span{
        font-size:20px;
        font-weight:700;
    }
    
    &:hover{
            color: #fee204;
            background: #655691;
        }
`