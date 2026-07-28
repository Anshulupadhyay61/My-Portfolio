import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    FaBook,
    FaUsers,
    FaUserFriends,
    FaCodeBranch,
} from "react-icons/fa";
// import * as CountUpModule from "react-countup";

// console.log("Module:", CountUpModule);
// console.log("Default:", CountUpModule.default);



export default function GitHubStats() {
    console.log("CountUp =", CountUp);

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetch("https://api.github.com/users/Anshulupadhyay61")
            .then((res) => res.json())
            .then((data) => setUser(data));

    }, []);

    if (!user) {

        return (

            <div className="mt-10 text-center text-gray-400">

                Loading GitHub Stats...

            </div>

        );

    }

    const stats = [

        {
            title: "Repositories",
            value: user.public_repos,
            icon: <FaBook />,
            color: "from-cyan-500 to-blue-500",
        },

        {
            title: "Followers",
            value: user.followers,
            icon: <FaUsers />,
            color: "from-purple-500 to-pink-500",
        },

        {
            title: "Following",
            value: user.following,
            icon: <FaUserFriends />,
            color: "from-green-500 to-emerald-500",
        },

        {
            title: "GitHub ID",
            value: user.id,
            icon: <FaCodeBranch />,
            color: "from-orange-500 to-red-500",
        },

    ];

    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

            {stats.map((item, index) => (

                <motion.div

                    key={index}

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    whileHover={{

                        y: -8,

                        scale: 1.03,

                    }}

                    transition={{

                        duration: .4,

                        delay: index * .12,

                    }}

                    viewport={{ once: true }}

                    className="group relative overflow-hidden rounded-3xl"

                >

                    <div

                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}

                    />

                    <div

                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} p-[1px]`}

                    >

                        <div className="h-full w-full rounded-3xl bg-[#0d1117]/95" />

                    </div>

                    <div className="relative p-8">

                        <div

                            className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-4 text-3xl text-white`}

                        >

                            {item.icon}

                        </div>

                        <h2 className="mt-6 text-4xl font-black">
                            {item.value}
                        </h2>

                        <p className="mt-2 text-gray-400">

                            {item.title}

                        </p>

                    </div>

                </motion.div>

            ))}

        </div>

    );

}