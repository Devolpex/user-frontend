// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useStateContext } from '../context/ContextProvider'
import { Navigate } from 'react-router-dom';

function UserLayout() {
    const {token} = useStateContext();
    if (token === null) {
        <Navigate to="/login" />;
    }
  return (
    <div>UserLayout</div>
  )
}

export default UserLayout