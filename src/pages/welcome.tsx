import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="my-auto md:w-8/12">
      {/* <Fade cascade damping={0.05} triggerOnce> */}
      <h1>
        Hi <div className="inline-block animate-wave-hand">👋</div> , I'm Chris
        🧑🏻‍💻{" "}
      </h1>
      <h1>and I love building</h1>
      <h1>impactful software 🚀</h1>
      {/* </Fade> */}
      <Slide direction="up" delay={100} triggerOnce>
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
      </Slide>
    </div>
  );
}
