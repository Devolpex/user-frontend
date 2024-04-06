import { createContext, useContext, useState } from "react";

const StateContext = createContext(
    {
        client: {},
        _setClient: () => { },
    }
);

export default function ClientFormContext({children}){
    const [client,setClient] = useState({});

    const _setClient = (clientData) => {
        setClient(clientData);
    }

    return (
        <StateContext.Provider value={{
            client,
            _setClient,
        }}>
        {children}
        </StateContext.Provider>
    )
}

export const useClientFormContext = () => useContext(StateContext);