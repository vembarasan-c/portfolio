// import Containers from "./ui/Container.jsx";
// import image from "../assets/media-1.jpg";
import Title from "./ui/Title.jsx";
import projects from "./util/projects.js";

function Project() {
  return (
    <div className="  mx-auto  scroll-mt-10 min-h-screen" id="project">
      <Title title="Projects" />
      <div className="container mx-auto mt-4 p-4 ">
        <div className="grid md:grid-cols-3  sm:mx-auto sm:grid-cols-2 sm:gap-4 md:gap-4 justify-center mx-[8%] gap-4">
          {projects.map((mediaList) => (
            <div
              key={mediaList.id}
              className="shadow-sm shadow-cyan-300  hover:shadow-md hover:shadow-cyan-300  rounded-xl  bg-slate-800  sm:w-62      border-2 border-gray-300 overflow-hidden"
            >
              <a href={mediaList.link}>
                <img
                  className=" rounded-[16px] w-full h-46 sm:h-64 hover:cursor-pointer  px-2 py-2 object-cover  "
                  src={mediaList.image}
                />
              </a>

              <hr className="  mx-4  shadow-sm  shadow-gray-200  border-gray-400 " />
              <div className="py-1  text-slate-200  text-center  space-y-1 mt-1 ">
                <div className=" mx-2 flex justify-center overflow-inline space-x-3 ">
                  <a
                    className=" hover:underline-blue hover:text-blue-200 sm:mt-1  "
                    href={mediaList.link}
                  >
                    <p className="text-md  sm:text-lg md:text-xl text-overflow-inline font-semibold">
                      {mediaList.projectName}
                    </p>
                  </a>
                </div>

                <p className=" mx-4 text-xs  sm:text-xs md:text-sm text-left    text-gray-400 ">
                  {mediaList.description}
                </p>
                <p className="text-left pb-1 mx-4 text-gray-400 text-xs ">
                  {mediaList.technologiesUsed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
