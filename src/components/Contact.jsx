import React from "react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: "ri-linkedin-box-fill",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/k%C3%A3l%C3%A3sh-v%C3%AArm%C3%A3-487266255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: "ri-github-fill",
    label: "GitHub",
    url: "https://github.com/kalash930",
  },
  {
    icon: "ri-instagram-fill",
    label: "Instagram",
    url: "https://www.instagram.com/_mr__perfect___kv",
  },
  {
    icon: "ri-mail-fill",
    label: "Email",
    url: "mailto:kalashverma930555@gmail.com",
  },
  {
    icon: "ri-phone-fill",
    label: "Phone",
    url: "tel:+919305550187",
  },
];

const Contact = () => {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center ml-[30%]">
      <div className="flex flex-col items-center justify-center bg-black  w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Contact Me 📞
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.80 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-md hover:bg-white/20 transition"
            >
              <i className={`text-3xl text-red-400 ${item.icon}`}></i>
              <span className="text-white font-medium text-lg">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-gray-400 text-sm text-center max-w-md"
        >
          Thank you for visiting my movie app! 🎬
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
