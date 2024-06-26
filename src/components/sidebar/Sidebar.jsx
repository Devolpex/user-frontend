// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { BiUser } from "react-icons/bi";
// import { FiUsers } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiUsersFourFill } from "react-icons/pi";
import MenuLink from "../menu/MenuLink";
import { FaShopify } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";


// import { useStateContext } from "../../context/ContextProvider";

function Sidebar() {
  // const location = useLocation();
  // const { user, token, role } = useStateContext();
  // const roleInt = parseInt(role);

  // const isActive = (route) => {
  //   return location.pathname === route ? "bg-zinc-300 bg-opacity-50" : "";
  // };

  return (
    <aside className="w-60 bg-gray-800 px-4">
      <div className="h-20 flex items-center">
        <div className="text-white text-lg font-bold font-['Roboto'] leading-normal">
          E-Shop
        </div>
      </div>

      {/* {token && (
        <div>
          {role === "admin" && (
            <>
            <MenuLink route="/admins" label="Admins" icon={<BiUser color="white" />} top_vl="0" />
            <MenuLink route="/employees" label="Employees" icon={<PiUsersFourFill color="white" />} top_vl="40px" />
            <MenuLink route="/companies" label="Companies" icon={<GoOrganization color="white" />} top_vl="40px" />
            <MenuLink route="/departes" label="Departes" icon={<SiAwsorganizations color="white" />} top_vl="40px" />
            <MenuLink route="/jobs" label="Jobs" icon={<MdWork color="white" />} top_vl="40px" />
          </>

          )}
          {role === "candidate"  && (
            <MenuLink route="/resume" label="Resume" icon={<FiUsers color="white" />} top_vl="40px" />
          )}

        </div>
      )} */}
      <>
        <MenuLink
          route="/"
          label="Home"
          icon={<FaHome color="white" />}
          top_vl="0"
        />
        <MenuLink
          route="/admins"
          label="Admins"
          icon={<BiUser color="white" />}
          top_vl="40px"
        />
        <MenuLink
          route="/clients"
          label="Clients"
          icon={<PiUsersFourFill color="white" />}
          top_vl="40px"
        />
        <MenuLink
          route="/products"
          label="Products"
          icon={<FaShopify color="white" />}
          top_vl="40px"
        />
        <MenuLink
          route="/categories"
          label="Categories"
          icon={<BiSolidCategoryAlt color="white" />}
          top_vl="40px"
        />
      </>
    </aside>
  );
}

export default Sidebar;
