import React from "react";
import Image from "next/image";
import People from "../assets/people.svg";
import { Progress } from "antd";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";
import { BsFillChatLeftDotsFill, BsThreeDotsVertical } from "react-icons/bs";

export default function Statusbar() {
  return (
    <div className="bg-primary md:p-6 p-2 relative text-white rounded-lg  h-fit lg:h-[206px] flex flex-wrap-reverse w-full  max-w-5/6">
      <div className="absolute flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full md:w-10 md:h-10 top-2 right-2 lg:relative lg:mb-28">
        {" "}
        <AiOutlineArrowLeft className="text-black" />
      </div>
      <div className="flex flex-col justify-between py-2 ml-4">
        <h1 className="mt-2 text-3xl font-semibold leading-10">
          School November Tasks
        </h1>
        <small className="text-gray-400">
          Created by Instructor Day on November 31,2022
        </small>
        <div className="flex gap-2 mt-4 lg:mt-0 md:gap-4">
          <Image
            src={People}
            width={100}
            height={100}
            alt="Picture of the author"
            className="hidden lg:flex"
          />{" "}
          <button className="md:px-4 px-2 w-fit flex items-center gap-1 font-semibold lg:h-[42px] text-xs bg-[#6418C3] md:text-xs xl:text-base  rounded-md md:rounded-xl ">
            <MdPersonAdd /> Invite People
          </button>
          <button className="lg:w-[89px] md:p-2 px-4 lg:h-[42px]  text-xs md:text-xs xl:text-base  rounded-xl border">
            Private
          </button>
          <button className="lg:w-[89px] font-semibold md:p-2 px-4 lg:h-[42px] text-xs md:text-xs xl:text-base rounded-xl bg-blue-500">
            Edit
          </button>
          <button className="px-4 lg:h-[42px] w-fit r gap-1 items-center hidden md:flex  text-xs md:text-xs xl:text-base rounded-xl border">
            <BsFillChatLeftDotsFill /> 45 Comments
          </button>
        </div>
      </div>
      <div className="flex flex-col pl-5 mr-auto md:mr-0 md:ml-auto lg:pl-0">
        <div className="flex flex-row-reverse gap-4 mr-auto md:mr-0 md:flex-row md:ml-auto">
          <div>
            <h2 className="font-semibold">Centered Martial Arts</h2>
            <small className="text-gray-400">SunnyValem, cs</small>
          </div>
          <div className="flex w-[57px] h-[57px] mr-2 rounded-xl bg-white"></div>
          <BsThreeDotsVertical className="text-xl text-gray-300" />
        </div>
        <div className="flex gap-4 mt-auto xl:flex-row lg:flex-col">
          <h4 className="hidden text-xs lg:flex md:text-xs xl:text-base">
            Total Progress 60%
          </h4>
          <Progress percent={50} status="active" className="w-60" />
        </div>
      </div>
    </div>
  );
}
