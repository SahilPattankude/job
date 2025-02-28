import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Pune",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Delhi",
      "Kolkata",
      "Visakhapatnam",
      "Vadodara",
      "Surat",
      "Ahmedabad",
    ],
  },
  {
    filterType: "Industry",
    array: ["IT", "Finance", "Education", "Healthcare", "Manufacturing"],
  },
  {
    filterType: "Experience",
    array: ["0-1", "1-3", "3-5", "5-7", "7+"],
  },
  {
    filterType: "Salary",
    array: ["0-10000", "10001-20000", "20001-30001"],
  },
];

function Filter() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);
  return (
    <div className="w-full bg-white rounded-md">
    <h1 className="font-bold text-lg">Filter Jobs</h1>
    <hr className="mt-3" />
    <RadioGroup value={selectedValue} onValueChange={handleChange}>
      {filterData.map((data, index) => (
        <div key={index}>
          <h2 className="font-bold text-lg">{data.filterType}</h2>

          {data.array.map((item, indx) => {
            const itemId = `Id${index}-${indx}`;
            return (
              <div key={itemId} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} id={itemId}></RadioGroupItem>
                <label htmlFor={itemId}>{item}</label>
              </div>
            );
          })}
        </div>
      ))}
    </RadioGroup>
  </div>
);
};

export default Filter;
