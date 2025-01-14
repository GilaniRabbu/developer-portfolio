import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";

export default function Contact() {
  return (
    <section className="min-h-screen text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-20">
        <AnimatedWord
          text="ContactMe"
          className="text-center mb-20 text-7xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
        />
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h2 className="capitalize md:text-4xl text-2xl w-11/12 lg:w-3/4 mb-4 tracking-wide font-bonny-bold">
              I am always here to assist you and respond to your inquiries
            </h2>
            <p className="mb-8 w-11/12 lg:w-3/4 text-lg tracking-wide">
              Whether you have questions, need assistance, or simply want to
              share your thoughts, I am eager to hear from you. Feel free to
              connect with me through any of the methods below, and I will get
              back to you promptly. I look forward to hearing from you!
            </p>
            <div className="mt-6 space-y-6">
              <p className="flex flex-col gap-1 tracking-wide">
                <span>My Location</span>
                <span className="w-72 truncate">
                  South Khilgaon, Dhaka - 1219
                </span>
              </p>
              <p className="flex flex-col gap-1 tracking-wide">
                <span>My Email</span>
                <span className="w-72 truncate">
                  toufiqjilanirabbu@gmail.com
                </span>
              </p>
            </div>
            <div className="mt-6">
              <h3 className="tracking-wide">Social Network</h3>
              <div className="flex gap-4 mt-1">
                <a className="transform" href="#">
                  <span>f</span>
                </a>
                <a className="transform" href="#">
                  <span>in</span>
                </a>
                <a className="transform" href="#">
                  <span>x</span>
                </a>
                <a className="transform" href="#">
                  <span>g</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:mx-6">
            <div className="w-full lg:max-w-xl px-8 py-10 mx-auto overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded bg-white dark:bg-gray-800">
              <h2 className="text-4xl mb-4 font-bonny-bold">Get in Touch</h2>
              <p className="mb-4 text-lg tracking-wide">
                Define your goals and identify areas where I can add value to
                your business.
              </p>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="block w-full px-5 py-3 outline-none border-b border-gray-900 dark:border-white bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="block w-full px-5 py-3 outline-none border-b border-gray-900 dark:border-white bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    defaultValue={""}
                    placeholder="Message"
                    className="block w-full h-28 md:h-44 px-5 py-3 outline-none border-b border-gray-900 dark:border-white bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <button className="w-full px-6 py-3 text-sm tracking-wide capitalize rounded-md transition-colors duration-300 transform text-white bg-blue-600 hover:bg-blue-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
