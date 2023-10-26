import { motion } from "framer-motion";
import React from "react";

type ToggleButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ToggleButton({ setOpen }: ToggleButtonProps) {
  return (
    <button
      type="button"
      aria-label="Toggle Menu"
      onClick={() => setOpen((prev) => !prev)}
      className="flex flex-col justify-center items-center gap-1 w-[50px] h-[50px] border-black rounded-full cursor-pointer text-center bg-white dark:bg-gray-950/80 text-gray-950 dark:text-white/80"
    >
      <svg width="30" height="16" viewBox="0 0 30 16">
        <motion.rect
          fill="currentColor"
          variants={{
            closed: {
              width: 30,
              height: 2,
              rx: 1,
              x: 0,
              y: 0,
            },
            open: {
              width: 30,
              height: 2,
              rx: 1,
              x: 0,
              y: 7,
            },
          }}
        ></motion.rect>
        <motion.rect
          fill="currentColor"
          width="30"
          height="2"
          rx="1"
          transform="translate(0 7)"
          variants={{
            closed: {
              opacity: 1,
            },
            open: {
              opacity: 0,
            },
          }}
        ></motion.rect>
        <motion.rect
          fill="currentColor"
          variants={{
            closed: {
              width: 30,
              height: 2,
              rx: 1,
              x: 0,
              y: 14,
            },
            open: {
              width: 30,
              height: 2,
              rx: 1,
              x: 0,
              y: 8,
            },
          }}
        ></motion.rect>
      </svg>
    </button>
  );
}
