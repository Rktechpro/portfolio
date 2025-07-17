import { Link } from "react-router-dom";

const Project = () => {
  const project = [
    {
      title: "Rapideatsfood",
      link: "https://rapideatsfood-com.vercel.app",
      img: "/image/first.png",
    },
    {
      title: "imagesingnatureresizer",
      link: "https://tools-with-react.vercel.app",
      img: "/image/second.png",
    },
    {
      title: "Voice Agent",
      link: "https://voice-agent-mern-stack-1.onrender.com",
      img: "/image/voice.PNG",
    },
    {
      title: "Ai Coding Mentor",
      link: "https://ai-coding-mentor-1.onrender.com/",
      img: "https://res.cloudinary.com/hackbots/image/upload/v1751706490/ui_xmeltg.png",
    },
  ];

  return (
    <div className="py-8">
      <div className="text-center">
        <span className="text-2xl font-bold mt-3 py-2 hover:bg-[#FFBA49] hover:text-white cursor-pointer uppercase text-white">
          My Projects
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-10 lg:px-[15%] gap-6 mt-8">
        {project.map((item, index) => (
          <div
            key={index}
            className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            title={item.title}
          >
            <Link to={item.link} target="_blank">
              <div className="w-full aspect-video">
                <img src={item.img} alt={item.title} className="h-full" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
