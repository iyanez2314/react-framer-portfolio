import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Merrell Works",
    position: "Web Developer",
    time: "2023 - Present",
    location: "San Antonio",
    description:
      "Resolve CSS issues, streamlined HTML structures, and crafted unique JavaScript functionalities. Working closely with teams to maintain and improve web and mobile applications.",
    tech: ["HTML", "CSS", "JavaScript", "Webflow", "Expression Engine"],
  },
  {
    title: "Codeup",
    position: "Web Development Instructor",
    time: "2022 - 2023",
    location: "San Antonio",
    description:
      "Deliver high-quality web development education, emphasizing hands-on experience and real-world problem-solving.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "MySQL",
      "Java",
      "Springboot",
      "Thymeleaf",
    ],
  },
  {
    title: "Apple",
    position: "Support Advisor",
    time: "2020 - 2021",
    location: "San Antonio",
    description:
      "Provided technical support and ensured customer satisfaction through comprehensive product and service support.",
    tech: [""],
  },
];
