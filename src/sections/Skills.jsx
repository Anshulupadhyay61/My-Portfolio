import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "💻" },
  { name: "DSA", icon: "🧠" },
  { name: "Git", icon: "🔧" },
  { name: "Forex Trading", icon: "💱" },
  { name: "Stock Trading", icon: "💹" },
  { name: "Acting", icon: "🎭" },
  { name: "Mimicry", icon: "🗣️" },
  { name: "Beatboxing", icon: "🎤" },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="
      relative
      py-24
      overflow-hidden
      text-white
      "
    >

      {/* Soft Glow (Particle background visible rahega) */}

      <motion.div

        animate={{
          scale:[1,1.2,1],
          opacity:[0.2,0.5,0.2]
        }}

        transition={{
          duration:5,
          repeat:Infinity
        }}

        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2

        w-[350px]
        h-[350px]

        bg-green-400/20

        blur-[120px]
        rounded-full
        "
      />



      <div className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* Heading */}

        <motion.div

        initial={{
          opacity:0,
          y:-40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.8
        }}

        viewport={{
          once:true
        }}

        className="text-center mb-16"
        >

          <h2
          className="
          text-5xl
          font-bold

          bg-gradient-to-r
          from-white
          via-green-300
          to-green-500

          bg-clip-text
          text-transparent
          "
          >
            Skills & Talent
          </h2>


          <p className="
          text-gray-400
          mt-4
          ">
            A Blend of Technical Expertise & Creative Talents
          </p>

        </motion.div>




        {/* Infinite Marquee */}


        <div className="
        overflow-hidden
        relative
        "
        >

          <motion.div

          animate={{
            x:["0%","-50%"]
          }}

          transition={{
            duration:20,
            repeat:Infinity,
            ease:"linear"
          }}

          className="
          flex
          w-max
          "
          >

          {
            [...skills,...skills].map((skill,index)=>(

              <motion.div

              whileHover={{
                y:-10,
                scale:1.08
              }}

              key={index}

              className="
              mx-5

              w-[180px]
              h-[120px]

              flex
              flex-col
              justify-center
              items-center


              rounded-3xl


              bg-white/10

              backdrop-blur-xl

              border
              border-white/20


              shadow-[0_0_25px_rgba(34,197,94,0.15)]

              hover:border-green-400

              hover:shadow-[0_0_45px_rgba(34,197,94,0.5)]

              transition-all
              duration-500

              "
              >

                <span className="
                text-4xl
                ">
                  {skill.icon}
                </span>


                <p className="
                mt-3
                font-semibold
                text-gray-200
                ">
                  {skill.name}
                </p>


              </motion.div>


            ))
          }


          </motion.div>

        </div>





        {/* Category Cards */}

        {/* Category Cards */}

<div
className="
grid
md:grid-cols-5
gap-6
mt-20
"
>


{
[
{
  title: "Aptitude",
  icon: "🧮",
  items: [
    "Quantitative Aptitude",
    "Logical Reasoning",
    "Analytical Thinking"
  ]
},


{
title:"Acting",
icon:"🎭",
items:[
"Voice Artist",
"Theatre Artist",
"Beatboxer",
"Public Speaking",
"Dance",
"Content Creation"
]
},


{
title:"Coding",
icon:"💻",
items:[
"C++",
"Python",
"Data Structures",
"React.js",
"JavaScript",
"Tailwind CSS"
]
},


{
title:"Trading",
icon:"📈",
items:[
"Forex Market since 2026",
"Indian Stock Market since 2020",
"Fundamental Analysis",
"Technical Analysis"
]
},


{
title:"Data Science",
icon:"🤖",
items:[
"Python Data Analysis",
"Pandas & NumPy",
"Data Visualization",
"Machine Learning Basics",

]
}


].map((item,index)=>(


<motion.div

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6,
delay:index*0.15
}}

viewport={{
once:true
}}


key={index}


className="
group

relative

p-7

rounded-3xl

bg-white/10

backdrop-blur-xl

border
border-white/20


overflow-hidden


hover:border-green-400


hover:-translate-y-3


transition-all
duration-500


shadow-[0_0_25px_rgba(34,197,94,0.08)]

hover:shadow-[0_0_45px_rgba(34,197,94,0.45)]

"

>


{/* Glow */}

<div

className="
absolute

-top-20

-right-20

w-40

h-40

bg-green-400/20

rounded-full

blur-3xl

group-hover:bg-green-400/40

transition

"

/>



{/* Icon */}

<div
className="
text-4xl
mb-5
"
>
{item.icon}
</div>



<h3

className="
text-xl
font-bold

text-green-400

mb-5

"

>
{item.title}
</h3>



<ul
className="
space-y-3
text-gray-300
text-sm
"
>

{
item.items.map((skill,i)=>(

<li
key={i}
className="
flex
items-center
gap-2
"
>

<span
className="
text-green-400
"
>
▹
</span>

{skill}

</li>

))
}


</ul>


</motion.div>


))


}


</div>


      </div>

    </section>
  );
};


export default Skills;