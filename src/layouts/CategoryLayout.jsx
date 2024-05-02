// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { Outlet} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Success from '../components/alert/Success';
import { CategoryProvider } from '../context/CategoryProvider';

function CategoryLayout() {
  const { success,role,token } = useStateContext();
  const user_app_url = import.meta.env.VITE_USER_APP_URL;
  console.log(user_app_url)


  // useEffect(() => {
  //   if (!token || role !== "ADMIN") {
  //     window.location.href = `${user_app_url}login`;
  //   }
  // }, [token, role]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="px-16">
          <CategoryProvider>
            <Outlet />
          </CategoryProvider>
        </main>
        {success && <Success message={success} />}
      </div>
    </div>
  );
}

export default CategoryLayout