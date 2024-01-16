import { useState } from "react";
import Dashboard from "@/Layouts/Dashboard";
import Keuangan from "@/Layouts/Keuangan";

const Homepage = (props) => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Dashboard" },
        { title: "Keuangan", src: "Exam" },
        { title: "Rekapitulasi", src: "Table" },
        { title: "Validasi", src: "Table" },
        { title: "Profile", src: "User1" },
    ];
    return (
        <div className="flex">
            <div
                className={`bg-dark-purple min-h-fit p-5 pt-8 relative duration-500 ${
                    open ? "w-56" : "w-20"
                }`}
                style={{
                    boxShadow:
                        "0px 0px 10px 0px rgb(0 0 0 / 0.1), 0 0px 4px 0px rgb(0 0 0 / 0.1)",
                }}
            >
                <img
                    src="./storage/images/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex flex-col gap-x-4 items-center sm:flex-row">
                    <img
                        src="./storage/images/react.svg"
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
                                props.halaman === Menu.title &&
                                "bg-gray-400 shadow-xl"
                            } `}
                        >
                            <img src={`./storage/images/${Menu.src}.png`} />
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-500`}
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
                        <span className="text-gray-400">Pages</span> /{" "}
                        {props.halaman}
                    </p>
                    <h5>
                        <b>{props.halaman}</b>
                    </h5>
                </div>
                {props.halaman === "Dashboard" ? <Dashboard /> : ""}
                {props.halaman === "Keuangan" ? <Keuangan /> : ""}
            </div>
        </div>
    );
};
export default Homepage;
