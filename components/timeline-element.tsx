"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { useTheme } from "@/context/theme-context";

type ExperienceProps = (typeof experiencesData)[number];
export default function TimelineElement({
  title,
  company_name,
  icon,
  iconBg,
  date,
  location,
  workIcon,
  points,
}: ExperienceProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { theme } = useTheme();
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.05)",
        }}
        date={date}
        icon={
          <div className={`flex justify-center items-center w-full h-full`}>
            <Image
              src={icon}
              alt={company_name}
              className="w-[60%] h-[60%] object-contain"
              quality={95}
            />
          </div>
        }
        iconStyle={{ background: iconBg }}
        visible={inView}
      >
        <div className="flex flex-col items-start justify-between sm:flex-row">
          <h4 className="font-semibold">{title}</h4>
          <p className="!mt-0 font-normal text-gray-600 flex items-center gap-1 dark:text-white/60">
            <i className="text-gray-400 dark:text-white/20">{workIcon}</i>
            {location}
          </p>
        </div>
        <ul className="mt-4 !font-normal list-disc list-inside">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-gray-700 pl-1 tracking-wider text-[14px] mb-2 last:mb-0 dark:text-white/70"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
}
