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
    div{
        z-index: 1;
        width: 5px;
        height: 300px; 
        background: ${
        props => props.platform ? (props.platform).includes('PlayStation') ? 'linear-gradient(134.59deg, #3565DF 15.4%, #0AB6ED 100%);' :
        (props.platform).includes('Xbox') ? 'linear-gradient(134.59deg, #25AE19 15.4%, #22EB2A 100%);' :
        (props.platform).includes('Nintendo') ? 'linear-gradient(134.59deg, #F32764 15.4%, #DA0000 100%);' :
        'linear-gradient(135deg, #F3BA27 0%, #FFE500 100%);' : console.log({platform:props.platform})
        };
        border-radius: 8px 0px 0px 8px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    img{
        width: 300px;
        height: 300px; 
        border-radius: 8px;
        object-fit:cover;
    }
`