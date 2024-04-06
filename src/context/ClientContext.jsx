import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    client: {},
    _setClient: () => { },
    _restClient: () => { }

});

export default function ClientContext({ children }) {
    /**
     * This state is shared between all the components that are wrapped by the ClientContext (ClientLayout.jsx)
     * This state is used to store the client data that is being edited or created.
     * This state is used for not lose data if your exist the form without saving.
     * Note: 
     *      the password is not saving in this state, because it is a security issue.
     *      the id is just optional, because if the id is null, the form will create a new client, 
     *      if the id is not null (the api get the id from the url /clients/edit/5), the form will update the client.
     */
    const [client, setClient] = useState({
        id: null,
        last_name: "",
        first_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [clients, setClients] = useState([]);

    /**
     * 
     * @param {*} data
     * This function is used to set the client data in the state.
     * This function like the global setState function.
     * By this state you can change the clients informations from any component that is wrapped by the ClientContext.
     * Note: always the global state functions start by "_" fro deference from the local state functions and the global state functions. 
     */
    const _setClient = (data) => {
        setClient(data);
    }
    /**
     * This function is used to reset the client state after the api sent succeed response.
     */
    const _restClient = () => {
        setClient({
            id: null,
            last_name: "",
            first_name: "",
            phone: "",
            email: "",
            password: "",
            confirm_password: "",
        });
    }
    return (
        <StateContext.Provider value={{
            client,
            _setClient,
            _restClient

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useClientContext = () => useContext(StateContext);
