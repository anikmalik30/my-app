"use client";
import { motion } from "framer-motion";
import Header from "../(home)/components/Header";
import React, { useState } from "react";

function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello";

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto sm:p-5">
          <Header />
        </div>
        <motion.div
          className="flex-grow"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* TEXT CONTAINER */}
            <div className="lg:w-1/2 flex items-center justify-center text-6xl">
              <div>
                {/* <motion.div> */}
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={letter}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                😊
                {/* </motion.div> */}
              </div>
            </div>
            {/* FORM CONTAINER */}
            <div className="h-full lg:w-1/2 lg:flex-row bg-stone-800 rounded-xl text-xl">
              <form className="h-1/2 flex flex-col lg:h-full gap-8  pt-14 pl-14 pr-14 pb-14">
                <span>Dear Anik Malik,</span>
                <textarea
                  rows={4}
                  className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                />
                <span>My mail address is:</span>
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-b-black outline-none"
                />
                <span>Regards</span>
                <button className="bg-stone-500 rounded font-semibold text-stone-300 p-4">
                  Send
                </button>
                {success && (
                  <span className="text-green-500 font-semibold">
                    Your message has been sent successfully!
                  </span>
                )}
                {error && (
                  <span className="text-red-500 font-semibold">
                    There was an error sending your message. Please try again
                    later.
                  </span>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default React.memo(ContactPage);