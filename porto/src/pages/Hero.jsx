const Hero = () => {
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
          <a className="btn-primary mt-8 text-base" href="#contact">Contact Me</a>
          <div className="mt-8 text-3xl flex items-center justify-center gap-5">            
            <a className="text-gray-600 hover:text-white cursor-pointer" 
              href="https://www.instagram.com/bndry_lkbrlwal/" target="_blank"><ion-icon name='logo-instagram'></ion-icon></a>
            <a className="text-gray-600 hover:text-white cursor-pointer"
               href="https://web.facebook.com/bendry.lakburlawal.9" target="_blank"><ion-icon name='logo-facebook'></ion-icon></a> 
            <a className="text-gray-600 hover:text-white cursor-pointer"
              href="https://www.linkedin.com/in/bendry-lakburlawal-2903002a4/" target="_blank"><ion-icon name='logo-linkedin'></ion-icon></a>                 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
