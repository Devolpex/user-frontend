// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Success from '../components/alert/Success'
import { useStateContext } from '../context/ContextProvider'

function ClientLayout() {
  const {success} = useStateContext()

  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <Navbar  />
      <main className="px-16">
        <Outlet />
      </main>
      {
        success && <Success message={success} />
      }
    </div>
  </div>
  )
}

export default ClientLayout;