import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Welcome() {
  return (
    // I build for impact.
    // <main className="flex min-h-screen flex-col justify-between p-12 md:p-64">
    <div className="my-auto lg:w-8/12">
      <h1 className="py-4">
        {" "}
        Hi <div className="inline-block animate-wave-hand">👋</div>, I{"'"}m
        Chris 🧑🏻‍💻 <br /> and I love building <br /> impactful software 🚀
      </h1>
      <h2 className="py-4">
        {" "}
        I am currently pursuing a Master’s in Computational Data Science @CMU,
        with a concentration in Computer Systems.
      </h2>
      <h2 className="py-4">
        I have experience working on high-impact problems for public sector{" "}
        <div className="inline-block hover:animate-bounce-text">
          {" "}
          @
          <a href="https://www.palantir.com/" target="_blank">
            Palantir Technologies
          </a>
        </div>
        ,{" "}
        <div className="inline-block hover:animate-bounce-text">
          @
          <a href="https://www.open.gov.sg/" target="_blank">
            Open Government Products
          </a>{" "}
        </div>{" "}
        and private industry{" "}
        <div className="inline-block hover:animate-bounce-text">
          @
          <a href="https://about.meta.com/" target="_blank">
            Meta
          </a>
        </div>
        .
      </h2>
      <div className="py-16 flex">
        <h3 className="inline-flex  hover:animate-bounce-text">
          <FaLinkedin className="text-2xl" />
          {"   "}
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/christopher-lim-sheng-yong/"
            target="_blank"
          >
            linkedin.
          </a>
        </h3>
        <h3 className="inline-flex  hover:animate-bounce-text mx-4">
          <FaGithub className="text-2xl" />
          {"   "}
          <a
            className="mx-2"
            href="https://github.com/christopherlim98"
            target="_blank"
          >
            github.
          </a>
        </h3>
        <h3 className="inline-flex hover:animate-bounce-text mx-4">
          <FaEnvelope className="text-2xl" />
          {"   "}
          <a
            className="mx-2"
            href="mailto:christopherlim98@gmail.com"
            target="_blank"
          >
            email.
          </a>
        </h3>
      </div>
    </div>
  );
}
