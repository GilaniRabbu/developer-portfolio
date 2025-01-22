import React from "react";

const ContactPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="mb-10 text-5xl text-center font-serif text-primary">
          Contact Me.
        </h2>
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold mb-10 w-full md:w-3/4 mx-auto text-center text-lg md:text-xl tracking-wide">
            I'm eager to join a collaborative team where I can contribute my
            skills and learn from others. If you have an exciting project, let's
            discuss how I can be a valuable asset. I'm actively seeking a new
            opportunity to apply my skills and continue growing!
          </p>
          <a
            className="text-2xl px-6 py-3 rounded-full border flex items-center justify-center text-primary border-primary transition-all duration-300 hover:border-[#377E86] dark:hover:border-[#659477] hover:text-[#FFFFFF] hover:dark:text-[#221E1E] hover:bg-[#377E86] hover:dark:bg-[#659477]"
            target="_blank"
            title="toufiqjilanirabbu7@gmail.com"
            href="mailto:toufiqjilanirabbu7@gmail.com"
          >
            Send Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
