import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonial />
      <Contact />
    </main>
  )
}
