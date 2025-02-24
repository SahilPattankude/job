import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, filterIndex) => (
          <div key={filterIndex} className="mt-4">
            <h2 className="font-bold text-lg">{data.filterType}</h2>
            {data.array.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} id={`${data.filterType}-${item}`} />
                <label htmlFor={`${data.filterType}-${item}`}>{item}</label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default Filter;
