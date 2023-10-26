import { menuLiAnimation } from "@/app/utils/motion";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

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
  return (
    <motion.li
      variants={menuLiAnimation(index, totalItems)}
      animate={open ? "animate" : "exit"}
      onClick={() => setOpen((prevOpen) => !prevOpen)}
      className="text-center text-2xl"
    >
      <Link
        href={hash}
        className={`${open ? "" : "pointer-events-none"}`}
        aria-label={name}
      >
        {name}
      </Link>
    </motion.li>
  );
}
