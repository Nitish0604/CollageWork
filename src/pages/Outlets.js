import React from 'react'

import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import right from "../assets/right.png"



//icons
import { RiDashboardFill } from "react-icons/ri";
import { GiJeweledChalice } from "react-icons/gi";
import { RiWallet3Fill } from "react-icons/ri";
import { MdOutlinePerson3 } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { HiChevronUpDown } from "react-icons/hi2";
import { GiPodiumWinner } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import Navbar from '../component/Navbar';
//import feedback from "../../assets/Vector.png";

const Outlets = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    toast.error("Successfully Logged Out");
    navigate("/landingpage");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const location = useLocation();
  return (
    <>
    <Navbar />
    
     <nav
        className={`fixed bg-white z-50  h-[calc(100vh-70px)] border-r shadow-xl shadow-[#00000026] ${
          isOpen ? "lg:w-[15%] duration-100" : "lg:w-[7%] duration-100"
        }`}
      >
        

        <div className="md:hidden lg:flex relative w-full flex flex-col justify-evenly items-center">
          <img
            onClick={handleToggle}
            className={`absolute top-2 size-14 cursor-pointer -right-7 ${
              isOpen ? " rotate-180" : " rotate-0"
            }`}
            src={right}
            alt=""
          />
          

          

          <div
            className={`flex w-full items-center flex-col justify-between    text-[#64748B] text-[1.1rem] ${
              isOpen ? "gap-8 top-[2rem] " : "gap-20 top-[2rem] "
            }`}
          >
            <div className="flex flex-col  gap-2 mt-[2rem] ">
            <div>
                <Link
                  onClick={handleScrollToTop}
                  className={`${
                    location.pathname === "/"
                      ? "text-[#004AAD] bg-slate-100  "
                      : "text-[#64748B]"
                  } flex gap-2 text-nowrap  items-center hover:text-[#004AAD] rounded-xl ${
                    isOpen ? "px-5 mx-3 py-2.5 " : " p-4 "
                  } `}
                  to="/"
                >
                  <RiDashboardFill />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[1.1rem]" : " hidden"}`}
                  >
                    Dashboard{" "}
                    <span className=" text-transparent ">_______</span>
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  onClick={handleScrollToTop}
                  className={`${
                    location.pathname === "/challenge"
                      ? "text-[#004AAD] bg-slate-100  "
                      : "text-[#64748B]"
                  } flex gap-2 text-nowrap items-center hover:text-[#004AAD] rounded-xl ${
                    isOpen ? "px-5 mx-3 py-2.5  " : " p-4 "
                  } `}
                  to="/challenge"
                >
                  <GiJeweledChalice />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Challenge{" "}
                    <span className=" text-transparent">...__________..</span>
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  onClick={handleScrollToTop}
                  className={`${
                    location.pathname === "/leaderboard"
                      ? "text-[#004AAD] bg-slate-100  "
                      : "text-[#64748B]"
                  } flex gap-2 text-nowrap items-center hover:text-[#004AAD] rounded-xl ${
                    isOpen ? "px-5 mx-3 py-2.5 " : " p-4 "
                  } `}
                  to="/leaderboard"
                >
                  <GiPodiumWinner />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Leaderboard <span className=" text-transparent ">______</span>
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  onClick={handleScrollToTop}
                  className={`${
                    location.pathname === "/wallet"
                      ? "text-[#004AAD] bg-slate-100  "
                      : "text-[#64748B]"
                  } flex gap-2 text-nowrap items-center hover:text-[#004AAD] rounded-xl ${
                    isOpen ? "px-5 mx-3 py-2.5  " : " p-4 "
                  } `}
                  to="/wallet"
                >
                  <RiWallet3Fill />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Wallet{" "}
                    <span className=" text-transparent ">_______</span>
                  </span>
                </Link>
              </div>
              
              <div>
                <Link
                  onClick={handleScrollToTop}
                  className={`${
                    location.pathname === "/setting"
                      ? "text-[#004AAD] bg-slate-100  "
                      : "text-[#64748B]"
                  } flex gap-2 text-nowrap  items-center hover:text-[#004AAD] rounded-xl ${
                    isOpen ? "px-5 mx-3 py-2.5  " : " p-4 "
                  } `}
                  to="/setting"
                >
                  <CiSettings />{" "}
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Setting <span className=" text-transparent ">_____</span>
                  </span>
                </Link>
              </div>
              <div className="block">
                <div
                  className={`flex items-center text-nowrap  gap-3 text-red-500 hover:cursor-pointer ${
                    isOpen ? "px-5 mx-3 py-2.5  " : " p-4 "
                  }`}
                  onClick={handleLogout}
                >
                  <IoLogOutOutline />{" "}
                  <span
                    className={` ${
                      isOpen ? "block text-[.9rem] text-red-500" : " hidden"
                    }`}
                  >
                    Log Out
                  </span>
                </div>
              </div>
            </div>
          
            
          </div>


        </div>
      </nav>
    <Outlet />
    </>
  )
}

export default Outlets