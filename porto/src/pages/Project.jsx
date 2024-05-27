import Slider from "react-slick";
import { projects } from "../components/Projects";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-[90%] w-full">
          <Slider {...settings}>
            {projects.map((project_info, i) => (
              <div className="px-2" key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-full h-40" />
                  <h3 className="text-xl my-4 line-clamp-2">{project_info.name}</h3>
                  <div className="flex gap-3">
                    {project_info.live_link !== "#" ? (
                      <a href={project_info.live_link} target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                        Live Demo
                      </a>
                    ) : (
                      <a href={project_info.img} target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                        Open Image
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Project;
