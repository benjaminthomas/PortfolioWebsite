"use client";

import React, { useEffect, useState } from "react";

import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { getProjects } from "@/sanity/utils/sanityUtils";
import { ProjectSanityProps } from "@/lib/types";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [projects, setProjects] = useState<ProjectSanityProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };
    fetchData();
  }, []);
  if (projects.length === 0) {
    // Don't render the section if there are no projects
    return null;
  }

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        {projects.map((project) => (
          <React.Fragment key={project._id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
