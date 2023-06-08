import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  school,
  college,
  bachelors,
  masters
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ICSE Board",
    company_name: "VP's Magarpatta City Public School",
    icon: school,
    iconBg: "#383E56",
    date: "March 2006 - April 2016",
    points: [
      "Percentage - 93%"
    ],
  },
  {
    title: "HSC Board",
    company_name: "Sardar Dastur Hormazdiar Junior College",
    icon: college, 
    iconBg: "#E6DEDD",
    date: "August 2017 - June 2019",
    points: [
      "Percentage - 75%"
    ],
  },
  {
    title: "Bachelors in Computer Science",
    company_name: "Fergusson College",
    icon: bachelors,
    iconBg: "#383E56",
    date: "August 2019 - May 2022",
    points: [
      "CGPA - 9"
    ],
  },
  {
    title: "Masters in Computer Science",
    company_name: "Savitribai Phule Pune University",
    icon: masters ,
    iconBg: "#E6DEDD",
    date: "November 2022 - Present",
    points: [
      "Current Semester CGPA - 8.2"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " ",
    name: " ",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      " ",
    name: " ",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " ",
    name: " ",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Application",
    description:
      "Web-based platform that allows users to chat in real time with each other",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Application",
    description:
      "Web application that allows users to browse and search for movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather Application",
    description:
      " A simple weather application created using open weather's API",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
