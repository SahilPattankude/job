import React from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJobs from "./AppliedJobs";

const skills = ["React", "JavaScript", "HTML", "CSS", "NodeJS", "Mongodb"];

function Profile() {
  const isHaveResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-500 hover:shadow-yellow-300">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <div className="">
                <h1>Full Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </Avatar>
          </div>
          <div>
            <h1 className="font-medium text-xl">Full Name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Button className="text-right" varient="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span className="">sahilpattankude@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>+91 9272164781</span>
          </div>
        </div>

        <div className="">
          <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
              {skills.length !== 0 ? (
                skills.map((item, index) => <Badge key={index}>{item}</Badge>)
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-md font-bold">Resume</label>
            <div>
              {isHaveResume ? (
                <a
                  target="_blank"
                  href={""}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Download
                </a>
              ) : (
                <span>No Resume Found</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-lg my-5 font-bold">Applied Jobs</h1>
        <AppliedJobs />
      </div>
    </div>
  );
}

export default Profile;
