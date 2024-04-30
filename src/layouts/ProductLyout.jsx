import { Outlet } from 'react-router-dom';
import React from 'react'
import { useStateContext } from '../context/ContextProvider';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';  
import Navbar from '../components/navbar/Navbar';  
import Success from '../components/alert/Success';
import { ProductProvider } from '../context/ProductProvider';

function ProductLyout() {
    const { success,role,token } = useStateContext();

    if (!token || role !== "ADMIN") {
      return <Navigate to="/login" />;
    }
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="px-16">
            <ProductProvider>
              <Outlet />
            </ProductProvider>
          </main>
          {success && <Success message={success} />}
        </div>
      </div>
    );
}

export default ProductLyout