import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
    <div className="py-16 bg-zinc-100 dark:bg-zinc-950 flex justify-center items-center">
      <div className="max-w-[500px] m-auto p-6 rounded shadow-[0px_0px_15px_10px] shadow-blue-700/5 dark:shadow-blue-400/5">
        <h2 className="font-bold font-serif text-center text-3xl md:text-4xl mb-5 text-indigo-700 dark:text-indigo-400">
          Let's work together
        </h2>
        <p className="font-semibold text-center text-lg md:text-xl tracking-wide text-blue-800 dark:text-blue-400">
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
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          src="./mail.png"
          alt="Mail"
          className="max-w-32 py-5 m-auto cursor-pointer"
        />
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className="bg-transparent p-4 outline-none tracking-wide rounded border border-solid text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            className="bg-transparent p-4 outline-none tracking-wide rounded border border-solid text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Enter Message"
            className="bg-transparent p-4 outline-none tracking-wide rounded border border-solid text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
          />
          <motion.button
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 1 }}
            className="p-4 font-bold tracking-wider rounded text-blue-100 dark:text-blue-700 bg-blue-700 dark:bg-blue-100"
          >
            Send Message
          </motion.button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
