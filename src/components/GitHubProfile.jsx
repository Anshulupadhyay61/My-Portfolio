import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaMapMarkerAlt,
  FaGlobe,
  FaBuilding,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function GitHubProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Anshulupadhyay61")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return (
      <div className="text-center py-12 text-gray-400">
        Loading Profile...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="relative overflow-hidden rounded-[35px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

      {/* Border */}

      <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[1px]">

        <div className="h-full w-full rounded-[35px] bg-[#0d1117]/95 backdrop-blur-3xl"/>

      </div>

      {/* Content */}

      <div className="relative p-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}

        <div className="flex items-center gap-8">

          <motion.img

            whileHover={{
              rotate: 6,
              scale: 1.05
            }}

            src={user.avatar_url}

            alt="avatar"

            className="h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_40px_rgba(0,255,255,.35)]"

          />

          <div>

            <h1 className="text-4xl font-black">

              {user.name}

            </h1>

            <p className="mt-2 text-cyan-400">

              @{user.login}

            </p>

            <p className="mt-5 text-gray-400 leading-8">

              {user.bio}

            </p>

            <motion.a

              whileHover={{
                x:5
              }}

              href={user.html_url}

              target="_blank"

              rel="noreferrer"

              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"

            >

              <FaGithub/>

              Visit GitHub

              <FaArrowRight/>

            </motion.a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="grid gap-5">

          <Info
            icon={<FaMapMarkerAlt/>}
            label="Location"
            value={user.location || "Not Available"}
          />

          <Info
            icon={<FaBuilding/>}
            label="Company"
            value={user.company || "Open Source"}
          />

          <Info
            icon={<FaGlobe/>}
            label="Website"
            value={user.blog || "Not Available"}
          />

          <Info
            icon={<FaCalendarAlt/>}
            label="Joined"
            value={new Date(user.created_at).toDateString()}
          />

        </div>

      </div>

    </motion.div>
  );
}

function Info({ icon, label, value }) {
  return (
    <motion.div

      whileHover={{
        x:8
      }}

      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"

    >

      <div className="flex items-center gap-4">

        <div className="text-cyan-400 text-2xl">

          {icon}

        </div>

        <div>

          <p className="text-sm text-gray-400">

            {label}

          </p>

          <h3 className="font-semibold">

            {value}

          </h3>

        </div>

      </div>

    </motion.div>
  );
}