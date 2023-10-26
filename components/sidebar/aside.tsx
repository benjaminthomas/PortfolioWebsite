"use client";

import React, { useState } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton";
import { menuVariants } from "@/app/utils/motion";
import NavItems from "./navItem";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const totalItems = links.length;
  return (
    <>
      <motion.aside
        animate={open ? "open" : "closed"}
        className="fixed right-5 top-5 z-20"
      >
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", delay: 1 },
          }}
        >
          <ToggleButton setOpen={setOpen} />
        </motion.div>
        <motion.nav
          variants={menuVariants}
          initial={false}
          role="Navigation"
          className="fixed right-0 top-0 h-full max-w-[400px] bg-white dark:bg-gray-950/80  text-gray-950 dark:text-white/80  z-10 px-20 flex flex-col justify-center shadow-xl"
        >
          <ul className={`flex flex-col justify-center h-[inherit] gap-10`}>
            {links.map((link, index) => (
              <React.Fragment key={link.hash}>
                <NavItems
                  {...link}
                  open={open}
                  totalItems={totalItems}
                  setOpen={setOpen}
                  index={index}
                />
              </React.Fragment>
            ))}
          </ul>
        </motion.nav>
      </motion.aside>
    </>
  );
}
