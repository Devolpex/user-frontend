import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { NavList } from "../list/NavList";
import { ProfileMenu } from "../menu/ProfileMenu";

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-end text-blue-gray-900">
        <div className="grid items-center justify-center">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer  font-medium"
          >
            Marouane Dbibih
          </Typography>
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer  font-medium "
          >
            marouane.dbibih@outlook.com
          </Typography>
        </div>

        <ProfileMenu />
      </div>
    </Navbar>
  );
}
