import React from "react";
import { motion } from "framer-motion"; // Import for animations
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

// Job categories
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack",
  "UI/UX Designer",
  "Data Scientist",
  "Product Manager",
  "Marketing",
  "Finance",
  "QA/Tester",
  "Content Writer",
  "Digital Marketer",
];

function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="font-[Poppins]  py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-extrabold text-blue-600">
          Job Categories
        </h1>
        <p className=" mt-2">
          Explore our extensive job market.
        </p>
      </motion.div>

      <Carousel className="w-full max-w-3xl mx-auto my-10">
        <CarouselContent>
          {Category.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Button 
                  onClick={() => searchjobHandler(category)}
                  className="text-white bg-blue-500 hover:bg-blue-700 transition-transform transform hover:scale-105 px-6 py-3 rounded-lg shadow-md"
                >
                  {category}
                </Button>
              </CarouselItem>
            </motion.div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Categories;
