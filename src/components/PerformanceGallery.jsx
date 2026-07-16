import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    X,
    Expand,
} from "lucide-react";
import { useRef, useState } from "react";

import stage1 from "../assets/stage1.jpeg";
import stage2 from "../assets/stage2.jpeg";
import stage3 from "../assets/stage3.jpeg";
import stage4 from "../assets/stage4.jpeg";

import open1 from "../assets/open1.jpeg";
import open2 from "../assets/open2.jpeg";
import open3 from "../assets/open3.jpeg";
import open4 from "../assets/open4.jpeg";

import acting1 from "../assets/acting1.jpeg";
import acting2 from "../assets/acting2.jpeg";
import acting3 from "../assets/acting3.jpeg";
import acting4 from "../assets/acting4.jpeg";

const gallery = [
    {
        title: "🎭 Stage Performances",
        images: [
            {
                image: stage1,
                title: "Awarded in Peoples university",
                description: "Recognised By Prabhat sir & Won in open mic."
            },
            {
                image: stage2,
                title: "Awarded in LNCT",
                description: "winning in state level Theatre competition"
            },
            {
                image: stage3,
                title: "Awarded in LNCT",
                description: "winning in Nodal level mimicry competition"
            },
            {
                image: stage4,
                title:"Awarded in Satna",
                description: "winning in state level mimicry competition"
            }
        ]
    },

    {
        title: "🎤 Open Mic",
        images: [
            {
                image: open1,
                title: "Mimicry",
                description: "Voice artistry & mimicry."
            },
            {
                image: open2,
                title: "Comedy",
                description: "Live audience interaction."
            },
            {
                image: open3,
                title: "Performance",
                description: "Confidence on stage."
            },
            {
                image: open4,
                title: "Voice Artist",
                description: "Creative expression."
            }
        ]
    },

    {
        title: "🎬 Live Acting",
        images: [
            {
                image: acting1,
                title: "Shiv-Sati Act",
                description: "Narad Muni "
            },
            {
                image: acting2,
                title: "Shivaji Act",
                description: "Chhatrapati Shivaji Maharaj"
            },
            {
                image: acting3,
                title: "Bapuji Act",
                description: "Middle-Class Beta"
            },
            {
                image: acting4,
                title: "Independence Day",
                description: "Bhagat Singh"
            }
        ]
    }
];

/* ---------- Single Netflix Row ---------- */

function GalleryRow({ section, onSelect }) {

    const rowRef = useRef(null);

    const slide = (direction) => {
        rowRef.current?.scrollBy({
            left: direction === "left" ? -420 : 420,
            behavior: "smooth",
        });
    };

    // Add this function
    const handleWheel = (e) => {
        if (rowRef.current) {
            e.preventDefault();
            rowRef.current.scrollLeft += e.deltaY;
        }
    };

    return (

        <div className="mb-20">

            {/* Heading */}

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {section.title}
                </h2>

                <div className="flex gap-3">

                    <button
                        onClick={() => slide("left")}
                        className="
              w-12
              h-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              hover:border-green-400
              hover:scale-110
              transition-all
            "
                    >
                        <ChevronLeft className="mx-auto text-white" />
                    </button>

                    <button
                        onClick={() => slide("right")}
                        className="
              w-12
              h-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              hover:border-green-400
              hover:scale-110
              transition-all
            "
                    >
                        <ChevronRight className="mx-auto text-white" />
                    </button>

                </div>

            </div>

            {/* Netflix Row */}

            <div
                ref={rowRef}
                onWheel={handleWheel}
                    className="
                        flex
                        gap-7
                        overflow-x-auto
                        scroll-smooth
                        pb-5
                        no-scrollbar
                            "
            >

                {section.images.map((item, index) => (

                    <motion.div

                        key={index}

                        initial={{
                            opacity: 0,
                            y: 60,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            delay: index * 0.08,
                            duration: .6,
                        }}

                        whileHover={{
                            y: -12,
                            scale: 1.05,
                        }}

                        onClick={() => onSelect(item)}

                        className="
              group
              relative
              min-w-[340px]
              rounded-3xl
              overflow-hidden
              cursor-pointer

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              hover:border-green-400/50

              hover:shadow-[0_0_60px_rgba(34,197,94,.35)]

              transition-all
              duration-500
            "

                    >

                        <img

                            src={item.image}

                            alt={item.title}

                            className="
                w-full
                h-72
                object-cover
                group-hover:scale-110
                transition-transform
                duration-700
              "

                        />

                        {/* Overlay */}

                        <div
                            className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
                        />

                        {/* Expand */}

                        <div
                            className="
                absolute
                top-5
                right-5

                w-12
                h-12

                rounded-full

                bg-black/40
                backdrop-blur-xl

                flex
                items-center
                justify-center

                opacity-0

                group-hover:opacity-100

                transition
              "
                        >

                            <Expand className="text-white" />

                        </div>

                        {/* Bottom */}

                        <div className="absolute bottom-0 left-0 p-6">

                            <h3 className="text-2xl font-bold text-white">

                                {item.title}

                            </h3>

                            <p className="text-gray-300 mt-2">

                                {item.description}

                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </div>

    );

}

export default function PerformanceGallery() {

    const [selected, setSelected] = useState(null);

    return (

        <section className="relative py-28 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-green-500/20 blur-[180px]" />

            <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-violet-500/20 blur-[180px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: .8 }}

                    className="text-center mb-20"

                >

                    <span className="uppercase tracking-[6px] text-green-400 text-sm">

                        Gallery

                    </span>

                    <h2 className="text-6xl font-black text-white mt-4">

                        Performance Journey

                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">

                        Every performance tells a story — from stage acting and mimicry
                        to open mic experiences and unforgettable moments.

                    </p>

                </motion.div>

                {/* Netflix Rows */}

                {gallery.map((section, index) => (

                    <GalleryRow

                        key={index}

                        section={section}

                        onSelect={setSelected}

                    />

                ))}

            </div>

            {/* ================= Fullscreen Modal ================= */}

            <AnimatePresence>

                {selected && (

                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        onClick={() => setSelected(null)}

                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-8"

                    >

                        <motion.div

                            initial={{

                                scale: .75,

                                opacity: 0,

                                y: 100,

                            }}

                            animate={{

                                scale: 1,

                                opacity: 1,

                                y: 0,

                            }}

                            exit={{

                                scale: .75,

                                opacity: 0,

                            }}

                            transition={{

                                duration: .45,

                            }}

                            onClick={(e) => e.stopPropagation()}

                            className="relative max-w-6xl w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10"

                        >

                            {/* Close */}

                            <button

                                onClick={() => setSelected(null)}

                                className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-red-500 transition"

                            >

                                <X className="mx-auto text-white" />

                            </button>

                            {/* Image */}

                            <img

                                src={selected.image}

                                alt={selected.title}

                                className="w-full max-h-[75vh] object-contain bg-black"

                            />

                            {/* Details */}

                            <div className="p-8">

                                <h2 className="text-4xl font-bold text-white">

                                    {selected.title}

                                </h2>

                                <p className="text-gray-300 mt-5 leading-8 text-lg">

                                    {selected.description}

                                </p>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>

    );

}