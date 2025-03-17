import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { setLoading, setUser } from "@/redux/authSlice";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({ email: "", password: "", role: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response ? error.response.data.message : "An error occurred";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-blue-500 font-bold text-2xl mb-5 text-center">Log In</h1>
          <form onSubmit={submitHandler}>
            <div className="my-3">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-3">
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter Password"
                className="w-full"
              />
            </div>
            <div className="my-4">
              <Label>Role</Label>
              <RadioGroup className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            {loading ? (
              <div className="flex justify-center items-center my-10">
                <Loader2 className="animate-spin text-blue-400" size={24} />
              </div>
            ) : (
              <div className="flex justify-center">
                <Button className="w-full py-3 bg-black text-white hover:bg-blue-400 rounded-md transition">
                  Login
                </Button>
              </div>
            )}
            <p className="text-gray-600 text-center mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 font-medium hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
