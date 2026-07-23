import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Quote,
    ChevronLeft,
    ChevronRight,
    Image as ImageIcon,
} from "lucide-react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.jpeg";

import sharib1 from "../assets/sharib1.jpeg";
import sharib3 from "../assets/sharib3.jpeg";

const achievements = [
    {
        title: (
            <>
                Worked with Sharib Hashmi
                <br />
                <span className="text-base font-normal text-gray-400">
                    (JK from Family Man Series)
                </span>
            </>
        ),

        // event: "Theatre Play • Breast of Luck",

        description:
            "Had the opportunity to share the stage with renowned actor Sharib Hashmi during the theatre production 'Breast of Luck'. This experience enhanced my acting skills, stage confidence, teamwork, and understanding of live theatrical performances while working alongside an accomplished artist.",

        images: [sharib1, sharib3],

        badge: "⭐ Featured Achievement",
    },

    {
        title: "Awarded By Upendra Limaye",

        event: "AIU Central Zone",

        description:
            "Honoured by National Award-winning actor Upendra Limaye for excellence in performing arts, recognizing dedication to acting, mimicry, and stage performance.",

        image: m1,

         badge: "🏆 Most Prestigious Award",
    },

    {
        title: "State Level Mimicry",

        event: "State Cultural Competition",

        description:
            "Represented my institution at the State Level Cultural Competition, showcasing mimicry, voice artistry, and stage performance skills.",

        image: m3,
    },

    {
        title: "Nodal Folk Dance Winner",

        event: "District Level Competition",

        description:
            "Secured First Position in the Nodal Level Folk Dance Competition, representing the institution with excellence in traditional dance and teamwork.",

        image: m2,
    },

    {
        title: "Nodals Mimicry Winner",

        event: "Nodal Level Competition",

        description:
            "Achieved First Position in the Nodal Level Mimicry Competition through voice modulation, creativity, comic timing, and live stage performance.",

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

                {/* ================= Heading ================= */}

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

                {/* ================= Cards ================= */}

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

                                {/* Featured Badge */}

                                {item.badge && (
                                    <div
                                        className={`absolute top-5 left-5 z-30 px-4 py-2 rounded-full text-white text-xs font-bold shadow-xl ${item.badge.includes("Prestigious")
                                            ? "bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                                            : "bg-gradient-to-r from-violet-600 to-fuchsia-600"
                                            }`}
                                    >
                                        {item.badge}
                                    </div>
                                )}

                                {/* Quote */}

                                <motion.div
                                    whileHover={{
                                        rotate: 15,
                                        scale: 1.1,
                                    }}
                                    className="absolute top-6 right-6 z-20"
                                >
                                    <Quote
                                        size={30}
                                        className="text-violet-400 opacity-70"
                                    />
                                </motion.div>

                                {/* Image Section */}

                                <div className="relative overflow-hidden rounded-2xl mb-6">
                                    {item.images ? (

                                        <>
                                            <Swiper
                                                modules={[Navigation, Pagination]}
                                                navigation={{
                                                    nextEl: `.next-${index}`,
                                                    prevEl: `.prev-${index}`,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    dynamicBullets: true,
                                                }}
                                                className="rounded-2xl"
                                            >
                                                {item.images.map((img, i) => (

                                                    <SwiperSlide key={i}>

                                                        <motion.img
                                                            src={img}
                                                            alt="Achievement"
                                                            whileHover={{ scale: 1.08 }}
                                                            transition={{ duration: .5 }}
                                                            className="
                                w-full
                                h-64
                                object-cover
                                rounded-2xl
                              "
                                                        />

                                                    </SwiperSlide>

                                                ))}
                                            </Swiper>

                                            {/* Left Arrow */}

                                            <button
                                                className={`
                          prev-${index}
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          z-30
                          w-11
                          h-11
                          rounded-full
                          bg-black/60
                          backdrop-blur-md
                          border
                          border-white/20
                          text-white
                          flex
                          items-center
                          justify-center
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-300
                          hover:bg-violet-600
                          hover:scale-110
                        `}
                                            >
                                                <ChevronLeft size={22} />
                                            </button>

                                            {/* Right Arrow */}

                                            <button
                                                className={`
                          next-${index}
                          absolute
                          right-4
                          top-1/2
                          -translate-y-1/2
                          z-30
                          w-11
                          h-11
                          rounded-full
                          bg-black/60
                          backdrop-blur-md
                          border
                          border-white/20
                          text-white
                          flex
                          items-center
                          justify-center
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-300
                          hover:bg-violet-600
                          hover:scale-110
                        `}
                                            >
                                                <ChevronRight size={22} />
                                            </button>

                                            {/* Image Counter */}

                                            <div
                                                className="
                          absolute
                          bottom-4
                          right-4
                          z-30
                          px-3
                          py-1
                          rounded-full
                          bg-black/60
                          backdrop-blur-md
                          text-white
                          text-xs
                          font-semibold
                        "
                                            >
                                                <ImageIcon
                                                    size={13}
                                                    className="inline mr-1"
                                                />
                                                {item.images.length} Photos
                                            </div>

                                        </>

                                    ) : (

                                        <motion.img
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: .5 }}
                                            src={item.image}
                                            alt={typeof item.title === "string" ? item.title : "Achievement"}
                                            className="
                        w-full
                        h-64
                        object-cover
                        rounded-2xl
                      "
                                        />

                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                </div>
                                {/* Description */}

                                <p className="text-gray-300 leading-7 mt-2">
                                    {item.description}
                                </p>

                                {/* Divider */}

                                <div className="w-16 h-[2px] bg-violet-500 mx-auto my-6 rounded-full" />

                                {/* Title */}

                                <h3 className="text-xl font-bold text-center text-white">
                                    {item.title}
                                </h3>

                                {/* Event */}

                                <p className="text-center text-gray-400 mt-2">
                                    {item.event}
                                </p>

                            </div>
                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}