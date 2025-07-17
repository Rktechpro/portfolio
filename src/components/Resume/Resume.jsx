import React from "react";

import { Link } from "react-router-dom";
import mern from "../../assets/img/mern.jpg";
import frontends from "../../assets/img/frontend.jpg";
import backends from "../../assets/img/fullstack.jpeg";
import php from "../../assets/img/php.jpg";
import { GraduationCap, Telescope, Code, BadgeCheck } from "lucide-react";

const Resume = () => {
  const frontend = [
    { name: "Html", img: "/language/html.png" },
    { name: "CSS", img: "/language/css-3.png" },
    { name: "JS", img: "/language/js.png" },
    { name: "Bootstrap", img: "/language/bootstrap.png" },
    { name: "Tailwind CSS", img: "/language/Tailwind CSS.png" },
    { name: "React Js", img: "/language/React.png" },
  ];

  const backend = [
    { name: "Node JS", img: "/language/node-js.png" },
    { name: "Express JS", img: "/language/Express.png" },
    { name: "Mongodb", img: "/language/MongoDB.png" },
    { name: "Mongoose", img: "/language/Mongoose.png" },
  ];

  const tool = [
    { name: "Git", img: "/language/Git.png" },
    { name: "GitHub", img: "/language/GitHub.jpg" },
    { name: "Postman", img: "/language/Postman.png" },
    { name: "VS Code", img: "/language/vscode.png" },
  ];

  const cetficate = [
    {
      image: frontends,
      name: "Frontend Development",
      compnay: "Xtrude Engineers Pvt.Ltd. An ISO 9001:2015 Company.",
    },
    {
      image: backends,
      name: "Full Stack With MERN STACK",
      compnay: "Xtrude Engineers Pvt.Ltd. An ISO 9001:2015 Company.",
    },
    {
      image: mern,
      name: "Full stack Development",
      compnay: "Xtrude Engineers Pvt.Ltd. An ISO 9001:2015 Company",
    },
    {
      image: php,
      name: "Php MYSQL",
      compnay: "Global Institute Of Information Technology.",
    },
  ];

  const edu = [
    {
      year: "2019 - 2022",
      title: "High School",
      name: "Govt. Inter College Bijnor",
    },
    {
      year: "2021 - 2022",
      title: "Intermediate School",
      name: "Govt. Inter College Bijnor",
    },
    {
      year: "2020 - 2022",
      title: "Diploma in Computer Science",
      name: "Government Polytechnic Mawana Khurd Meerut",
    },
    {
      year: "2022 - 2025",
      title: "Bachelor of Technology",
      name: "APJ Abdul Kalam Technical University",
    },
  ];

  const project = [
    {
      name: " Food Delivery Website",
      desc: "A Responsive food delivery website built with the MERN stack. Allows users to browse menus, place orders, and track delivery status.",
      tech: " MongoDB, Express, ReactJs, NodeJs, Mongoose, Razorpay",
      domain: "https://rapideatsfood-com.vercel.app",
    },
    {
      name: " Image Signature Resizer",
      desc: "A MERN stack-based tool for resizing images. Supports bulk processing, custom dimensions, and format conversion.",
      tech: " MongoDB, Express, ReactJs, NodeJs, Mongoose, Bootstrap",
      domain: "https://tools-with-react.vercel.app",
    },
    {
      name: " Voice Agent",
      desc: "Smart voice assistant using MERN stack and Gemini API. Supports Google search, YouTube, and more via voice commands.",
      tech: " MongoDB, Express, ReactJs, NodeJs, Tailwind CSS, Cloudinary, Gemini API",
      domain: "https://voice-agent-mern-stack-1.onrender.com",
    },
    {
      name: " AI Coding Mentor",
      desc: "AI-powered code reviewer using the MERN stack and Gemini API. It assists developers in debugging and improving code quality.",
      tech: " MongoDB, Express, ReactJs, NodeJs, Tailwind CSS, Gemini API",
      domain: "https://ai-coding-mentor-1.onrender.com",
    },
  ];

  return (
    <div className="md:ml-[8%] md:w-[82%] w-full py-6 px-4  text-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase text-[#FF5E11]">Resume</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <section>
          <header className="flex items-center text-2xl font-bold gap-2 mb-4 border-b border-gray-600 pb-2">
            <GraduationCap className="text-[#FF5E11]" size={24} />
            <span>Education</span>
          </header>
          <div className="border-l-2 border-gray-700 pl-6 space-y-6">
            {edu.map((edu, i) => (
              <div
                key={i}
                className="relative p-4 bg-[#181B20] rounded-md border border-gray-700"
              >
                <div className="absolute -left-3 top-5 w-3 h-3 bg-[#FF5E11] rounded-full border-2 border-white"></div>
                <h4 className="text-[#2c9b2c] font-semibold">{edu.year}</h4>
                <h3 className="text-lg font-bold">{edu.title}</h3>
                <p className="text-sm text-gray-400">{edu.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <header className="flex items-center text-2xl font-bold gap-2 mb-4 border-b border-gray-600 pb-2">
            <Telescope className="text-[#FF5E11]" size={24} />
            <span>Technical Skills</span>
          </header>

          <div className="border-l-2 border-gray-700 pl-6 space-y-6">
            {/* Frontend */}
            <div className="relative p-4 bg-[#181B20] rounded-md border border-gray-700">
              <div className="absolute -left-3 top-5 w-3 h-3 bg-[#FF5E11] rounded-full border-2 border-white"></div>
              <h3 className="text-lg font-bold">Front-End</h3>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                {frontend.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={item.img} alt={item.name} className="w-6 h-6" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="relative p-4 bg-[#181B20] rounded-md border border-gray-700">
              <div className="absolute -left-3 top-5 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></div>
              <h3 className="text-lg font-bold">Full-Stack Developer</h3>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                {backend.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={item.img} alt={item.name} className="w-6 h-6" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="relative p-4 bg-[#181B20] rounded-md border border-gray-700">
              <div className="absolute -left-3 top-5 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></div>
              <h3 className="text-lg font-bold">Tools</h3>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                {tool.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={item.img} alt={item.name} className="w-6 h-6" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full py-6 px-2 text-white">
        {/* Projects Section */}
        <section>
          <header className="flex items-center text-2xl font-bold gap-2 mb-6 border-b border-gray-600 pb-2">
            <Code className="text-[#FF5E11]" size={24} />
            <span>Projects</span>
          </header>
          <div className="border-l-2 border-gray-700 pl-6 space-y-6">
            {project.map((proj, index) => (
              <div
                key={index}
                className="relative p-4 bg-[#181B20] rounded-md border border-gray-700"
              >
                <div className="absolute -left-3 top-5 w-3 h-3 bg-[#FF5E11] rounded-full border-2 border-white"></div>
                <h3 className="text-lg font-bold text-[#FF5E11]">
                  {proj.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{proj.desc}</p>

                <p className="text-sm text-gray-400 mt-1">
                  <strong className="text-[#cac2c2]">Technology Used:</strong>{" "}
                  {proj.tech}
                </p>
                <Link
                  to={proj.domain}
                  className="text-sm text-[#2a892a] hover:underline block mt-1"
                >
                  <strong className="text-[#cac2c2]">Domain:</strong>{" "}
                  {proj.domain}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mt-10">
          <header className="flex items-center text-2xl font-bold gap-2 mb-6 border-b border-gray-600 pb-2">
            <BadgeCheck className="text-[#FF5E11]" size={24} />
            <span>Certificates</span>
          </header>
          <div className="border-l-2 border-gray-700 pl-6 space-y-6">
            {cetficate.map((cert, index) => (
              <div
                key={index}
                className="relative p-4 bg-[#181B20] rounded-md border border-gray-700"
              >
                <div className="absolute -left-3 top-5 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded mb-3 w-full object-cover"
                />
                <h3 className="text-lg font-bold text-[#ed7830]">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400">{cert.org}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
