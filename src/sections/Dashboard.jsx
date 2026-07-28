// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCode, FaTerminal } from "react-icons/fa";
import GitHubCard from "../components/GitHubCard";
import GitHubStats from "../components/GitHubStats";
import GitHubProfile from "../components/GitHubProfile";
import RecentRepos from "../components/RecentRepos";
import AuroraBackground from "../components/AuroraBackground";
import MouseGlow from "../components/MouseGlow";
// import LeetCodeCard from "../components/LeetCodeCard";


export default function Dashboard() {
    const [open, setOpen] = useState(false);

return (

<section
id="dashboard"
className="relative overflow-hidden py-32 px-6"
>
    <MouseGlow />
<AuroraBackground />

{/* ================= BACKGROUND ================= */}

<div className="absolute inset-0 -z-20 overflow-hidden">

<div className="absolute left-1/2 top-20 h-[700px] w-[700px]
-translate-x-1/2 rounded-full
bg-cyan-500/10 blur-[180px]" />

<div className="absolute bottom-0 right-0
h-[450px]
w-[450px]
rounded-full
bg-blue-600/10
blur-[180px]" />

<div className="absolute left-0 top-96
h-[300px]
w-[300px]
rounded-full
bg-violet-500/10
blur-[140px]" />

</div>

<div className="mx-auto max-w-7xl">

{/* HERO */}

<motion.div

initial={{opacity:0,y:80}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

className="text-center"

>

<div
className="inline-flex
items-center
gap-3
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
backdrop-blur-xl
px-6
py-3"

>

<FaCode className="text-cyan-400"/>

<span
className="uppercase
tracking-[4px]
text-cyan-300
text-sm">

Developer Dashboard

</span>

</div>

<h1
className="mt-10
text-6xl
md:text-8xl
font-black
leading-tight">

Engineering

<br/>

<span
className="bg-gradient-to-r
from-cyan-300
via-white
to-cyan-500
bg-clip-text
text-transparent">

Digital Excellence

</span>

</h1>

<p
className="mx-auto
mt-8
max-w-3xl
text-lg
leading-9
text-gray-400">

Building immersive web experiences using

React,

Tailwind CSS,

Framer Motion

and modern frontend technologies.

</p>

</motion.div>

<div className="mt-16 flex justify-center">

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}

    onClick={() => {
  setOpen(true);

  setTimeout(() => {
    document
      .getElementById("developer-terminal")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
}}
    className="
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      px-8
      py-4
      text-lg
      font-bold
      text-white
      shadow-lg
      hover:shadow-cyan-500/30
      transition-all
    "
  >
    {open ? "Hide Dashboard ↑" : "Open Developer Dashboard ↓"}
  </motion.button>

</div>

{/* TERMINAL */}

<AnimatePresence>

{open && (

<motion.div id="developer-terminal"

initial={{
  opacity: 0,
  y: 100,
  scale: 0.95,
}}

whileInView={{
  opacity: 1,
  y: 0,
  scale: 1,
}}

viewport={{
  once: true,
  amount: 0.3,
}}

transition={{
  duration: 0.8,
  ease: "easeOut",
}}

className="relative mt-24"

>

<div
className="absolute
inset-0
rounded-[40px]
bg-cyan-500/10
blur-[120px]"
/>

<div
className="relative
overflow-hidden
rounded-[32px]
border
border-cyan-400/20
bg-[#0d1117]/95
backdrop-blur-3xl
shadow-[0_20px_80px_rgba(0,255,255,.15)]">

{/* HEADER */}

<div
className="flex
items-center
justify-between
border-b
border-white/10
bg-black/30
px-8
py-5">

<div className="flex gap-3">

<div className="h-3.5 w-3.5 rounded-full bg-red-500"/>

<div className="h-3.5 w-3.5 rounded-full bg-yellow-400"/>

<div className="h-3.5 w-3.5 rounded-full bg-green-500"/>

</div>

<div
className="flex
items-center
gap-3
text-gray-400">

<FaTerminal/>

developer@portfolio

</div>

</div>

{/* BODY */}

<div className="relative p-10">

<div
className="absolute
-left-10
top-0
h-72
w-72
rounded-full
bg-cyan-500/10
blur-[100px]"
/>

<div
className="absolute
right-0
bottom-0
h-72
w-72
rounded-full
bg-violet-500/10
blur-[100px]"
/>

<div className="relative">

<GitHubProfile />

<div className="h-10"/>
<GitHubCard/>
<GitHubStats />
<RecentRepos />

{/* <div className="h-12" />
<LeetCodeCard /> */}

</div>

</div>

</div>

</motion.div>
)}

</AnimatePresence>

</div>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#08111b] pointer-events-none" />
</section>

);

}