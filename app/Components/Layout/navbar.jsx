"use client";

import Link from "next/link";
import React from "react";
import { BsSearch, BsBellFill, BsPersonVideo3 } from "react-icons/bs";
import { MdLibraryAddCheck } from "react-icons/md";
import { Badge } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";

const onChange = (e) => {
  // console.log(`selected ${e.target.value}`);
};

export default function Navbar({ showHamBtn, setShowHamBtn }) {
  const handleHamClick = () => {
    setShowHamBtn(!showHamBtn);
  };

  return (
    <nav
      className={` flex items-center sticky lg:py-0  py-2 justify-between lg:justify-evenly bg-primary md:h-1/6 xs:h-11/12 lg:h-[120px]`}
    >
      {!showHamBtn ? (
        <GiHamburgerMenu
          className="ml-4 text-3xl text-active "
          onClick={handleHamClick}
        />
      ) : (
        ""
      )}
      <div className="flex items-center ml-auto rounded-full md:rounded-3xl md:ml-10 lg:px-10 px-4 justify-center md:w-[401px] lg:h-[58px] h-10 sm:bg-[#211A75]">
        <BsSearch className="text-xl text-white lg:text-3xl " />
        <input
          type="text"
          className="bg-[#211A75] font-4xl md:ml-4 ml-0 hidden md:flex text-white h-4/6 w-full"
          placeholder="Search here"
        />
      </div>
      <Link href={"/"} className="hidden text-active xl:flex">
        OTHER MENUS
      </Link>
      <div className="hidden gap-6 lg:flex">
        <Badge count={0} showZero>
          <BsBellFill className="text-2xl text-active" />
        </Badge>
        <Badge count={0} showZero>
          <BsPersonVideo3 className="text-2xl text-active" />
        </Badge>
        <Badge count={0} showZero>
          <MdLibraryAddCheck className="text-2xl text-active" />
        </Badge>
        <Badge count={0} showZero>
          <MdLibraryAddCheck className="text-2xl text-active" />
        </Badge>
      </div>

      <select
        name="pets"
        className="hidden w-24 p-2 text-white border-none bg-active rounded-2xl md:flex"
        onChange={onChange}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Arabic">Arabic</option>
      </select>

      <div className="flex flex-row-reverse items-center mr-2 lg:mr-0 lg:flex-row">
        <div className="flex lg:w-[57px] lg:ml-0 ml-2 w-10 h-10 mt-1 lg:mt-0 lg:h-[57px] mr-2 rounded-xl  bg-gray-300"></div>
        <div className="flex flex-col gap-2 ml-6 md:ml-0">
          <h4 className="text-xs text-white md:text-xs xl:text-base">
            {" "}
            Instructor Day
          </h4>

          <select
            name="pets"
            className="px-0 text-xs border-none md:w-24 md:p-2 h-min custom-select md:text-xs xl:text-base text-active bg-primary rounded-2xl"
            onChange={onChange}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
