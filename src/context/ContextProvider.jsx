// eslint-disable-next-line no-unused-vars
import React, { useContext, useState,createContext } from 'react'

// create Context
const StateContext = createContext({
    user: null,
    token: null,
    role: null,
    notification: null,
    userId: null,
    _setToken: () => { },
    setUser: () => { },
    _setRole: ()=>{},
    setNotification: () => {},
    _setUserId:() =>{},
    success: null,
    _setSuccess: () => {}

})

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('JWT_TOKEN'));
    const [role, setRole] = useState(localStorage.getItem('ACCESS_ROLE'));
    const [userId, setUserId] = useState(localStorage.getItem('USER_ID'));
    const [notification, _setNotification] = useState('');
    const [success,setSuccess] = useState("");


    const _setToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem('JWT_TOKEN',token);
        } else {
            localStorage.removeItem('JWT_TOKEN');
        }
    }
    const _setRole = (role) => {
        setRole(role);
        // console.log('Context SetRole',role)
        if (role) {
            localStorage.setItem('ACCESS_ROLE', role);
        } else {
            localStorage.removeItem('ACCESS_ROLE');
        }
    }

    const _setUserId = (userId) => {
        setUserId(userId);
        if (userId) {
            localStorage.setItem('USER_ID', userId);
        } else {
            localStorage.removeItem('USER_ID');
        }
    }

    const setNotification = message => {
        _setNotification(message);
    
        setTimeout(() => {
          _setNotification('')
        }, 5000)
      }

    const _setSuccess = message => {
      setSuccess(message);

      setTimeout(() => {
        setSuccess('')
      }, 5000)
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            role,
            userId,
            _setToken,
            setUser,
            _setRole,
            notification,
            setNotification,
            _setUserId,
            success,
            _setSuccess
            
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);