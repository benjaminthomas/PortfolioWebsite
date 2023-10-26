import { testimonials } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { sliderAnimation } from "@/app/utils/motion";
import Image from "next/image";
import React from "react";
type TestimonyProps = (typeof testimonials)[number] & {
  index: number;
  currentIndex: number;
  direction: number;
};

export default function Testimony({
  id,
  testimonial,
  name,
  designation,
  company,
  image,
  index,
  currentIndex,
  direction,
}: TestimonyProps) {
  return (
    <AnimatePresence initial={false} custom={direction}>
      {index === currentIndex && (
        <motion.li
          variants={sliderAnimation(direction)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="px-8 py-3 flex-1"
          key={id}
        >
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="font-semibold text-gray-900 dark:text-white/70">
                  {testimonial}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  className="w-8 h-8 rounded-full"
                  src={image}
                  alt={name}
                  quality={95}
                />
                <div className="flex flex-col items-start  md:flex-row md:items-center md:divide-x-2 md:divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white/60">
                    {name.split(" ").map((part, index, array) => (
                      <React.Fragment key={index}>
                        <span className="last-of-type:hidden md:last-of-type:inline">
                          {part}
                        </span>
                        {index < array.length - 1 && " "}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="pl-0 md:pl-3 text-sm font-light text-gray-500 dark:text-white/60 text-left">
                    {designation}, {company}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
}
