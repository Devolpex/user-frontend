import React from 'react'
import { Outlet } from 'react-router'
import { Sidebar } from '../components/sidebar/Sidebar'
import { ComplexNavbar } from '../components/navbar/Navbar'

function UserLayout() {
  return (
    <div className="flex h-screen bg-gray-300 p-4">
    <Sidebar />
    <div className="w-full ml-5">
      <ComplexNavbar  />
      <main className="px-16">
        <Outlet />
      </main>
      {/* {notification &&
        <div className="notification">
          {notification}
        </div>
      } */}
    </div>
  </div>
  )
}

export default UserLayout