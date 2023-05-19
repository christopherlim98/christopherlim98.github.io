"use client";
import { FaGithub, FaNewspaper, FaReddit, FaYoutube } from "react-icons/fa";
import Link from "./link";
import React from "react";
import ImageWithTooltip from "./image_with_tooltip";

export default function Projects() {
  return (
    // I build for impact.
    // <main className="flex min-h-screen flex-col justify-between p-12 md:p-64">
    <>
      <h1 className="pt-8 pb-2">
        🚀
        <br />
        Projects
      </h1>
      <div className="smu-capstone py-4">
        <div className="py-2">
          <div className="md:inline-flex font-extrabold">
            <h2>
              Advanced Threat Detection for Government Commercial Cloud &emsp;
            </h2>
            <Link
              href="https://www.palantir.com/platforms/gotham/"
              includeAt={true}
            >
              <h2 className="inline">GovTech Singapore</h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              Built a data pipeline for data scientists to easily build robust
              AI models, with cross-platform support for AIaaS solutions from
              AWS, Azure & GCP. I primarily focused on the AWS architecture.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              {" "}
              Led development on a cloud-native continuous-deployment pipeline
              for production engineers to easily deploy AI models, manage IAM
              policy and provision infrastructure.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              {" "}
              Improved visibility and maintainability of serverless functions by
              deploying code through Serverless framework (Infrastructure as
              Code) and CI/CD via Github Actions.
            </h3>
          </li>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <ImageWithTooltip
              src="/static/skills/gh_actions_blue.svg"
              tooltipText="Github Actions"
            />
            <ImageWithTooltip
              src="/static/skills/serverless.svg"
              tooltipText="Serverless"
            />
            <ImageWithTooltip
              src="/static/skills/aws_sagemaker.svg"
              tooltipText="AWS Sagemaker"
            />
            <ImageWithTooltip
              src="/static/skills/aws_s3.svg"
              tooltipText="AWS S3"
            />
            <ImageWithTooltip
              src="/static/skills/aws_lambda.svg"
              tooltipText="AWS Lambda"
            />
            <ImageWithTooltip
              src="/static/skills/aws_glue.svg"
              tooltipText="AWS Glue"
            />
            <ImageWithTooltip
              src="/static/skills/aws_sns.svg"
              tooltipText="AWS SNS"
            />
            <ImageWithTooltip
              src="/static/skills/aws_step.svg"
              tooltipText="AWS Step Function"
            />
            <ImageWithTooltip
              src="/static/skills/azure.svg"
              tooltipText="Azure"
            />{" "}
            <ImageWithTooltip src="/static/skills/gcp.svg" tooltipText="GCP" />
          </div>
        </div>
      </div>
      <div className="cmu-capstone py-4">
        <div className="py-2">
          <div className="hidden  md:inline-flex font-extrabold">
            <h2>Stargate Representation Translation Layer &emsp;</h2>
            <Link href="https://stargate.io/" includeAt={true}>
              <h2 className="inline">Datastax</h2>{" "}
            </Link>
          </div>
          <div className="inline md:hidden font-extrabold">
            <h2>Stargate Repr. Translation Layer &emsp;</h2>
            <Link href="https://stargate.io/" includeAt={true}>
              <h2 className="inline">Datastax</h2>{" "}
            </Link>
          </div>
        </div>

        <div className="block lg:flex lg:gap-4">
          <div className="lg:w-3/5">
            <ul className="list-disc list-inside font-medium ">
              <li className="my-1">
                <h3 className="inline">
                  Stargate is a data gateway interface that supports migration
                  of applications from multiple types of database management
                  systems to Apache Cassandra in a context unaware fashion.
                </h3>
              </li>
              <li className="my-1">
                <h3 className="inline">
                  {" "}
                  Built a translation module to translate and stream the changes
                  from JSON API{"'"}s storage to CQL API{"'"}s storage through
                  Change Data Capture using Apache Pulsar.
                </h3>
              </li>
              <li className="my-1">
                <h3 className="inline">
                  {" "}
                  Built for <b>(1)</b> data scientists to use CQL API for more
                  robust queries and better data utilisation while allowing{" "}
                  <b>(2)</b> application developers to continue using JSON API
                  for storage.
                </h3>
              </li>
            </ul>
            <div className="techstack pb-4">
              <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
              <div className="flex gap-1 flex-wrap">
                <ImageWithTooltip
                  src="/static/skills/java.svg"
                  tooltipText="Java"
                />
                <ImageWithTooltip
                  src="/static/skills/python.svg"
                  tooltipText="Python"
                />
                <ImageWithTooltip
                  src="/static/skills/docker.svg"
                  tooltipText="Docker"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <iframe
              src="https://docs.google.com/presentation/d/1TcP-BZ6Ktsm_Rnq6VbRTLKGYQF3qcl62OFaNrtnssVQ/embed"
              height="300"
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="petitions py-4">
        <div className="py-2">
          <div className="md:inline-flex font-extrabold">
            <h2>Petitions (Hack for Public Good {"'"}22) &emsp;</h2>

            <Link href="https://www.open.gov.sg/" includeAt={true}>
              <h2 className="inline">Open Government Products</h2>{" "}
            </Link>
          </div>
        </div>
        <div className="block lg:flex lg:gap-4">
          <div className="lg:w-3/5">
            <ul className="list-disc list-inside font-medium ">
              <li className="my-1">
                <h3 className="inline">
                  Designed and engineered a system for privacy-preserving
                  petitions to allows citizens to cast verified yet anonymous
                  votes.
                </h3>
              </li>
              <li className="my-1">
                <h3 className="inline">
                  {" "}
                  Built a prototype that was eventually presented to high-level
                  government officials (Singapore).
                </h3>
              </li>
              <li className="my-1">
                <h3 className="inline">
                  Media coverage over here:{" "}
                  <Link href="https://www.reddit.com/r/singapore/comments/tcbdx8/govtech_seems_to_be_prototyping_a_official/">
                    Straits Times <FaNewspaper className="inline" />
                  </Link>
                  ,{" "}
                  <Link href="https://www.reddit.com/r/singapore/comments/tcbdx8/govtech_seems_to_be_prototyping_a_official/">
                    Reddit <FaReddit className="inline" />
                  </Link>
                  .
                </h3>
              </li>
              <li className="my-1">
                <h3 className="inline">
                  Code can be found here:{" "}
                  <Link href="https://github.com/opengovsg/petitionsgovsg">
                    Github <FaGithub className="inline" />
                  </Link>
                  .
                </h3>
              </li>
            </ul>
            <div className="techstack pb-4">
              <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
              <div className="flex gap-1 flex-wrap">
                <ImageWithTooltip
                  src="/static/skills/typescript.svg"
                  tooltipText="Typescript"
                />
                <ImageWithTooltip
                  src="/static/skills/react.svg"
                  tooltipText="React"
                />
                <ImageWithTooltip
                  src="/static/skills/mysql.svg"
                  tooltipText="MySQL"
                />
                <ImageWithTooltip
                  src="/static/skills/docker.svg"
                  tooltipText="Docker"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/x5DB0eyw2cc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="helloworld py-4">
        <div className="py-2">
          <div className="md:inline-flex font-extrabold">
            <h2>HelloWorld (BrainHack {"'"}21) &emsp;</h2>
            <Link href="https://www.open.gov.sg/" includeAt={true}>
              <h2 className="inline">DSTA Singapore</h2>{" "}
            </Link>
          </div>
        </div>
        <div className="block lg:flex lg:gap-4">
          <div className="lg:w-3/5">
            <ul className="list-disc list-inside font-medium ">
              <li className="my-1">
                <h3 className="inline">
                  Led a team to build a{" "}
                  <b>hackathon-winning mobile application</b> that allows
                  travel-hungry users to explore the world and collect landmarks
                  in 3D using augmented reality.
                </h3>
              </li>
              <li className="my-1">
                <h3 className="inline">Won 1st out of 200 teams.</h3>
              </li>
              <li className="my-1">
                <h3 className="inline">
                  Media coverage over here:{" "}
                  <Link href="https://www.dsta.gov.sg/whats-on/spotlight/altering-reality-with-brainhack">
                    DSTA News <FaNewspaper className="inline" />
                  </Link>
                  ,{" "}
                  <Link href="https://scis.smu.edu.sg/news/2021/jul/02/smu%E2%80%99s-computing-and-information-systems-team-emerged-champions-dsta-hackathon">
                    SMU News <FaNewspaper className="inline" />
                  </Link>
                  .
                </h3>
              </li>
            </ul>
            <div className="techstack pb-4">
              <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
              <div className="flex gap-1 flex-wrap">
                <ImageWithTooltip
                  src="/static/skills/typescript.svg"
                  tooltipText="Typescript"
                />
                <ImageWithTooltip
                  src="/static/skills/react_native.png"
                  tooltipText="React Native"
                />
                <ImageWithTooltip
                  src="/static/skills/java.svg"
                  tooltipText="Java"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/Y4YmfMl4oMM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="ryverbank py-4">
        <div className="py-2">
          <div className="md:inline-flex font-extrabold">
            <h2>Ryverbank – Mock Banking API &emsp;</h2>
            <Link href="https://x.smu.edu.sg/" includeAt={true}>
              <h2 className="inline">SMU-X Project</h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              Created digital banking API for SMU-X module with Credit Suisse
              (Singapore) as project owner.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              {" "}
              Awarded <b>Best Technical Team</b> and delivered tech demo to over
              50 Credit Suisse developers.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              The project adopts a microservices architecture. It is built on
              Java SpringBoot framework, secured by JWT authentication, and
              deployed using Docker Compose.
            </h3>
          </li>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <ImageWithTooltip
              src="/static/skills/java.svg"
              tooltipText="Java"
            />
            <ImageWithTooltip
              src="/static/skills/docker.svg"
              tooltipText="Docker"
            />
            <ImageWithTooltip
              src="/static/skills/springio.svg"
              tooltipText="Spring"
            />
          </div>
        </div>
      </div>
      <div className="copycat py-4">
        <div className="py-2">
          <div className="md:inline-flex font-extrabold">
            <h2>Copycat – Source Code Plagiarism Detector &emsp;</h2>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              Developed a source code plagiarism detector to detect string
              similarity and logic similarity using abstract syntax trees,
              HashMaps and Merkle roots.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              {" "}
              Explored three different algorithms (naive, snapshot, progressive)
              with different speed-performance tradeoffs.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Our best algorithm detected ~85% more instances of code similarity
              than the ground truth (i.e. found undetected cases)
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Code can be found here:{" "}
              <Link href="https://github.com/christopherlim98/copycat">
                Github <FaGithub className="inline" />
              </Link>
              . Video presentation:{" "}
              <Link href="https://www.youtube.com/watch?v=t68WSdoI_Do">
                Youtube <FaYoutube className="inline" />
              </Link>
              .
            </h3>
          </li>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <ImageWithTooltip
              src="/static/skills/java.svg"
              tooltipText="Java"
            />
          </div>
        </div>
      </div>
    </>
  );
}
