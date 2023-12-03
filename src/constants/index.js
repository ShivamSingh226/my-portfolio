import {
    mobile,
    backend,
   
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
   qci,
    
    starbucks,
   
    carrent,
    jobit,
    tripguide,
    ecom,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Backend Developer",
      icon: backend,
    },
    {title:"Frontend Developer",
  icon:mobile,}
   
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
      name: "Java",
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
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "OnSolve LLC",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 -December 2022",
      points: [
        "Implemented REST APIs,models and routes using Springboot and collaborated with various teams.",
        "Potentially optimized different routes for functions like contact Imports, sending and displaying alerts.",
        "Enabled Bulk Imports of contacts upto 10000 Users.",
        "Fixed Email and Contact Validation feature to prevent bogus alerts.",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Quality Council Of India",
      icon: qci,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2023",
      points: [
        "Development of frontend of Project Tracker Tool of QCI using ReactJS",
        "Deployed Project Tracker Tool to be used potentially by over 1000 people in the organization",
        "Developed frontend of the Media Management Portal to upload media files using ReactJS",
        "Wrote Models, Routes and MongoDB Schemas for file management using ExpressJS",
      ],
    },
   
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Admin Dashboard",
      description:
        "Web-based platform developed using ReactJS,Material-UI,Nivo and used RTK Query to call the APIs for data analysis and visualization",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ShivamSingh226/dashboard",
    },
    {
      name: "Pharmaceutical Startup",
      description:
        "Frontend Application designed using ReactJS for a Bangalore-based Pharmaceutical Startup dealing with Active Pharmaceutical Ingredients, Supplements and medicines",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ShivamSingh226/DKApp",
    },
    {
      name: "Hotel Booking App",
      description:
        "A comprehensive hotel booking platform that allows users to book hotels and resorts,upload images and add new hotels available.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ShivamSingh226/booking-app",
    },
    {
      name: "Ecommerce Website",
      description:
        "An ecommerce website with Add to cart,sorting and filtering functionality",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
       
      ],
      image: ecom,
      source_code_link: "https://github.com/ShivamSingh226/Assignment-2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };