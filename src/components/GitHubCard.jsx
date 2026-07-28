import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function GitHubCard() {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0d1117]/95 p-8"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

            <div className="relative">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <FaGithub className="text-4xl text-white" />

                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                GitHub Contributions
                            </h2>

                            <p className="text-gray-400">
                                Live Contribution Graph
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://github.com/Anshulupadhyay61"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaExternalLinkAlt className="text-cyan-400 text-xl" />
                    </a>
                </div>

                <img
                    src="https://ghchart.rshah.org/2563eb/Anshulupadhyay61"
                    alt="GitHub Contributions"
                    className="w-full rounded-xl"
                />
            </div>
        </motion.div>
    );
}