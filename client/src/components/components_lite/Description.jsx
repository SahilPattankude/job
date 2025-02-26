import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function Description() {
  const isApplied = false;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Title</h1>
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
          </div>

          <div>
            <Button
              disabled={isApplied}
              className={`rounded-lg ${isApplied
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-purple-500 hover:bg-[#552d9b]"
                }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>
        <h1 className="border-b-2 border-b-gray-400 font-bold py-4">
          Job Description
        </h1>
        <div>
          <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Software Developer</span></h1>
          <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Remote</span></h1>
          <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">12LPA</span></h1>
          <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">Fresher</span></h1>



        </div>
      </div>


    </div>
  );
}

export default Description;
