import { useState } from "react";
import Dashboard from "./Dashboard";
import Keuangan from "./Keuangan";
import Rekapitulasi from "./Rekapitulasi";
import Profile from "./Profile";
import Validasi from "./Validasi";

import "../assets/icons.css";
// eslint-disable-next-line react/prop-types
export default function Navbar({ halaman }) {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Dashboard" },
    { title: "Keuangan", src: "Exam" },
    { title: "Rekapitulasi", src: "Table" },
    { title: "Validasi", src: "Table" },
    { title: "Profile", src: "User1" },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-56" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-500`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex flex-col gap-x-4 items-center sm:flex-row">
            <img
              src="./src/assets/react.svg"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[90deg]"
              }`}
            />
            <h1
              className={`text-black-1000 origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              DanaSos
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex flex-col  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 sm:flex-row ${
                  halaman === Menu.title && "bg-gray-300 shadow-xl"
                } `}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-500`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1">
          <div className="pt-5 ps-7">
            <p>
              <span className="text-gray-400">Pages</span> / {halaman}
            </p>
            <h5>
              <b>{halaman}</b>
            </h5>
          </div>
          {/* row 1 */}
          {halaman === "Dashboard" ? <Dashboard /> : ""}
          {halaman === "Keuangan" ? <Keuangan /> : ""}
          {halaman === "Rekapitulasi" ? <Rekapitulasi /> : ""}
          {halaman === "Validasi" ? <Validasi /> : ""}
          {halaman === "Profile" ? <Profile /> : ""}
        </div>
      </div>
    </>
  );
}
