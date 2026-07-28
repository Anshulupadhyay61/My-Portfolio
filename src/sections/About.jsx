import { motion } from "framer-motion";
import profile from "../assets/p.png";

const cardVariant = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

export default function About() {
    return (
        <section
            id="about"
            className="
min-h-screen
flex
items-center
justify-center
px-5
sm:px-8
lg:px-6
py-24
relative
"
        >
            <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
max-w-6xl
w-full
grid
grid-cols-1
lg:grid-cols-2
gap-16
items-center
"
            >
                {/* Left Side */}

                {/* Left Side */}

                <div
                    className="flex justify-center"
                    style={{ perspective: "1500px" }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -60, rotateY: -25 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            rotateY: 0,
                        }}
                        whileHover={{
                            rotateY: 12,
                            rotateX: 6,
                            scale: 1.04,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Green Glow */}

                        <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-cyan-400/10 blur-[100px]" />

                        <div className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[330px] lg:h-[330px] rounded-full border border-cyan-400/20 animate-pulse" />

                        {/* Rotating Ring */}

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 18,
                                ease: "linear",
                            }}
                            className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] lg:w-[350px] lg:h-[350px] rounded-full border border-cyan-400/20 border-dashed"
                        />

                        <div
                            className="
absolute
w-[380px]
h-[380px]
rounded-full
border
border-cyan-400/20
blur-sm
"
                        />

                        {/* Image */}

                        <div
                            style={{
                                transform: "translateZ(60px)",
                                transformStyle: "preserve-3d",
                            }}
                            className="
relative
w-[240px]
h-[240px]
sm:w-[300px]
sm:h-[300px]
lg:w-[360px]
lg:h-[360px]
rounded-full
overflow-hidden
border-[5px]
border-cyan-300/50
bg-black/20
backdrop-blur-md
shadow-[0_40px_120px_rgba(34,211,238,.45)]
ring-4
ring-cyan-400/10
"
                        >

                            <motion.img
                                src={profile}
                                alt="Profile"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                }}
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </motion.div>
                </div>

                

                {/* Right */}

                <div className="text-center lg:text-left">

                    <p className="text-cyan-400 text-base lg:text-lg font-semibold">
                        ABOUT ME
                    </p>

                    <h2 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
mt-2
">
                        Anshul Upadhyay
                    </h2>

                    <h3 className="
text-base
sm:text-lg
lg:text-xl
text-gray-300
mt-2
">
                        Software Engineer • Trader • Actor • Voice Artist
                    </h3>

                    <p className="
text-gray-400
mt-6
leading-7
text-sm
sm:text-base
lg:text-lg
">
                        • I'm a Computer Science Engineering student passionate about Full
                        Stack Development, Artificial Intelligence, Data Science, and
                        problem-solving through Data Structures & Algorithms. I enjoy
                        building scalable applications that combine innovation with great
                        user experiences.</p>
                    <p className="
text-gray-400
mt-6
leading-7
text-sm
sm:text-base
lg:text-lg
">
                        • Beyond software development, I actively explore the Indian Stock and
                        Forex markets, applying technical analysis, market psychology, and
                        risk management to make disciplined decisions.</p>

                    <p className="
text-gray-400
mt-6
leading-7
text-sm
sm:text-base
lg:text-lg
">
                        • As the Cultural Head of the Student Activity Council (SAC), I have
                        led teams and organized impactful events while strengthening my
                        leadership and communication skills. Outside technology, I express
                        my creativity through acting, voice artistry, mimicry, and
                        beatboxing, believing that innovation is driven by both logic and
                        creativity.</p>



                    {/* Cards */}

                    <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
mt-10
">

                        <div
                            className="rounded-2xl border border-white/10
              bg-white/5 p-5 backdrop-blur-lg"
                        >
                            <p className="text-gray-400 text-sm">
                                Trading Experience
                            </p>

                            <h4 className="text-2xl font-bold mt-2">
                                6+ Years
                            </h4>
                        </div>

                        <div
                            className="rounded-2xl border border-white/10
              bg-white/5 p-5 backdrop-blur-lg"
                        >
                            <p className="text-gray-400 text-sm">
                                Focus
                            </p>

                            <h4 className="text-xl font-bold mt-2">
                                Web Dev/Data Analyst/DSA
                            </h4>
                        </div>

                        <div
                            className="rounded-2xl border border-white/10
              bg-white/5 p-5 backdrop-blur-lg"
                        >
                            <p className="text-gray-400 text-sm">
                                Theatre
                            </p>

                            <h4 className="text-xl font-bold mt-2">
                                Beatboxing
                                Acting/
                                Mimicry/
                            </h4>
                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="
flex
flex-col
sm:flex-row
gap-5
mt-10
justify-center
lg:justify-start
">

                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-full
              bg-cyan-400 text-black font-semibold
              hover:scale-105 duration-300"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-full
              border border-gray-600
              hover:border-cyan-400 duration-300"
                        >
                            Contact Me
                        </a>

                    </div>

                </div>
            </motion.div>
        </section>
    );
}