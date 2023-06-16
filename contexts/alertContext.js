import { createContext, useState } from "react";

export const AlertContext = createContext({});

export const AlertProvider = ({children}) => {

    const [alertDisable, setAlertDisable] = useState(true);
    const [message, setMessage] = useState('')

    return <AlertContext.Provider value={{alertDisable,setAlertDisable,message,setMessage}}>{children}</AlertContext.Provider>
}