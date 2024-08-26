import React from 'react'

import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


//icons
import { RiDashboardFill } from "react-icons/ri";
import { FaConciergeBell } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlinePerson3 } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { HiChevronUpDown } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
//import feedback from "../../assets/Vector.png";

const Outlets = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    toast.error("Successfully Logged Out");
    navigate("/login");
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
     <div className="flex items-center justify-between px-[2rem] py-[1rem] bg-lime-400  gap-1 ">
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
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
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
                  <FaConciergeBell />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Menu{" "}
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
                  <MdOutlinePerson3 />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Customer <span className=" text-transparent ">______</span>
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
                  <HiOutlineSpeakerphone />
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Marketing{" "}
                    <span className=" text-transparent ">_______</span>
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  onClick={handleScrollToTop}
                  className={`${
                    location.pathname === "/feedback"
                      ? "text-[#004AAD] bg-slate-100  "
                      : "text-[#64748B]"
                  } flex gap-2 text-nowrap items-center hover:text-[#004AAD] rounded-xl ${
                    isOpen ? "px-5 mx-3 py-2.5  " : " p-4 "
                  } `}
                  to="/feedback"
                >
                  
                  
                  <span
                    onClick={handleToggle}
                    className={` ${isOpen ? "block text-[.9rem]" : " hidden"}`}
                  >
                    Feedback{" "}
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
              <div className="hidden lg:block">
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
    <Outlet />
    </>
  )
}

export default Outlets