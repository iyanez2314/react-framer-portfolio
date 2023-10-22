import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Album Rater",
    imgSrc: "project-imgs/Album-Rater.png",
    code: "https://github.com/iyanez2314/album-rater",
    projectLink: "https://album-rater-one.vercel.app/",
    tech: [
      "NextJs",
      "React",
      "TypeScript",
      "Tailwind",
      "PostreSQL",
      "Prisma",
      "Supabase",
    ],
    description:
      "A web app so music enthusiasts can rate and comment on their favorite albums.",
    modalContent: (
      <>
        <p>
          Album Rater is a web app so music enthusiasts can rate and comment on
          their favorite albums.
        </p>
      </>
    ),
  },
  {
    title: "Developer LMS",
    imgSrc: "project-imgs/Developer-LMS.png",
    code: "https://github.com/iyanez2314/lms",
    projectLink: "https://www.developerlms.com/",
    tech: ["HTML", "Tailwind", "Java", "Springboot", "Thymeleaf", "MySQL"],
    description:
      "Developer LMS helps centralize the learning experience for developers.",
    modalContent: (
      <>
        <p>
          Developer LMS centralizes essential programming language resources to
          simplify the journey of budding developers.
        </p>
      </>
    ),
  },
  {
    title: "CRIM Web Development",
    imgSrc: "project-imgs/CRIM.png",
    code: "https://github.com/iyanez2314/CCR-website",
    projectLink: "http://www.crimdevelopment.com/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "CRIM Web Development is a web development company that I started with a friend.",
    modalContent: (
      <>
        <p>
          CCR Web Designs, my freelance website, is a testament to my
          proficiency in HTML, CSS, and vanilla JS. Through this project, I
          effectively highlighted my design skills and created an intuitive,
          engaging platform that successfully communicates my freelance
          capabilities to prospective clients.
        </p>
      </>
    ),
  },
];
