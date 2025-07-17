
import React, { useState } from "react";
import {
  Phone,
  MapPin,
  MailIcon,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageCircle,
  TwitterIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = () => {
  const url = "https://serverportfolio-sand.vercel.app";
 

  const contact = [
    {
      icon: <MailIcon className="text-2xl text-stone-700" />,
      lable: "Email",
      name: "raviasdeveloper@gmail.com",
    },
    {
      icon: <MapPin className="text-2xl text-stone-700" />,
      lable: "Address",
      name: "Bijnor",
    },
    {
      icon: <Phone className="text-2xl text-stone-700" />,
      lable: "Phone",
      name: "91+7088839745",
    },
  ];

  const socialicon = [
    {
      link: "https://github.com/Rktechpro",
      icons: <GithubIcon />,
    },
    {
      link: "#",
      icons: <FacebookIcon className="text-blue-600" />,
    },
    {
      link: "#",
      icons: <InstagramIcon className="text-pink-600" />,
    },
    {
      link: "https://www.linkedin.com/in/ravikumardeveloper/",
      icons: <LinkedinIcon className="text-blue-500" />,
    },
    {
      link: "https://wa.me/+917088839745",
      icons: <MessageCircle className="text-green-500" />,
    },
    {
      link: "https://x.com/Rk_techpro",
      icons: <TwitterIcon className="text-blue-400" />,
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/form/add`, form);
      if (res.data.success) {
        toast.success(res.data.message);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Submission failed.");
    }
  };

  return (
    <div className="w-full py-10 px-4 md:px-10 bg-transparent">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FF5E11] uppercase">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8 justify-center items-start bg-[#5a585849] rounded-xl p-6 md:p-10 mx-auto max-w-6xl">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-xl md:text-2xl text-[#FF5E11]  mb-16 text-center md:text-left">
            Let's work together!
          </h3>

          {contact.map((item, index) => (
            <div key={index} className="mb-5">
              <h4 className="text-lg text-[#34b734]">{item.lable}</h4>
              <div className="flex items-center gap-2 mt-1 text-white">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 mt-6">
            {socialicon.map((item, index) => (
              <Link key={index} to={item.link} target="_blank" rel="noreferrer" className="text-2xl hover:scale-110 transition">
                {item.icons}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullname" className="text-[#1dc91d] font-medium">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="Enter your full name!"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#1dc91d] font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                required
                placeholder="example@gmail.com"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-[#1dc91d] font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleInput}
                required
                placeholder="Enter your phone number"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[#1dc91d] font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInput}
                required
                rows="4"
                placeholder="Write your message here!"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
