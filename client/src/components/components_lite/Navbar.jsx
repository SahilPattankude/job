import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Popover } from "../ui/popover";
import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = false;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-purple-600">Job</span>
            <span className="text-[#FA4F09]">Hunt</span>
           
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            <li><Link to={"/home"}>Home</Link></li>
            <li>Browse</li>
            <li><Link to={"/jobs"}>Jobs</Link></li>
            
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
            
              <Link to={"/login"}><Button variant="outline" className="bg-blue-400 rounded-lg hover:bg-blue-900">Login</Button></Link>
              <Link to={"/register"}><Button className="bg-red-500 hover:bg-red-700">Register</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Sahil Pattankude</h3>
                    <p className="text-sm text-muted-foreground">
                      Passionate Software Developer
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600 ">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2></User2>
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer ">
                    <LogOut></LogOut>
                    <Button variant="link">Log Out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
