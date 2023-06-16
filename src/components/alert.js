import styled from "styled-components";
import { AlertContext } from "../../contexts/alertContext";
import { useContext } from "react";

export default function Alert(){
   const { alertDisable, setAlertDisable, message } = useContext(AlertContext);
    return(
        <DarkScreen disable={alertDisable}>
            <AlertCard disable={alertDisable}>
                <p>{message}</p>
                <button onClick={() => setAlertDisable(true)}>ok</button>
            </AlertCard>
        </DarkScreen>
    )
}

const DarkScreen = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    margin-top:-100px;
    background:   rgba(0, 0, 0, 0.52);
    position: fixed;

    display:${props => props.disable ? 'none' : 'flex'};
    align-items:center;
    justify-content:center;

`

const AlertCard = styled.div`
    width: 400px;
    height: 250px;
    border-radius: 8px;
    background: #140A2F;
    display:${props => props.disable ? 'none' : 'flex'};
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
    p{
        text-align: center;
        color: white;
        font-size:26px;
        margin: 25px;
    }

    button{
        width: 180px;
        height: 50px;
        background: linear-gradient(359.99deg, #F3BA27 0.01%, #FFE600 99.99%);
        border: none;
        border-radius: 3px;
        color: #774801;
        font-size: 20px;
        font-weight: 500;
        transition: all linear .2s;
    }
`