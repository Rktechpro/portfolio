import React, { useState } from "react";
import {
  HomeIcon,
  Menu,
  User,
  X,
  SquareDashedBottomCode,
  FileUser,
} from "lucide-react";
import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navbar = [
    { name: "Home", icon: <HomeIcon />, links: "/" },
    { name: "About", icon: <User />, links: "/about" },
    { name: "Project", icon: <SquareDashedBottomCode />, links: "/project" },
    { name: "Resume", icon: <FileUser />, links: "/resume" },
  ];

  return (
    <>
      {/* Sticky Header */}
      <header className="bg-[#2A3036] sticky top-0 z-50 p-4 shadow-md flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        {isSidebarOpen ? (
          <X
            className="h-6 w-6 text-white cursor-pointer lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        ) : (
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-6">
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.links}
              className="flex items-center gap-1 text-white hover:text-[#f55e2f] transition"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#f55e2f] text-white px-4 py-1 rounded hover:bg-[#008000d2] transition"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2A3036] shadow-lg z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600 "></div>

        <nav className="my-15 space-y-4 mx-5 ">
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.links}
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-2 text-white hover:text-[#f55e2f] transition"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="block text-center bg-[#f55e2f] text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Layout;
