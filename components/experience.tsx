"use client";

import React from 'react'

import { experiencesData } from "@/lib/data";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./timeline-element";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './section-heading';

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.2);
    return (
        <section
            ref={ref}
            className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10 mb-28 sm:mb-40"
            id="experience"
        >
            <SectionHeading>
                My Experience
            </SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((timelineElement, index) => (
                    <React.Fragment key={index}>
                        <TimelineElement {...timelineElement}/>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
        </section>
    );
}