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
      "Hyderabad",
      "Noida",
      "Gurugram",
      "Jaipur",
      "Bhopal",
      "Lucknow",
      "Visakhapatnam",
      "Vadodara",
      "Surat",
      "Ahmedabad",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Delhi",
      "Kolkata",
      "Hyderabad",
      "Noida",
      "Gurugram",
      "Jaipur",
      "Bhopal",
      "Lucknow",
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
    <div>
      <h1>Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h2>{data.filterType}</h2>
            {data.array.map((item, index) => (
              <RadioGroupItem key={index}>
                <input type="checkbox" id={index} name={index} value={item} />
                <label >{item}</label>
              </RadioGroupItem>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default Filter;
