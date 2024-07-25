import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const contact_info = [
    {
      logo: "mail",
      text: "bendrylakburlawal01@gmail.com",
      api: "mailto:bendrylakburlawal01@gmail.com",
    },
    {
      logo: "logo-whatsapp",
      text: "0821 3035 3114",
      api: "https://wa.me/082130353114",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21mmrmk",
        "template_z13ot3v",
        form.current,
        "2oKAWXADSXZc-X38b"
      )
      .then(
        (result) => {
          toast.success("Pesan anda berhasil dikirim!");
          console.log(result.text);
        },
        (error) => {
          toast.error("Pesan anda gagal dikirim!");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input type="text" name="user_name" placeholder="Your Name" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
            />
            <textarea
              className="resize-none"
              name="message"
              placeholder="Your Message"
              rows={5}
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <a
                href={contact.api}
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo} />
                </div>
                <div className="md:text-base text-sm  break-words">
                  {contact.text}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
