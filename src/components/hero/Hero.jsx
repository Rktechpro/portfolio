import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  const resumeUrl = import.meta.env.BASE_URL + "pdf/Rk_fullstack_mern.pdf";
  useEffect(() => {
    // Check if the download has already happened in this session
    const hasDownloaded = sessionStorage.getItem("resumeDownloaded");
    if (!hasDownloaded) {
      const timeoutId = setTimeout(() => {
        const downloadResume = () => {
          const link = document.createElement("a");
          link.href = resumeUrl;
          link.download = "RK_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // Set the flag to avoid future downloads in this session
          sessionStorage.setItem("resumeDownloaded", "true");
        };

        downloadResume();
      }, 3000);

      // Cleanup timeout if the component unmounts before timeout fires
      return () => clearTimeout(timeoutId);
    }
  }, []);
  return (
    <div className="md:ml-[1%] md:w-[95%] w-full my-10 ">
      <div className="md:px-[2%] ml-7">
        <p className="md:text-3xl font-semibold mb-2 text-white">
          <span className="text-white">HI '</span>
          <span className="text-[#FF5E11] mx-2 uppercase ">there</span>
        </p>
        <h1 className="md:text-8xl text-3xl font-bold mb-3 text-[#fafcfb] text-left">
          I'm <span className="main2">Ravi Kumar</span>
        </h1>
        <p className="md:text-3xl text-xl border-l-4 border-red-400 pl-2 mb-2 font-semibold text-white">
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Back End Developer",
              "Front End Developer",
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </p>
        <div className="space-x-11 pt-5">
          <p className="text-gray-400 font-thin  selection:bg-indigo-400 selection:text-black">
            I am a dedicated Full Stack Developer specializing in the MERN
            stack, with hands-on experience building responsive and
            user-friendly web applications. My portfolio highlights practical
            projects such as a food delivery platform, image resizer tool, and
            AI-based voice assistant. I focus on writing clean, maintainable
            code and delivering solutions that combine performance, usability,
            and modern design to solve real-world problems effectively using the
            latest technologies and tools.
          </p>
        </div>
        <div className="btn my-5 flex">
          <button
            onClick={() => window.open(resumeUrl, "_blank")}
            className="text-white px-6 py-3 md:text-md text-sm transition-transform md:hover:scale-90 rounded-lg font-semibold bg-[#FF5E11]"
          >
            Download CV
          </button>
          <Link to="/contact" className="flex">
            <button className="text-white px-6 py-3 mx-3 md:text-md text-sm transition-transform md:hover:scale-90 rounded-lg font-semibold bg-[#295a29]">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
