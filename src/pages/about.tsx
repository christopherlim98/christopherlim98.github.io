import { Tooltip } from "@material-tailwind/react";
import Link from "./link";
import React from "react";
import { Slide } from "react-awesome-reveal";

export default function AboutMe() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 w-full md:w-8/12 lg:w-full">
      <Slide direction="left" triggerOnce>
        <div>
          <h1 className="py-8">
            🙋‍♂️
            <br />
            About me
          </h1>
          <h2>
            My twin interests lie in{" "}
            <strong>computer systems and big data</strong>. This culminated in
            my final-year capstone project with GovTech Singapore, which aims to
            make it easy for data scientists to build and deploy robust AI
            models in the cloud.
          </h2>
          <br />
          <h2>
            I also love technology for its ability to effect impactful change.
            At Open Government Products, I built{" "}
            <strong>open-source solutions for public good</strong>. These
            include using{" "}
            <Link href="https://scamshield.gov.sg">ML to combat scams</Link> and
            building a backend system to support{" "}
            <Link href="https://covid.gov.sg">nationwide Covid-19 efforts</Link>{" "}
            in Singapore.
          </h2>
          <br />
          <h2>
            In my free time, I like to climb, dance, and do{" "}
            <Link href="https://techtris.xyz">
              {" "}
              hackathons with Team Techtris
            </Link>
            .
          </h2>
        </div>
      </Slide>

      <div className="hidden rounded lg:block">
        <Slide className="h-full" direction="right" triggerOnce>
          <Tooltip
            className="rounded bg-gray-700 text-gray-100 px-4"
            content="Scroll to learn more about my hackathon projects"
          >
            <iframe
              id="techtris"
              src="https://techtris.xyz"
              width="100%"
              height="100%"
            ></iframe>
          </Tooltip>
        </Slide>
      </div>
    </div>
  );
}
