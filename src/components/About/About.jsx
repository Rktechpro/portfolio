import React from 'react';
import logo from "../../assets/img/logo.jpg"

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        {/* Profile Image */}
        <img
          src={logo}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto shadow-lg mb-6"
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>

        {/* Short Bio */}
        <p className="text-lg text-gray-600 mb-6">
          Hello! I'm <span className="font-thin text-[#FF5E11]">Ravi Kumar</span>, a passionate MERN Stack Developer
          who loves building clean and scalable web applications. I enjoy transforming ideas into real-world solutions with high performance and modern UX.
        </p>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Tailwind CSS',
              'JavaScript',
              'Git',
              'REST APIs',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-[#FF5E11] px-4 py-2 rounded-full text-sm font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          Let’s build something amazing together 🚀
        </p>
      </div>
    </section>
  );
};

export default About;

