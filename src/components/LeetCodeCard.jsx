import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";

export default function LeetCodeCard() {
  const stats = [
    { title: "Solved", value: 54, color: "text-cyan-400" },
    { title: "Easy", value: 41, color: "text-green-400" },
    { title: "Medium", value: 13, color: "text-yellow-400" },
    { title: "Hard", value: 0, color: "text-red-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20 rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-xl p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="flex items-center gap-2 text-3xl font-bold">
            <Trophy className="text-yellow-400" />
            LeetCode
          </h2>
          <p className="text-gray-400 mt-2">
            My Problem Solving Journey
          </p>
        </div>

        <a
          href="https://leetcode.com/u/anshulupadhyay61/"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-300 transition"
        >
          View Profile
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <CheckCircle className={`mx-auto mb-3 ${item.color}`} size={28} />
            <p className="text-gray-400">{item.title}</p>
            <h3 className={`mt-2 text-4xl font-bold ${item.color}`}>
              {item.value}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}