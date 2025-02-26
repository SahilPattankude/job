import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Popover } from "../ui/popover";
import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

function Navbar() {
  
  const {user} = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logOutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`,{withCredentials:true});
      if (response.data.success) {
        toast.success("Logged out successfully!");
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully!");
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }
  }


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
            <li><Link to={"/browse"}>Browse</Link></li>
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
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600 ">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2></User2>
                    <Button variant="link"> <Link to={"/profile"}>Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer ">
                    <LogOut></LogOut>
                    <Button onClick={logOutHandler} variant="link">Log Out</Button>
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
