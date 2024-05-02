// eslint-disable-next-line no-unused-vars
import React from 'react'
import { HomeProvider } from '../context/HomeProvider'
import { Outlet } from 'react-router-dom'
import HomeNavbar from '../components/navbar/HomeNavbar'

function HomeLayout() {
  return (
    <div className="bg-light flex flex-col h-screen">
      <HomeNavbar />
      <div className="">
        <HomeProvider>
         <Outlet />
        </HomeProvider>
      </div>
    </div>
  )
}

export default HomeLayout