import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";


import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.jpeg";



const achievements = [
    {
        title: "Awarded By Upendra Limaye",
        event: "AIU CENTRAL ZONE ",
        description:
            "Honoured by National Award-winning actor Upendra Limaye for excellence in performing arts, recognizing dedication to acting, mimicry, and stage performance.",
        image: m1,
    },
    {
        title: "State Level Mimicry",
        event: "State Cultural Competition",
        description:
            "Represented my institution at the state level, showcasing mimicry and stage performance skills.",
        image: m3,
    },
    {
        title: "Nodal Folk Dance Winner",
        event: "District level dance",
        description:
            "Achieved first place at the Nodal Level Folk Dance Competition, representing the institution with excellence in traditional dance, teamwork, and stage performance.",
        image: m2,
    },
    {
        title: "Nodals Mimicry Winner",
        event: "Nodals Mimicry Winner",
        description:
            "Achieved first place in the Nodal Level Mimicry Competition, showcasing exceptional voice modulation, creativity, and stage performance while representing the institution with excellence.",
        image: m4,
    },
];

export default function Testimonials() {
    return (
        <section
            id="achievements"
            className="relative py-28 px-6 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="uppercase tracking-[5px] text-violet-400 text-sm">
                        Achievements
                    </span>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
                        Hall of Achievements
                    </h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-[3px] bg-violet-500 rounded-full mx-auto mt-6"
                    />
                </motion.div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {achievements.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 80,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                            }}
                            className="group relative"
                        >
                            <div
                                className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:border-violet-500/50
                hover:bg-white/10
                hover:shadow-[0_20px_60px_rgba(139,92,246,.18)]
                "
                            >
                                {/* Animated Gradient */}
                                <div
                                    className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-violet-500/10
                  via-transparent
                  to-blue-500/10
                  "
                                />

                                {/* Quote Icon */}
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <Quote
                                        size={30}
                                        className="text-violet-400 opacity-70"
                                    />
                                </motion.div>

                                {/* User Image */}
                                <div className="relative overflow-hidden rounded-2xl mb-6">

                                    <motion.img
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: .5 }}
                                        src={item.image}
                                        alt={item.title}
                                        className="
                                        w-full
                                        h-64
                                        object-cover
                                        rounded-2xl
                                        "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                </div>

                                {/* Review */}
                                <p className="text-gray-300 leading-7 mt-2">
                                    {item.description}
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-[2px] bg-violet-500 mx-auto my-6 rounded-full" />

                                {/* Name */}
                                <h3 className="text-xl font-bold text-center text-white">
                                    {item.title}
                                </h3>

                                {/* Role */}
                                <p className="text-center text-gray-400 mt-2">
                                    {item.Event}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        
    );
}