import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useMediaQuery } from "react-responsive";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function GitHubCard() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0d1117]/95 p-6 md:p-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaGithub className="text-4xl text-white" />

            <div>
              <h2 className="text-2xl font-bold text-white">
                GitHub Contributions
              </h2>

              <p className="text-gray-400">
                Live GitHub Calendar
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Anshulupadhyay61"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <FaExternalLinkAlt className="text-xl text-cyan-400" />
          </a>
        </div>

        {/* Calendar */}
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0d1117] p-4">
          <div className="min-w-max">
            <GitHubCalendar
              username="Anshulupadhyay61"
              colorScheme="dark"
              blockSize={isMobile ? 9 : 14}
              blockMargin={isMobile ? 3 : 5}
              fontSize={isMobile ? 11 : 14}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
              showWeekdayLabels
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}