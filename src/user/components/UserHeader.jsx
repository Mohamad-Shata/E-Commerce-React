import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/"
          className="flex flex-col items-left lg:items-center hover:text-blue-500 transition-colors"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/products"
          className="flex flex-col items-left lg:items-center hover:text-blue-500 transition-colors"
        >
          Shop
        </NavLink>
      </Typography>
    </ul>
  );
}

const UserHeader = () => {
  const [openNav, setOpenNav] = useState(false);
  const [mode, setMode] = useState("light");

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setMode("dark");
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setMode("light");
  }

  function changeMode() {
    if (mode == "light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <Navbar
        className="mx-auto max-w-screen-3xl px-6 py-4"
        fullWidth={true}
        shadow={false}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Material Tailwind
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="flex justify-between gap-4 items-center">
            <Badge content="5" className="font-bold">
              <Button>
                <MdOutlineShoppingCart className="text-base" />
              </Button>
            </Badge>
            <Button>
              <Link>Login</Link>
            </Button>
            <IconButton onClick={changeMode}>
              <IoMdMoon className="text-xl" />
            </IconButton>
            <IconButton
              variant="text"
              className="ml-auto text-white bg-gray-500 hover:bg-gray-300 active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default UserHeader;
