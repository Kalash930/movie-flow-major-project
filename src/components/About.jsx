import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1F1E24] text-white px-6 py-12 md:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        About MovieFlow 🎬
      </motion.h1>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl border border-white/20"
      >
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          <span className="font-semibold text-red-400">MovieFlow</span> is your ultimate movie exploration app powered by <span className="text-blue-400">TMDB API</span>. It helps users discover trending films, TV shows, and famous personalities — all with rich visuals, trailers, and IMDB links. 🌐✨
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 items-start"
          >
            <i className="ri-movie-2-line text-yellow-400 text-3xl mt-1"></i>
            <div>
              <h2 className="text-xl font-semibold mb-1">What It Offers</h2>
              <ul className="list-disc ml-4 text-gray-200">
                <li>Explore trending and popular movies & shows</li>
                <li>View cast, crew, and detailed info</li>
                <li>Watch trailers via React Player</li>
                <li>Visit social & IMDb links directly</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 items-start"
          >
            <i className="ri-code-s-slash-line text-green-400 text-3xl mt-1"></i>
            <div>
              <h2 className="text-xl font-semibold mb-1">Tech Stack</h2>
              <ul className="list-disc ml-4 text-gray-200">
                <li>React + Vite for blazing-fast frontend</li>
                <li>TailwindCSS for custom styling</li>
                <li>Framer Motion for smooth animations</li>
                <li>TMDB API for real-time content</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-md text-gray-400 italic">
            This project is part of my learning journey in web development — no backend used (yet 😉).
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
