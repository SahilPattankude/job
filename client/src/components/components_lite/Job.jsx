import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

function Job() {

  const navigate = useNavigate();
  const jobId = "asd";

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">3 days ago</p>
        <Button varient="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p=6 " varient="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-40012,resizemode-75,msid-76748021/news/india/us-based-amdocs-to-lay-off-1000-employees-due-to-coronavirus-report.jpg"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="text-2xl font-medium">amdocs</h1>
          <p className="text-md text-gray-600">Magarpatta</p>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg my-2">Java Developer</h2>
        <p className="text-md text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          10 Openings
        </Badge>
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          10 LPA
        </Badge>
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          Remote
        </Badge>
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          Full Time
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() =>{navigate(`/description/${jobId}`);

          }} 
          variant="outline"
          className="font-bold rounded-md"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
}

export default Job;
