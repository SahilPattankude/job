import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack",
  "UI/UX Designer",
  "Data Scientist",
  "Product Manager",
  "UX/UI Designer",
  "Marketing",
  "Finance",
  "QA/Tester",
  "Content Writer",
  "Digital Marketer",
];

function Categories() {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-2xl text-center font-bold text-blue-600">Categories</h1>

        <p className="text-center  text-gray-600">Explore our job market</p>
      </div>

      <Carousel className="w-full max-w-xl mx-auto my-10 ">
        <CarouselContent>
          {Category.map((category, index) => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Button className="bg-black text-white">{category}</Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Categories;
