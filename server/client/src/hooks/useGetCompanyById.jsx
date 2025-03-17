import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function useGetCompanyById() {
  const { companyId } = useParams(); // ✅ Get companyId from the URL
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchSingleCompany = async () => {
        try {
          const res = await axios.get(
            `${COMPANY_API_ENDPOINT}/get/${companyId}`,
            { withCredentials: true }
          );
          dispatch(setSingleCompany(res.data.company));
        } catch (error) {
          console.error("Error fetching company:", error);
        }
      };
  
      if (companyId) {
        fetchSingleCompany();
      }
    }, [companyId, dispatch]);
  };

export default useGetCompanyById
