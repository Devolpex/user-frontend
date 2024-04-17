// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

const AdminContext = createContext({
    admin: null,
    _setAdmin: () => {},
    admins: [],
    _setAdmins: () => {},
})

// eslint-disable-next-line react/prop-types
export const AdminProvider = ({ children }) => {
    const [admin,setAdmin] = useState({
        lastname:"",
        firstname:"",
        email:"",
        phone:"",
        password:"",
        confirm_password:""
    })
    const _setAdmin = (data) =>{
        setAdmin(data)
    }

    const [admins,setAdmins] = useState([]);

    const _setAdmins = (datas) =>{
        setAdmins(datas)
    }
    

    return (
        <AdminContext.Provider value={{
            _setAdmin,
            _setAdmins,
            admin,
            admins
        }}>
            {children}
        </AdminContext.Provider>
    );
};