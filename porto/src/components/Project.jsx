import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Posyandu Mawar I Way Huwi Data Management Website",
      github_link: "https://github.com/Kaben011201/TUBES_KAPITA_SELEKTA_09_2023",
      live_link: "#",
    },
    {
      img: project2,
      name: "Pemilihan Raya Institut Teknologi Sumatera 2023",
      github_link: "https://github.com/PemiraITERA/pemira2023",
      live_link: "#",
    },
    {
      img: project3,
      name: "Duplicate Youtube - Super Simple Dev",
      github_link: "https://github.com/Kaben011201/Duplicate_Youtube",
      live_link: "https://kaben011201.github.io/Duplicate_Youtube.github.io/",
    },
    {
      img: project4,
      name: "CRUD Website - Final Exam Website Programming",
      github_link: "https://github.com/Kaben011201/UAS_PEMWEB",
      live_link: "https://121140111-uas-pemweb.000webhostapp.com",
    },
    {
      img: project5,
      name: "Simple Website - Midterm Exam Website Programming",
      github_link: "https://github.com/Kaben011201/UTS_PEMWEB.github.io",
      live_link: "https://kaben011201.github.io/UTS_PEMWEB.github.io/",
    }    
  ];
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
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-full" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {project_info.live_link !== "#" ? (
                        <a
                          href={project_info.live_link}
                          target="_blank"
                          className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                        >
                          Live Demo
                        </a>
                      ) : (
                        <a
                          href={project_info.img}
                          target="_blank"
                          className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                        >
                          Open Image
                        </a>
                      )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
