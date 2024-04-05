// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="bg-light flex flex-col h-screen">
      <div className="w-full h-20 relative bg-white shadow" />
      <div className="w-full flex-1 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
