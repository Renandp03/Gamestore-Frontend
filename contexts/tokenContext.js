import { createContext, useState } from "react";

export const TokenContext = createContext({});

export const TokenProvider = ({children}) => {

    const [token, setToken] = useState('');
    const [image, setImage] = useState('');

    return <TokenContext.Provider value={{token,setToken,image,setImage}}>{children}</TokenContext.Provider>
}