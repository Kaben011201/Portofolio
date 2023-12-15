import React from "react";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen py-10 md:flex-row flex-col items-center flex justify-center"
    >
      <div className="flex">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold text-center">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Bendry Lakburlawal</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 text-center">
            Front-End Developer and Informatic Engineering Student
          </h4>
          <button className="btn-primary mt-8 text-base">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center justify-center gap-5">
            {social_media?.map((icon) => (
              
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
