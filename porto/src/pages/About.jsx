
import myCV from '../assets/Bendry_Lakburlawal_CV.pdf'
const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl md:text-6xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-4 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 mb-3 flex flex-col justify-center">
              <p className="text-center leading-7 w-11/12 mx-auto md:text-xl">
                I&apos;m still studiying at Institute Tecnology Sumatera. Now, I have taken 6
                semesters to learn about informatic engineering and I have learned some 
                programming languages for website development. I have completed some project for 
                website based on HTML, CSS (Vanilla and Tailwind), PHP, and JavaScript(Vanilla, NextJS).
              </p>
              
              <br />
              <br />
              <a className="self-center" href={myCV} download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
