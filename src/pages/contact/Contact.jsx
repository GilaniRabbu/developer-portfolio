import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactPage = () => {
  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5rcp87w",
        "template_udv48tq",
        formRef.current,
        "SZCqfOKN5ON7VziFt"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="py-20 bg-zinc-100 dark:bg-zinc-950">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="max-w-7xl m-auto flex flex-col md:flex-row items-center justify-center"
      >
        <motion.div variants={variants} className="w-full md:w-1/2 p-3">
          <motion.div variants={variants}>
            <h2 className="font-bold font-serif text-center md:text-left text-3xl md:text-4xl mb-8 text-indigo-700 dark:text-indigo-400">
              Let's work together
            </h2>
            <p className="font-semibold text-center md:text-left text-lg md:text-xl tracking-wide text-blue-800 dark:text-blue-400">
              Hate forms? Send me an{" "}
              <a
                title="toufiqjilanirabbu7@gmail.com"
                href="mailto:toufiqjilanirabbu7@gmail.com"
                className="underline text-emerald-800 dark:text-emerald-400"
              >
                email
              </a>{" "}
              instead.
            </p>
          </motion.div>
          <motion.div variants={variants}>
            <img
              src="./mail.png"
              alt="Mail"
              className="max-w-32 py-5 m-auto md:m-0"
            />
          </motion.div>
        </motion.div>

        <div className="w-full md:w-1/2 p-3">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              className="bg-transparent p-4 outline-none tracking-wide rounded border border-solid text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
            />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              className="bg-transparent p-4 outline-none tracking-wide rounded border border-solid text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
            />
            <textarea
              rows={8}
              name="message"
              placeholder="Enter Message"
              className="bg-transparent p-4 outline-none tracking-wide rounded border border-solid text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
            />
            <button className="p-4 font-bold tracking-wider rounded text-blue-100 dark:text-blue-700 bg-blue-700 dark:bg-blue-100">
              Send Message
            </button>
            {error && "Error"}
            {success && "Success"}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
