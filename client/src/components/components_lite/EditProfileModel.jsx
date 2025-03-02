import { Dialog } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import axios from "axios";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// Google Font Import
const fontStyle = {
  fontFamily: "'Poppins', sans-serif",
};

function EditProfileModel({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser({ ...res.data.user, skills: input.skills }));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  const FileChangehandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  return (
    <div style={fontStyle}>
      <Dialog open={open}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <DialogContent
            className="sm:max-w-[500px] bg-white shadow-xl rounded-lg"
            onInteractOutside={() => setOpen(false)}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-center text-gray-800">
                Edit Profile
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleFileChange} className="space-y-4">
              <div className="grid gap-4 py-4">
                {[
                  { label: "Name", name: "fullname", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone", name: "phoneNumber", type: "tel" },
                  { label: "Bio", name: "bio", type: "text" },
                  { label: "Skills", name: "skills", type: "text" },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="grid grid-cols-4 items-center gap-4"
                  >
                    <Label htmlFor={field.name} className="text-right font-medium">
                      {field.label}
                    </Label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={input[field.name]}
                      onChange={changeEventHandler}
                      className="col-span-3 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 transition"
                    />
                  </motion.div>
                ))}

                {/* Resume file upload */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="grid grid-cols-4 items-center gap-4"
                >
                  <Label htmlFor="file" className="text-right font-medium">
                    Resume
                  </Label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="application/pdf"
                    onChange={FileChangehandler}
                    className="col-span-3 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </motion.div>
              </div>

              <DialogFooter>
                {loading ? (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ yoyo: Infinity, duration: 0.5 }}
                  >
                    <Button className="w-full my-4 flex items-center justify-center bg-gray-500">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      type="submit"
                      className="w-full my-4 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-semibold py-2"
                    >
                      Save
                    </Button>
                  </motion.div>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </motion.div>
      </Dialog>
    </div>
  );
}

export default EditProfileModel;
