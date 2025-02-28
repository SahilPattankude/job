import React,{useEffect} from 'react'
import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch } from "react-redux";
function useGetAllAppliedJobs() {
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchAppliedJobs = async () => {
        try {
          const res = await axios.get(`${APPLICATION_API_ENDPOINT}/get`, {
            withCredentials: true,
          });
          console.log("API Response:", res.data);
          if (res.data.success) {
            dispatch(setAllAppliedJobs(res.data.application));
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchAppliedJobs();
    }, [dispatch]);
    return null;
  };

export default useGetAllAppliedJobs
