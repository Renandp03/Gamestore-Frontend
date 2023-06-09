import styled from "styled-components";
export default function Game(props){
    const { id, name, image, consoleId, userImg, userId } = props;

    return(
        <GameBody consoleId={consoleId}>
            <img src={image} alt={name}/>
            <div>
                <img src={userImg} alt={userId}/>
                {name.length > 8 ? 
                <p>{name.substring(0,8) + '...'}</p> : 
                <p>{name}</p>}
                <img className="like" src="assets/Heart.svg" alt="heart"/>
            </div>
        </GameBody>
    )
}

const GameBody = styled.div`
    width: 218px;
    height: 268px;
    border-radius: 8px;
    background: white;

    img{
        width: 218px;
        height: 218px;
        border-radius: 8px 8px 0px 0px;
        object-fit:cover;
    }

    div{
        width: 218px;
        height: 50px;
        border-radius: 0px 0px 8px 8px;
        position: relative;
        background: ${
        props => props.consoleId == 1 ? 'linear-gradient(134.59deg, #3565DF 15.4%, #0AB6ED 100%);' :
        props.consoleId == 2 ? 'linear-gradient(134.59deg, #25AE19 15.4%, #22EB2A 100%);' :
        props.consoleId == 3 ? 'linear-gradient(134.59deg, #F32764 15.4%, #DA0000 100%);' :
        'white;'
        };

        .like{
            position: absolute;
            left: 178px;
            color: white;
            border: none;
        }

        p{
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: #4F4F4F;
            position: absolute;
            top:11px;
            left:60px;
        }

        img{
            object-fit:cover;
            width: 30px;
            height: 30px;
            border: 1px solid #fee204;
            border-radius: 30px;
            position: absolute;
            top:10px;
            left:13px;
        }
    }
`