import React from "react";

import { pillColors } from "@/styles";

import { FaLocationArrow } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import anywhereworks from "@/public/works/anywhereworks.jpg";
import everymum from "@/public/works/everymum.jpg";
import steerWorkplace from "@/public/works/steer-workplace.jpg";
import steer73 from "@/public/works/steer73.jpg";
import teleport from "@/public/works/teleport.jpg";
import yoco from "@/public/works/yocoboard.jpg";
import portfolioWebsite from "@/public/works/3d-portfolio.jpg";
import adrieluxe from "@/public/works/adrieluxe.jpg";
import meta from "@/public/works/meta.jpg";
import gaming from "@/public/works/gaming.jpg";

import aro from "@/public/company/aro.jpeg";
import steer from "@/public/company/steer.jpeg";
import full from "@/public/company/full.jpeg";

import priya from "@/public/testimonials/priya.jpeg";
import ashok from "@/public/testimonials/ashok.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonial",
    hash: "#testimonial",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    company_name: "Aró Digital Strategy",
    icon: aro,
    iconBg: "#fff",
    date: "March 2023 - Present",
    location: "Remote",
    workIcon: React.createElement(FaHouseUser),
    points: [
      "Responsible for creating visually appealing and interactive elements on websites and apps.",
      "Specializes in color scheme selection, typography, and crafting intuitive user experiences.",
      "Designs responsive and mobile-friendly websites and applications.",
      "Collaborates closely with designers, backend developers, and other stakeholders for seamless frontend-backend integration.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Steer73",
    icon: steer,
    iconBg: "#272b82",
    date: "Jun 2019 - Feb 2023",
    location: "Remote",
    workIcon: React.createElement(FaHouseUser),
    points: [
      "Frontend developer with a focus on intuitive and visually appealing user interfaces.",
      "Proficient in HTML, SCSS, and JavaScript, delivering high-quality web projects.",
      "Strong understanding of design systems and expertise in using design tokens and Style Dictionary for consistency and efficiency.",
      "Proficiency in jQuery and experience in integrating with backend systems and consuming APIs.",
      "Track record of successfully delivering web projects on time and maintaining high standards.",
      "Proactive and team-oriented approach, constantly seeking ways to improve processes and enhance efficiency.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "HTML CSS Developer",
    company_name: "Steer73",
    icon: steer,
    iconBg: "#272b82",
    date: "Jun 2018 - May 2019",
    location: "Remote",
    workIcon: React.createElement(FaHouseUser),
    points: [
      "Proficient in converting Figma and Sketch designs into mobile-first HTML/CSS websites, ensuring seamless design implementation across various devices and screen sizes.",
      "Proficient in using Figma for layout design and prototyping.",
      "Proven track record of delivering web projects on time and maintaining high standards.",
      "Proactive and team-oriented, constantly seeking process improvements and enhanced efficiency.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Web Developer",
    company_name: "Full Creative",
    icon: full,
    iconBg: "#000",
    date: "Mar 2014 - May 2018",
    location: "Chennai, India",
    workIcon: React.createElement(FaLocationArrow),
    points: [
      "With over 4 years of experience as a senior web developer, I've honed my skills in HTML, SCSS, JavaScript, and jQuery.",
      "I'm well-versed in UI design tools, including Sketch, Figma, and InVision.",
      "Consistently delivered high-quality web projects on time and to a high standard.",
      "Proficient in using frameworks like Bootstrap to ensure consistency and efficiency in my work.",
      "I've had the privilege of training more than 10 interns in web development, nurturing the next generation of developers.",
      "Whether it's a new project or maintaining and updating existing ones, my goal is to create intuitive and visually appealing user experiences for my clients and their users.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

export const projectsData = [
  {
    name: "Steer workplace",
    description:
      "The software simplifies office management and ensures safety compliance. My responsibilities involve developing a prototype, creating a modular design system, and working with HTML, SCSS, JavaScript, C#, and MVC components.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-blue"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "MVC",
        color: pillColors["pill-red"],
      },
    ],
    image: steerWorkplace,
    source_code_link: "https://steerworkplace.com/",
  },
  {
    name: "Chubb",
    description:
      "The company is a leading provider of fire safety and security solutions in the UK. I collaborated with the team to develop responsive websites and dashboards using HTML, SCSS, and created a modular design system from scratch using HTML, SCSS, and JavaScript for interactions.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "JavaScript",
        color: pillColors["pill-red"],
      },
    ],
    image: "https://picsum.photos/200/300/?blur=2",
    source_code_link: "https://chubbfs.com/uk-en/",
  },
  {
    name: "Steer73",
    description:
      "I manage my employer's official website, which involves converting designs into a functional WordPress site built on the Aheto theme. My responsibilities also include ongoing maintenance. The website utilizes third-party plugins such as iThemes for security and Elementor to simplify WordPress for non-technical users.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "CSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "Wordpress",
        color: pillColors["pill-pink"],
      },
      {
        name: "Wordpress Plugins",
        color: pillColors["pill-pink"],
      },
    ],
    image: steer73,
    source_code_link: "https://steer73.com/",
  },
  {
    name: "Every Mum",
    description:
      "This website is bridge to communicate between all the mums where they can share their experience and get advice from experts. This is a CMS website built on top of MVC's Kentico. I worked as a front-end developer to deliver the design system and the email templates.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "Design System",
        color: pillColors["pill-purple"],
      },
      {
        name: "Kentico",
        color: pillColors["pill-indigo"],
      },
    ],
    image: everymum,
    source_code_link: "https://www.everymum.ie/",
  },
  {
    name: "Paddy Power",
    description:
      "I collaborate on a UK-based mobile bidding app, working closely with the project manager to create the UX and UI. My role also involves developing a functional prototype using HTML, SCSS, and JavaScript for interactive elements within the app.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "Figma",
        color: pillColors["pill-yellow"],
      },
      {
        name: "JavaScript",
        color: pillColors["pill-red"],
      },
    ],
    image: "https://picsum.photos/200/300/?blur=2",
    source_code_link: "https://www.paddypower.com/",
  },
  {
    name: "Language Shop",
    description:
      "I contribute to a UK-based linguist web app, collaborating with the project manager to design the UX and UI. My responsibilities include providing HTML and SCSS deliverables for the front-end team. This app allows users to upload content and request translations in various languages.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "Figma",
        color: pillColors["pill-yellow"],
      },
      {
        name: "JavaScript",
        color: pillColors["pill-red"],
      },
    ],
    image: "https://picsum.photos/200/300/?blur=2",
    source_code_link: "/",
  },
  {
    name: "AnywhereWorks",
    description:
      "I served as the lead web developer for AnywhereWorks, a team collaboration tool that facilitates seamless remote work. My role involved developing the web app and responsive website, along with designing several value-added UI/UX enhancements for both platforms.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "Sketch",
        color: pillColors["pill-green"],
      },
      {
        name: "JavaScript",
        color: pillColors["pill-red"],
      },
    ],
    image: anywhereworks,
    source_code_link: "https://anywhereworks.com/",
  },
  {
    name: "Teleport",
    description:
      "I've developed a responsive website, a web app, and a video call widget for an instant and user-friendly video collaboration tool designed for distributed teams.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "JavaScript",
        color: pillColors["pill-red"],
      },
    ],
    image: teleport,
    source_code_link: "https://teleport.video/",
  },
  {
    name: "YocoBoard",
    description:
      "I worked on the development of the YocoBoard, an organization-level time tracking application that supports remote work, allowing people to work from anywhere in the world. My contributions were focused on the web app and website components.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "SCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "JavaScript",
        color: pillColors["pill-red"],
      },
    ],
    image: yoco,
    source_code_link: "https://www.yocoboard.com/",
  },
  {
    name: "3d Portfolio",
    description:
      "Self-guided project: Learned React, Vite, and Three.js through a YouTube tutorial. Enhanced web development skills by setting up environments, mastering React, and creating 3D experiences.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "TailwindCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "REACT",
        color: pillColors["pill-red"],
      },
      {
        name: "Vitejs",
        color: pillColors["pill-pink"],
      },
      {
        name: "Threejs",
        color: pillColors["pill-blue"],
      },
      {
        name: "Framer motion",
        color: pillColors["pill-indigo"],
      },
    ],
    image: portfolioWebsite,
    source_code_link: "https://3dportfolio-plum.vercel.app/",
  },
  {
    name: "Gaming website",
    description:
      "Built a gaming website for a side hustle using Next.js 14, React, and TypeScript. Implemented Framer Motion for captivating page animations and transitions.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "TailwindCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "REACT",
        color: pillColors["pill-red"],
      },
      {
        name: "NextJs",
        color: pillColors["pill-pink"],
      },
      {
        name: "Framer motion",
        color: pillColors["pill-indigo"],
      },
      {
        name: "Typescript",
        color: pillColors["pill-blue"],
      },
    ],
    image: gaming,
    source_code_link:
      "https://gamingwebsite-32548xmy3-benjaminthomas-projects.vercel.app/",
  },
  {
    name: "A modern website",
    description:
      "I self-taught React and Next.js via a YouTube tutorial, updated the code with TypeScript, and created a responsive website with intricate animations and modern design principles using Framer Motion and Tailwind CSS.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "TailwindCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "REACT",
        color: pillColors["pill-red"],
      },
      {
        name: "NextJs",
        color: pillColors["pill-pink"],
      },
      {
        name: "Framer motion",
        color: pillColors["pill-indigo"],
      },
      {
        name: "Typescript",
        color: pillColors["pill-blue"],
      },
    ],
    image: meta,
    source_code_link: "https://metaverse-puce-delta.vercel.app/",
  },
  {
    name: "Adrieluxe Decor",
    description:
      "Collaborated on a full project with Adrieluxe Decor: Designed their website using Figma, HTML, SCSS, and JavaScript, while managing hosting. Crafted a unique logo for a holistic solution.",
    tags: [
      {
        name: "HTML",
        color: pillColors["pill-sky"],
      },
      {
        name: "TailwindCSS",
        color: pillColors["pill-gray"],
      },
      {
        name: "MVC",
        color: pillColors["pill-blue"],
      },
      {
        name: "Figma",
        color: pillColors["pill-pink"],
      },
      {
        name: "Javascript",
        color: pillColors["pill-red"],
      },
    ],
    image: adrieluxe,
    source_code_link: "https://www.adrieluxe.com/",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    testimonial:
      "I've had the pleasure of working with Benjamin for almost 5 years. He consistently gives 100% effort to the team and played a significant role in ensuring on-time completion of assignments and helping the smooth delivery of projects. He brings the skill and knowledge needed to explain the issues thoroughly and formulate potential solutions quickly. He is extremely approachable and helpful to all his colleagues and friends. I would highly recommend Benjamin for any individual or organization.",
    name: "Priyadarshni Kandaswamy",
    designation: "Demand Delivery Manager",
    company: "AstraZeneca",
    image: priya,
  },
  {
    id: 2,
    testimonial:
      "Mr. Benjamin is a fantastic professional who brings all of his skills and expertise in Front End Development. It was indeed a pleasure working with such senior personnel at the office. I gained various skills from him that helped me in every aspect. I worked with Benjamin for almost three years but on a different team still, there are some dependents on his team. Whenever I reached him with doubt, he always made me feel welcome and asked for my opinions and matters on various issues. He was the most reliable person to contact.",
    name: "Ashokkumar Giri Mohan",
    designation: "Software Quality Engineer",
    company: "Thomann",
    image: ashok,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
  "jQuery",
  "React",
  "Next.js",
  "Three js",
  "TypeScript",
  "Git",
  "SVN",
  "Design System",
  "Framer Motion",
  "MVC Razor",
  "Figma",
  "Sketch",
  "Adobe XD",
  "Premiere Pro",
] as const;
