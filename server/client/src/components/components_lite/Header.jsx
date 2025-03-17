import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { HiMiniBuildingOffice } from "react-icons/hi2";

function Header() {
  return (
    <div className="font-sans">
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-orange-400 font-medium text-lg font-mono">
            <HiMiniBuildingOffice />
            <span>No.1 Job Hunt Website</span>
          </span>

          <h2 className="text-5xl font-extrabold font-serif">
            Search, Apply & <br />
            Get Your{" "}
            <span className=" text-purple-600 font-extrabold font-serif">Dream Job</span>
          </h2>
          <p className="text-lg font-light font-sans">
            Start your hunt for the best, life-changing career opportunities from
            here in your <br />
            selected areas conveniently and get hired quickly.
          </p>
        </div>
        <div className="flex w-[40%] shadow-lg border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find Your Dream Job"
            className="outline-none border-none w-full text-lg font-medium font-mono"
          />
          <Button className="rounded-r-full bg-purple-500 text-white font-semibold font-sans">
            <Search className="h-5 w-5 " />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
