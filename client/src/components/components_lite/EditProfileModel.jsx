import { Dialog } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import axios from "axios";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function EditProfileModel({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skills) => skills),
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phone", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", JSON.stringify(input.skills));
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
        setLoading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Profile updated successfully");
        setOpen(false);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setInput((prevInput) => ({
      ...prevInput,
      file: file,
    }));
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="bg-white sm:max-w-[500px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          {/*Form for editing profile */}
          <form onSubmit={handleSubmit}>
            <div className=" bg-purple-400 grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <input
                  type="text"
                  id="name"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  placeholder="Enter your name"
                  className=" col-span-3 border border-gray-400 p-2  rounded-md "
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="Enter your email"
                  className=" col-span-3 border border-gray-400 p-2  rounded-md "
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Phone Number
                </Label>
                <input
                  type="number"
                  id="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  placeholder="Enter your Number"
                  className=" col-span-3 border border-gray-400 p-2  rounded-md "
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <input
                  type="bio"
                  id="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  placeholder="Enter your bio"
                  className=" col-span-3 border border-gray-400 p-2  rounded-md "
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <input
                  id="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  placeholder="Enter your skills"
                  className=" col-span-3 border border-gray-400 p-2  rounded-md "
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  required={true}
                  placeholder="Upload your Resume"
                  className=" col-span-3 border border-gray-400 p-2  rounded-md "
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait{""}

                </Button>
                
              ) : (
                <button className="w-full py-3 my-3 bg-black text-white hover:bg-blue-400 rounded-md transition">
                  Save Update
                </button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditProfileModel;
