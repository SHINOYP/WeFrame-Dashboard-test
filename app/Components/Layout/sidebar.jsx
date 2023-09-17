"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//assets
import GridIcon from "../../assets/sidebar/GridIcon.svg";
import { TbDashboard } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { PiChatsCircleThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BsFillGridFill,
  BsFillCalendarFill,
  BsPersonVideo3,
  BsShopWindow,
} from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

export default function Sidebar({ showHamBtn, setShowHamBtn }) {
  const handleHamClick = () => {
    setShowHamBtn(!showHamBtn);
  };

  return (
    <nav
      className={` ${
        showHamBtn
          ? "2xl:relative absolute left-0 transition-all duration-300 opacity-100 scale-100"
          : "absolute -left-[23rem] transition-all duration-300 opacity-0 scale-90"
      } flex flex-col z-20   items-center   p-10  bg-primary 2xl:right-96 sm:max-w-[345px] w-4/5   h-screen`}
    >
      <div className="flex items-center gap-10 pl-10 mb-10 text-2xl text-white">
        <h1 className="text-white ">Weframetech </h1>
        <GiHamburgerMenu onClick={handleHamClick} className="text-active " />
      </div>
      <div className="flex flex-col w-5/6 gap-3 sm:gap-5 text-disable">
        <h1 className="font-bold text-white">MAIN MENU</h1>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <TbDashboard /> Dashboard
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <MdEmail />
          Email
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <PiChatsCircleThin />
          Chat
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <BsFillGridFill />
          Kanban
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <RiContactsBook2Fill />
          Contact
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <BsFillCalendarFill />
          Calender
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <BsPersonVideo3 /> Course
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <BsShopWindow />
          Shop
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg hover:text-active"
        >
          <GrNotes /> Invoice
        </Link>
        <Link
          href="/"
          className="flex items-center gap-6 font-medium text-md sm:text-lg"
        >
          <IoSettingsSharp /> Settings
        </Link>
      </div>
      <div className="max-w-[245px]  justify-evenly mt-auto flex flex-col p-4 rounded-3xl items-start h-[203px] bg-gradient-to-r text-white from-cyan-500 to-blue-500 ">
        <Image
          src={GridIcon}
          alt="Picture of the author"
          className="w-4 sm:w-6"
        />
        <p className="sm:text-lg text-md ">Increase your working kanban</p>
        <LiaLongArrowAltLeftSolid className="text-2xl sm:text-4xl" />
      </div>
    </nav>
  );
}
