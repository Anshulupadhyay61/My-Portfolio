import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

export default function RecentRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Anshulupadhyay61/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-10 text-center text-4xl font-black"
      >
        Recent Repositories
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[1px]">
              <div className="h-full w-full rounded-3xl bg-[#0d1117]/95" />
            </div>

            <div className="relative p-8">

              <div className="flex justify-between">

                <FaGithub className="text-4xl text-cyan-400" />

                <FaArrowRight className="transition group-hover:translate-x-2" />

              </div>

              <h2 className="mt-6 text-2xl font-bold">

                {repo.name}

              </h2>

              <p className="mt-4 line-clamp-2 text-gray-400">

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
        ))}
      </div>
    </section>
  );
}