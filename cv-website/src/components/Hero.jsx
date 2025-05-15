import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const achievements = [
  "Inspire Award Recipient",
  "Open Source Contributor",
  "AI & DS Minor"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto cursor-pointer select-none"
    >
      <h1 className="text-6xl font-extrabold mb-4 leading-tight relative inline-block text-primary">
        Chaitanya Malladi
        <motion.span
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded"
        />
      </h1>

      <p className="text-2xl font-light mb-6 max-w-xl text-gray-700 dark:text-gray-300">
        Computer Science (Hons.) @{" "}
        <a
          href="https://www.kluniversity.in/"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          KLEF
        </a>
      </p>

      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Contact: +91 7670881453 | radhakrishnachaitu@gmail.com
      </p>

    
      <div className="relative h-8 w-full max-w-md mb-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={achievements[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-primary select-text"
          >
            {achievements[index]}
          </motion.p>
        </AnimatePresence>
      </div>

<div className="flex flex-wrap gap-4 mt-6">
  <a
    href="#projects"
    className="px-8 py-3 bg-primary text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-primary transition-colors transform hover:scale-105 active:scale-95"
  >
    Check My Projects
  </a>

  <a
    href="/chaymall Resume.pdf"  // make sure to update this path
    download
    className="px-8 py-3 bg-black text-primary font-semibold rounded-full shadow-lg hover:bg-primary hover:text-black transition-colors transform hover:scale-105 active:scale-95"
  >
    Download Resume
  </a>
</div>

    </motion.section>
  );
}
