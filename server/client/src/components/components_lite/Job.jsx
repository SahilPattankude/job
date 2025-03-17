import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";


function Job({job}) {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  

  return (
    <div className=" max-w-7xl mx-auto my-16 p-5 rounded-md shadow-xl bg-white border border-gray-100">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        {daysAgoFunction(job?.createdAt) === 0
          ? "Today"
          : `${daysAgoFunction(job?.createdAt)} days ago`}
      </p>
      <Button variant="outline" className="rounded-full" size="icon">
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
          <h1 className="text-2xl font-medium">{job?.company?.name}</h1>
          <p className="text-md text-gray-600">Magarpatta</p>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg my-2">{job?.title}</h2>
        <p className="text-md text-gray-600">{job?.description}</p>
      </div>

      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          {job?.position}
        </Badge>
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          {job?.salary} LPA
        </Badge>
        
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          {job?.jobType}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
      <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
