"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { ProjectSanityProps } from "@/lib/types";

export default function Project({
  title,
  description,
  tag,
  image,
  link,
  imageAlt,
}: ProjectSanityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="group/section relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[100%] even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap items-center gap-1 mt-4 sm:mt-auto sm:pt-4">
            {tag.map((value, index) => (
              <li
                className={`px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full`}
                key={index}
              >
                #{value}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block bottom-0 right-0 w-[18rem] h-[85%] object-cover rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-[1.05] group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition group-even:right-[initial] group-even:left-0"
          src={image}
          alt={imageAlt}
          quality={95}
          width="300"
          height="350"
        />
        <div className="absolute inset-0 w-full h-full z-10 bg-black/50 flex items-center justify-center opacity-0 group-hover/section:opacity-100">
          <Link
            aria-label="View project"
            href={link}
            target="_blank"
            className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 text-xl"
          >
            <FaEye />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
