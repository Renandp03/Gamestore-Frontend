import { useContext } from "react";
import { TokenContext } from "../../contexts/tokenContext";

function Requests(){
    
}
const URL = process.env.NEXT_PUBLIC_HOST

export async function GetUserFavorites(){
    const { token } = useContext(TokenContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };


    axios.get(`${URL}/favorites/get/${res.data.userId}`,config)
    .then((res) => {
        setFavorites(res.data);
    })
    .catch((err) => {
        if(err.response.data.name == 'notFound'){
            console.log('Nenhum favorites encontrado');
            router.push('/');
        }
    })
};
