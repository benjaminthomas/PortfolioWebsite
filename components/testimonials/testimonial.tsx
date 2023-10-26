"use client";

import React, { useState } from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";
import { testimonials } from "@/lib/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Testimony from "./testimony";

export default function Testimonial() {
  const { ref } = useSectionInView("Testimonial", 0.5);
  const [currentIndex, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function next() {
    setDirection(1);
    setIndex((currentIndex + 1) % testimonials.length);
  }

  function prev() {
    setDirection(-1);
    setIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="testimonial"
      ref={ref}
    >
      <SectionHeading>Testimonials</SectionHeading>
      <div className="relative py-4 px-8 bg-white rounded-xl dark:bg-white/5">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-5 top-[50%] -translate-y-[50%] cursor-pointer z-10  text-gray-950 flex items-center justify-center outline-none focus:scale-110 hover:scale-110 dark:text-white/60 transition-all"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-5 top-[50%] -translate-y-[50%] cursor-pointer z-10  text-gray-950 flex items-center justify-center outline-none focus:scale-110 hover:scale-110 dark:text-white/60 transition-all"
        >
          <FaArrowRight className="text-xl" />
        </button>
        <ul className="grid auto-cols-[100%] auto-flow-col text-l text-gray-800 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={testimonial.id}>
              <Testimony
                {...testimonial}
                index={index}
                currentIndex={currentIndex}
                direction={direction}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
