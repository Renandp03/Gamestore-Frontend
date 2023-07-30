import styled from "styled-components"

export default function GamePerfil(props){
    const {name,image, platform} = props
    return(
        <>
            <Perfil platform={platform}>
                <div/>
                <img src={image} alt={name}/>
            </Perfil>
        </>
    )
}

const Perfil = styled.div`
    display: flex;
    position: relative;
    margin-top: 20px;
    div{
        z-index: 1;
        width: 5px;
        height: 400px; 
        background: ${
        props => console.log({platform:props.platform})};
        border-radius: 8px 0px 0px 8px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    img{
        width: 400px;
        height: 400px; 
        border-radius: 8px;
        object-fit:cover;
    }
`