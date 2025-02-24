import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function Description() {
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
        <Button>Apply Now</Button>
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default Description;
