import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

function Description() {
  const params = useParams();
  const jobId = params.id;
  const { singleJob } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.auth);
  const isInitiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updatedJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          setError("Failed to fetch job details.");
        }
      } catch (error) {
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  if (!singleJob) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-bold text-2xl text-gray-900">{singleJob?.title}</h1>
          <div className="flex flex-wrap gap-3 mt-3">
            <Badge className="bg-blue-100 text-blue-600 font-bold px-3 py-1 rounded-md">
              {singleJob?.position} Open Positions
            </Badge>
            <Badge className="bg-red-100 text-[#FA4F09] font-bold px-3 py-1 rounded-md">
              {singleJob?.salary} LPA
            </Badge>
            <Badge className="bg-purple-100 text-[#6B3AC2] font-bold px-3 py-1 rounded-md">
              {singleJob?.location}
            </Badge>
            <Badge className="bg-gray-200 text-black font-bold px-3 py-1 rounded-md">
              {singleJob?.jobType}
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`transition-transform duration-300 rounded-lg px-6 py-2 text-white font-bold ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#6B3AC2] hover:bg-[#552d9b] hover:scale-105"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-gray-300 font-medium py-4 text-lg text-gray-800 animate-slideIn">
        {singleJob?.description}
      </h1>

      <div className="my-6">
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Role:{" "}
          <span className="font-normal text-gray-700">{singleJob?.position} Open Positions</span>
        </h1>
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Location:{" "}
          <span className="font-normal text-gray-700">{singleJob?.location}</span>
        </h1>
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Salary:{" "}
          <span className="font-normal text-gray-700">{singleJob?.salary} LPA</span>
        </h1>
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Experience:{" "}
          <span className="font-normal text-gray-700">{singleJob?.experienceLevel} Year</span>
        </h1>
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Total Applicants:{" "}
          <span className="font-normal text-gray-700">{singleJob?.applications?.length}</span>
        </h1>
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Job Type:
          <span className="font-normal text-gray-700">{singleJob?.jobType}</span>
        </h1>
        <h1 className="font-bold text-lg my-2 text-gray-900">
          Post Date:
          <span className="font-normal text-gray-700">{singleJob?.createdAt.split("T")[0]}</span>
        </h1>
      </div>
    </div>
  );
}

export default Description;
