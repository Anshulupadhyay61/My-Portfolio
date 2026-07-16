import React from "react";
import logo from "../assets/logo.png";
import avator from "../assets/avator.png";

const Home = () => {
  return (
    <section
      id="home"
      className="
      w-full
      min-h-screen
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      justify-between
      px-6
      sm:px-10
      lg:px-24
      py-28
      lg:py-0
      relative
      z-10
      gap-12
      "
    >
      {/* Left Side */}

      <div className="max-w-xl text-center lg:text-left">

        {/* Logo */}

        <img
          src={logo}
          alt="Logo"
          className="
          w-24
          sm:w-28
          lg:w-32
          mb-6
          lg:mb-8
          object-contain
          mx-auto
          lg:mx-0
          "
        />

        <p
          className="
          text-sm
          sm:text-base
          lg:text-xl
          text-gray-300
          mb-4
          "
        >
          Software Engineer • Trader • Actor • Voice Artist • Data Analyst •
          Content Creator
        </p>

        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          leading-tight
          "
        >
          Hello, I'm <br />

          <span className="text-[#00FFC8]">
            Anshul Upadhyay
          </span>
        </h1>

        <div
          className="
          mt-8
          space-y-3
          text-sm
          sm:text-base
          lg:text-lg
          "
        >

          <p>
            <span className="text-[#00FFC8]">◆</span>
            {" "}Turning data into meaningful insights.
          </p>

          <p>
            <span className="text-[#00FFC8]">◆</span>
            {" "}Trading Stocks & Forex.
          </p>

          <p>
            <span className="text-[#00FFC8]">◆</span>
            {" "}Acting is like living another life.
          </p>

          <p>
            <span className="text-[#00FFC8]">◆</span>
            {" "}Creating voices that connect.
          </p>

          <p>
            <span className="text-[#00FFC8]">◆</span>
            {" "}Creating content that informs, inspires, and engages.
          </p>

          <p>
            <span className="text-[#00FFC8]">◆</span>
            {" "}Being a Cultural Head is about bringing people together through creativity.
          </p>

        </div>

        {/* Buttons */}

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          sm:gap-5
          mt-10
          justify-center
          lg:justify-start
          "
        >

          <a
            href="https://github.com/Anshulupadhyay61"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-8
            py-4
            rounded-full
            bg-[#00FFC8]
            text-black
            font-semibold
            hover:scale-105
            transition
            text-center
            "
          >
            View Projects
          </a>

          <a
            href="/Anshul_Upadhyay_Resume.pdf"
            download
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            hover:bg-white/10
            transition
            text-center
            "
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center">

        <img
          src={avator}
          alt="Hero"
          className="
          w-[260px]
          sm:w-[340px]
          md:w-[400px]
          lg:w-[450px]
          object-contain
          "
        />

      </div>

    </section>
  );
};

export default Home;