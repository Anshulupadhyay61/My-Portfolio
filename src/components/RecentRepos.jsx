import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaStar,
  FaCodeBranch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function RecentRepos() {
  const [repos, setRepos] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Anshulupadhyay61/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const nextRepo = () => {
    if (!repos.length) return;
    setCurrent((prev) => (prev + 1) % repos.length);
  };

  const prevRepo = () => {
    if (!repos.length) return;
    setCurrent((prev) => (prev - 1 + repos.length) % repos.length);
  };

  if (!repos.length) {
    return (
      <section className="mt-20">
        <h2 className="mb-10 text-center text-4xl font-black">
          Recent Repositories
        </h2>

        <div className="text-center text-gray-400">
          Loading repositories...
        </div>
      </section>
    );
  }

  const repo = repos[current];

  return (
    <section className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-10 text-center text-4xl font-black"
      >
        Recent Repositories
      </motion.h2>
            <div className="relative">

        <AnimatePresence mode="wait">

          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.45 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative block overflow-hidden rounded-3xl"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[1px]">
              <div className="h-full w-full rounded-3xl bg-[#0d1117]/95" />
            </div>

            <div className="relative p-8">

              <div className="flex items-center justify-between">

                <FaGithub className="text-4xl text-cyan-400" />

                <FaArrowRight className="transition group-hover:translate-x-2" />

              </div>

              <h2 className="mt-6 text-2xl font-bold break-words">
                {repo.name}
              </h2>

              <p className="mt-4 text-gray-400 leading-7">
                {repo.description || "No description available."}
              </p>

              <div className="mt-8 flex flex-wrap gap-6">

                <span className="flex items-center gap-2">

                  <FaStar />

                  {repo.stargazers_count}

                </span>

                <span className="flex items-center gap-2">

                  <FaCodeBranch />

                  {repo.forks_count}

                </span>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">

                  {repo.language || "Code"}

                </span>

              </div>

            </div>

          </motion.a>

        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-5">

          <button
            onClick={prevRepo}
            className="rounded-full border border-cyan-400/20 bg-cyan-500/10 p-4 transition-all hover:scale-110 hover:bg-cyan-500/20"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2">

            {repos.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  current === index
                    ? "bg-cyan-400 w-8"
                    : "bg-gray-600 hover:bg-cyan-300"
                }`}
              />

            ))}

          </div>

          <button
            onClick={nextRepo}
            className="rounded-full border border-cyan-400/20 bg-cyan-500/10 p-4 transition-all hover:scale-110 hover:bg-cyan-500/20"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>

    </section>
  );
}