import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

function JobCards({ job }) {
  console.log(job);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer 
                 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out 
                 hover:border-blue-400 transform hover:rotate-1"
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-800">{job.name}</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>

      <div className="mt-3">
        <h2 className="font-bold text-lg text-blue-500">{job.title}</h2>
        <p className="text-sm text-gray-700 line-clamp-2">{job.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 items-center mt-4">
        <Badge className="text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-md">
          {job.position} Open Positions
        </Badge>
        <Badge className="text-[#FA4F09] font-bold bg-red-100 px-3 py-1 rounded-md">
          {job.salary} LPA
        </Badge>
        <Badge className="text-[#6B3AC2] font-bold bg-purple-100 px-3 py-1 rounded-md">
          {job.location}
        </Badge>
        <Badge className="text-black font-bold bg-gray-200 px-3 py-1 rounded-md">
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
}

export default JobCards;
