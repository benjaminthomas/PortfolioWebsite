import React from "react";
import { menuLiAnimation } from "@/app/utils/motion";
import { clsx } from "clsx";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

type NavItemProps = (typeof links)[number] & {
  index: number;
  totalItems: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavItems({
  name,
  hash,
  index,
  totalItems,
  open,
  setOpen,
}: NavItemProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.li
      variants={menuLiAnimation(index, totalItems)}
      animate={open ? "animate" : "exit"}
      onClick={() => setOpen((prevOpen) => !prevOpen)}
      className="relative text-center text-2xl"
    >
      <Link
        href={hash}
        className={clsx(
          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300",
          {
            "text-gray-950 dark:text-gray-200": activeSection === name,
          }
        )}
        onClick={() => {
          setActiveSection(name);
          setTimeOfLastClick(Date.now());
        }}
        aria-label={name}
      >
        {name}
        {name === activeSection && (
          <motion.span
            className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </motion.li>
  );
}
