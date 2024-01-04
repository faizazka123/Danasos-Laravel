import { useState } from "react";
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import {
  BellAlertIcon
} from "@heroicons/react/24/outline";
// eslint-disable-next-line react/prop-types
export default function Navbar({ data }) {
  const { currentUser, userToken } = useStateContext();

  if (!userToken) {
    return <Navigate to='login' />
  }

  const [open, setOpen] = useState(true);
  const loc = useLocation();
  const { pathname } = loc;
  const hal = { pathname }
  const Menus = [
    { title: "Dashboard", src: "Dashboard", to: "/dashboard" },
    { title: "Keuangan", src: "Exam", to: "/keuangan" },
    { title: "Rekapitulasi", src: "Table", to: "/rekapitulasi" },
    { title: "Validasi", src: "Table", to: "/validasi" },
    { title: "Profile", src: "User1", to: "/profile" },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={`bg-dark-purple h-full p-5 pt-8 relative duration-500 ${open ? "w-56" : "w-20"
            }`}
          style={{
            boxShadow:
              "0px 0px 10px 0px rgb(0 0 0 / 0.1), 0 0px 4px 0px rgb(0 0 0 / 0.1)",
          }}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex flex-col gap-x-4 items-center sm:flex-row">
            <img
              src="./src/assets/react.svg"
              className={`cursor-pointer duration-500 ${open && "rotate-[90deg]"
                }`}
            />
            <h1
              className={`text-black-1000 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >
              DanaSos
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <NavLink
                key={index}
                to={Menu.to}
                className={({ isActive }) => `flex flex-col  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 sm:flex-row ${isActive ? 'bg-gray-300 shadow-xl' : ''}`}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-500`}
                >
                  {Menu.title}
                </span>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1">
          <div className="pt-5 ps-7">
            <div className="flex justify-between">
              <p>
                <span className="text-gray-400">Pages</span> {pathname}
              </p>
              <Popover placement="bottom">
                <PopoverHandler>
                  <div className="w-8 me-10 cursor-pointer">
                    <BellAlertIcon />
                  </div>
                </PopoverHandler>
                <PopoverContent>
                  <span className="text-red-600">Belum membayar uang kas bulan November!</span>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Outlet />

        </div>
      </div>
    </>
  );
}
