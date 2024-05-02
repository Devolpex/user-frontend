// eslint-disable-next-line no-unused-vars
import React from 'react'
import { HomeProvider } from '../context/HomeProvider'
import { Outlet } from 'react-router-dom'
import HomeNavbar from '../components/navbar/HomeNavbar'

function HomeLayout() {
  return (
    <div className="bg-light flex flex-col h-screen py-4">
      
      <HomeNavbar />
      <div className="w-full flex-1 flex justify-center items-center">
        <HomeProvider>
         <Outlet />
        </HomeProvider>
      </div>
    </div>
  )
}

export default HomeLayout