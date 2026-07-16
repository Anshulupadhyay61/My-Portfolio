import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, Briefcase, Send } from "lucide-react";
import astronaut from "../assets/astra.png";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { useRef, useState } from "react";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            "service_mh38zam",
            "template_77blgxj",
            form.current,
            "gJw1fb2inWebG23rq"
        )
        .then(() => {
            alert("Message Sent Successfully 🚀");
        })
        .catch(() => {
            alert("Something went wrong.");
        });

    };

    const [service, setService] = useState("");

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >

                    <span className="uppercase tracking-[6px] text-violet-400 text-sm">
                        Contact
                    </span>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
                        Let's Work Together
                    </h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 130 }}
                        transition={{ delay: .3 }}
                        className="h-[3px] bg-violet-500 rounded-full mx-auto mt-5"
                    />

                </motion.div>

                {/* Main Container */}

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .9 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >

                        {/* Floating Glow */}

                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [.25, .45, .25],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="
              absolute
              w-80
              h-80
              rounded-full
              bg-violet-500/10
              blur-[100px]
              "
                        />

                        {/* Astronaut */}

                        <motion.img
                            src={astronaut}
                            alt="Astronaut"
                            animate={{
                                y: [0, -25, 0],
                                rotate: [-3, 3, -3],
                                x: [0, 10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
              relative
              z-10
              w-[320px]
              md:w-[430px]
              drop-shadow-[0_0_35px_rgba(139,92,246,.45)]
              "
                        />

                    </motion.div>

                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .9 }}
                        viewport={{ once: true }}
                        className=" relative
    overflow-hidden
    backdrop-blur-2xl
    bg-white/[0.04]
    border
    border-white/10
    rounded-[30px]
    p-6
    sm:p-8
    shadow-[0_25px_80px_rgba(0,0,0,.45)]"
                    >
                        {/* Animated Background Glow */}

                        <div
                            className="
        absolute
        -top-40
        -right-40
        w-80
        h-80
        rounded-full
        bg-violet-500/10
        blur-[120px]
        animate-pulse
        "
                        />

                        <div
                            className="
        absolute
        -bottom-40
        -left-40
        w-80
        h-80
        rounded-full
        bg-blue-500/10
        blur-[120px]
        animate-pulse
        "
                        />

                        {/* Form Content */}

                        <div className="relative z-10">


                            <h3 className="text-4xl font-bold text-white mb-8">
                                Let's Work Together
                            </h3>

                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                {/* Name */}

                                <div>
                                    <label className="text-gray-300 mb-2 block">
                                        Your Name
                                    </label>

                                    <div className="relative">

                                        <User
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400"
                                        />

                                        <input
                                            name="user_name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="
                        w-full
                        pl-12
                        pr-4
                        py-4
                        rounded-xl
                        bg-white/[0.03] 
hover:bg-white/[0.06] focus:scale-[1.01]
                        border
                        border-white/10
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        focus:border-violet-500
                        focus:bg-white/10
                        focus:shadow-[0_0_20px_rgba(139,92,246,.35)]
                        placeholder:text-gray-500"
                                        />

                                    </div>
                                </div>

                                {/* Email */}

                                <div>

                                    <label className="text-gray-300 mb-2 block">
                                        Your Email
                                    </label>

                                    <div className="relative">

                                        <Mail
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400"
                                        />

                                        <input
                                            name="user_email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-violet-500
                    focus:bg-white/10
                    focus:shadow-[0_0_20px_rgba(139,92,246,.35)]
                    placeholder:text-gray-500
                    "
                                        />

                                    </div>

                                </div>

                                {/* Service */}

                                <div>

                                    <label className="text-gray-300 mb-2 block">
                                        Service Needed
                                    </label>

                                    <div className="relative">

                                        <Briefcase
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 z-10"
                                        />

                                        <select
    name="service"
    value={service}
    onChange={(e) => setService(e.target.value)}
    className="
        w-full
        pl-12
        pr-4
        py-4
        rounded-xl
        bg-white/5
        border
        border-white/10
        text-white
        outline-none
        transition-all
        duration-300
        focus:border-violet-500
        focus:bg-white/10
        appearance-none
    "
>
    <option value="" className="bg-[#111]">
        Select a Service
    </option>

    <option value="Website Development" className="bg-[#111]">
        Website Development
    </option>

    <option value="UI / UX Design" className="bg-[#111]">
        UI / UX Design
    </option>

    <option value="Trading Account Handle" className="bg-[#111]">
        Trading Account Handle
    </option>

    <option value="Paid Promotion" className="bg-[#111]">
        Paid Promotion
    </option>

    <option value="Opening of Shows" className="bg-[#111]">
        Opening of Shows
    </option>

</select>

                                    </div>

                                </div>

                                {service && (

<motion.div

    initial={{ opacity: 0, y: -20 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.4 }}

>

    <label className="text-gray-300 mb-2 block">
        Your Budget
    </label>

    <input
        type="text"
        name="budget"
        placeholder="₹10,000 - ₹20,000"
        className="
            w-full
            px-5
            py-4
            rounded-xl
            bg-white/5
            border
            border-white/10
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:bg-white/10
            focus:shadow-[0_0_20px_rgba(139,92,246,.35)]
            placeholder:text-gray-500
        "
    />

</motion.div>

)}

                                {/* Message */}

                                <div>

                                    <label className="text-gray-300 mb-2 block">
                                        Explain Your Idea
                                    </label>

                                    <textarea
                                        name="message"
                                        rows="6"
                                        placeholder="Tell me about your project..."
                                        className="
                  w-full
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  p-5
                  text-white
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-violet-500
                  focus:bg-white/10
                  focus:shadow-[0_0_20px_rgba(139,92,246,.35)]
                  placeholder:text-gray-500
                  "
                                    />

                                </div>

                                {/* Button */}

                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        scale: 1.03,
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: .97,
                                    }}
                                    className="
                w-full
                py-4
                rounded-xl
                font-semibold
                text-white
                flex
                items-center
                justify-center
                gap-3
                bg-gradient-to-r
                from-blue-600
                via-violet-600
                to-blue-600
                hover:shadow-[0_0_30px_rgba(59,130,246,.45)]
                transition-all
                duration-300
                "
                                >
                                    <Send size={18} />

                                    Send Message

                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}