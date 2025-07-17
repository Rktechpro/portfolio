import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      name: "About",
      navgate: "/about",
    },
    {
      name: "Project",
      navgate: "/Project",
    },
    {
      name: "Contact",
      navgate: "/contact",
    },
  ];
  const connect = [
    {
      icon: <Github />,
      link: "https://github.com/Rktechpro",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/ravikumardeveloper",
    },
    {
      icon: <Mail />,
      link: "https://mail.google.com/mail/u/0/raviasdeveloper@gmail.com",
    },
  ];
  return (
    <footer className="bg-[#2A3036] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand / Logo */}
        <div>
          <h1 className="text-2xl font-bold text-[#FF5E11]">Ravi Kumar</h1>
          <p className="mt-2 text-gray-400 text-sm">
            Full-stack developer crafting digital experiences with MERN stack.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.navgate}
              className="text-gray-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <div className="flex space-x-4 mt-2">
            {connect.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ravi Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
