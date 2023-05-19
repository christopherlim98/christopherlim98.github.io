import { FaGithub, FaNewspaper, FaReddit, FaYoutube } from "react-icons/fa";
import Link from "./link";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Tooltip } from "@material-tailwind/react";

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
              Threat Detection for Government Commercial Cloud{" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>
            <Link
              href="https://www.palantir.com/platforms/gotham/"
              includeAt={true}
            >
              <h2 className="inline">GovTech Singapore</h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-outside mx-4 font-medium">
          <h3 className="inline">
            <li className="my-1">
              Built a data pipeline for data scientists to easily build robust
              AI models, with cross-platform support for AIaaS solutions from
              AWS, Azure & GCP. I primarily focused on the AWS architecture.
            </li>
          </h3>
          <h3 className="inline">
            <li className="my-1">
              {" "}
              Led development on a cloud-native continuous-deployment pipeline
              for production engineers to easily deploy AI models, manage IAM
              policy and provision infrastructure.
            </li>
          </h3>
          <h3 className="inline">
            <li className="my-1">
              {" "}
              Improved visibility and maintainability of serverless functions by
              deploying code through Serverless framework (Infrastructure as
              Code) and CI/CD via Github Actions.
            </li>
          </h3>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Github Actions"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/gh_actions_blue.svg"
                  alt="Github Actions"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Serverless"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/serverless.svg"
                  alt="Serverless"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="AWS Sagemaker"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/aws_sagemaker.svg"
                  alt="AWS Sagemaker"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="AWS Lambda"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/aws_lambda.svg"
                  alt="AWS Lambda"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="AWS Glue"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/aws_glue.svg"
                  alt="AWS Glue"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="AWS SNS"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/aws_sns.svg"
                  alt="AWS SNS"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="AWS Step Functions"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/aws_step.svg"
                  alt="AWS Step Functions"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="GCP"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/gcp.svg"
                  alt="GCP"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>{" "}
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Azure"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/azure.svg"
                  alt="Azure"
                  width={40}
                  height={40}
                  quality={100}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="cmu-capstone py-4">
        <div className="py-2">
          <div className="hidden  md:inline-flex font-extrabold">
            <h2>
              Stargate Representation Translation Layer{" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>
            <Link href="https://stargate.io/" includeAt={true}>
              <h2 className="inline">Datastax</h2>{" "}
            </Link>
          </div>
          <div className="inline md:hidden font-extrabold">
            <h2>
              Stargate Repr. Translation Layer{" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>
            <Link href="https://stargate.io/" includeAt={true}>
              <h2 className="inline">Datastax</h2>{" "}
            </Link>
          </div>
        </div>

        <div className="block lg:flex lg:gap-4">
          <div className="lg:w-3/5">
            <ul className="list-disc list-outside mx-4 font-medium ">
              <h3 className="inline">
                <li className="my-1">
                  Stargate is a data gateway interface that supports migration
                  of applications from multiple types of database management
                  systems to Apache Cassandra in a context unaware fashion.
                </li>
              </h3>
              <h3 className="inline">
                <li className="my-1">
                  {" "}
                  Built a translation module to translate and stream the changes
                  from JSON API{"'"}s storage to CQL API{"'"}s storage through
                  Change Data Capture using Apache Pulsar.
                </li>
              </h3>
              <h3 className="inline">
                <li className="my-1">
                  {" "}
                  Built for <b>(1)</b> data scientists to use CQL API for more
                  robust queries and better data utilisation while allowing{" "}
                  <b>(2)</b> application developers to continue using JSON API
                  for storage.
                </li>
              </h3>
            </ul>
            <div className="techstack pb-4">
              <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
              <div className="flex gap-1 flex-wrap">
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="Java"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/java.svg"
                      alt="Java"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="Python"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/python.svg"
                      alt="Python"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="Docker"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/docker.svg"
                      alt="Docker"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
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
            <h2>
              Petitions (Hack for Public Good {"'"}22){" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>

            <Link href="https://www.open.gov.sg/" includeAt={true}>
              <h2 className="inline">Open Government Products</h2>{" "}
            </Link>
          </div>
        </div>
        <div className="block lg:flex lg:gap-4">
          <div className="lg:w-3/5">
            <ul className="list-disc list-outside mx-4 font-medium ">
              <h3 className="inline">
                <li className="my-1">
                  Designed and engineered a system for privacy-preserving
                  petitions to allows citizens to cast verified yet anonymous
                  votes.
                </li>
              </h3>
              <h3 className="inline">
                <li className="my-1">
                  {" "}
                  Built a prototype that was eventually presented to high-level
                  government officials (Singapore).
                </li>
              </h3>
              <h3 className="inline">
                <li className="my-1">
                  Media coverage over here:{" "}
                  <Link href="https://www.reddit.com/r/singapore/comments/tcbdx8/govtech_seems_to_be_prototyping_a_official/">
                    Straits Times <FaNewspaper className="inline" />
                  </Link>
                  ,{" "}
                  <Link href="https://www.reddit.com/r/singapore/comments/tcbdx8/govtech_seems_to_be_prototyping_a_official/">
                    Reddit <FaReddit className="inline" />
                  </Link>
                  .
                </li>
              </h3>
              <h3 className="inline">
                <li className="my-1">
                  Code can be found here:{" "}
                  <Link href="https://github.com/opengovsg/petitionsgovsg">
                    Github <FaGithub className="inline" />
                  </Link>
                  .
                </li>
              </h3>
            </ul>
            <div className="techstack pb-4">
              <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
              <div className="flex gap-1 flex-wrap">
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="Typescript"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/typescript.svg"
                      alt="Typescript"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="Docker"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/docker.svg"
                      alt="Docker"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="React"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/react.svg"
                      alt="React"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="MySQL"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/mysql.svg"
                      alt="MySQL"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
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
            <h2>
              HelloWorld (BrainHack {"'"}21){" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>
            <Link href="https://www.open.gov.sg/" includeAt={true}>
              <h2 className="inline">DSTA Singapore</h2>{" "}
            </Link>
          </div>
        </div>
        <div className="block lg:flex lg:gap-4">
          <div className="lg:w-3/5">
            <ul className="list-disc list-outside mx-4 font-medium ">
              <h3 className="inline">
                <li className="my-1">
                  Led a team to build a{" "}
                  <b>hackathon-winning mobile application</b> that allows
                  travel-hungry users to explore the world and collect landmarks
                  in 3D using augmented reality.
                </li>
              </h3>{" "}
              <h3 className="inline">
                <li className="my-1">Won 1st out of 200 teams.</li>
              </h3>
              <h3 className="inline">
                <li className="my-1">
                  Media coverage over here:{" "}
                  <Link href="https://www.dsta.gov.sg/whats-on/spotlight/altering-reality-with-brainhack">
                    DSTA News <FaNewspaper className="inline" />
                  </Link>
                  ,{" "}
                  <Link href="https://scis.smu.edu.sg/news/2021/jul/02/smu%E2%80%99s-computing-and-information-systems-team-emerged-champions-dsta-hackathon">
                    SMU News <FaNewspaper className="inline" />
                  </Link>
                  .
                </li>
              </h3>
            </ul>
            <div className="techstack pb-4">
              <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
              <div className="flex gap-1 flex-wrap">
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="TypeScript"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/typescript.svg"
                      alt="TypeScript"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="React Native"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/react_native.png"
                      alt="React Native"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
                <Tooltip
                  className="rounded bg-gray-700 text-gray-100 px-4"
                  content="Java"
                  placement="bottom"
                >
                  <div>
                    <StaticImage
                      src="../images/java.svg"
                      alt="Java"
                      width={40}
                      height={40}
                    />
                  </div>
                </Tooltip>
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
            <h2>
              Ryverbank – Mock Banking API{" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>
            <Link href="https://x.smu.edu.sg/" includeAt={true}>
              <h2 className="inline">SMU-X Project</h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-outside mx-4 font-medium">
          <h3 className="inline">
            <li className="my-1">
              Created digital banking API for SMU-X module with Credit Suisse
              (Singapore) as project owner.
            </li>{" "}
          </h3>
          <h3 className="inline">
            <li className="my-1">
              {" "}
              Awarded <b>Best Technical Team</b> and delivered tech demo to over
              50 Credit Suisse developers.
            </li>{" "}
          </h3>
          <h3 className="inline">
            <li className="my-1">
              The project adopts a microservices architecture. It is built on
              Java SpringBoot framework, secured by JWT authentication, and
              deployed using Docker Compose.
            </li>{" "}
          </h3>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Java"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/java.svg"
                  alt="Java"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Docker"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/docker.svg"
                  alt="Docker"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Spring"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/springio.svg"
                  alt="Spring"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="copycat py-4">
        <div className="py-2">
          <div className="md:inline-flex font-extrabold">
            <h2>
              Copycat – Source Code Plagiarism Detector{" "}
              <span className="hidden md:inline-flex">&emsp;</span>
            </h2>
          </div>
        </div>
        <ul className="list-disc list-outside mx-4 font-medium">
          <h3 className="inline">
            <li className="my-1">
              Developed a source code plagiarism detector to detect string
              similarity and logic similarity using abstract syntax trees,
              HashMaps and Merkle roots.
            </li>
          </h3>
          <h3 className="inline">
            <li className="my-1">
              {" "}
              Explored three different algorithms (naive, snapshot, progressive)
              with different speed-performance tradeoffs.
            </li>
          </h3>

          <h3 className="inline">
            <li className="my-1">
              Our best algorithm detected ~85% more instances of code similarity
              than the ground truth (i.e. found undetected cases)
            </li>
          </h3>
          <h3 className="inline">
            <li className="my-1">
              Code can be found here:{" "}
              <Link href="https://github.com/christopherlim98/copycat">
                Github <FaGithub className="inline" />
              </Link>
              . Video presentation:{" "}
              <Link href="https://www.youtube.com/watch?v=t68WSdoI_Do">
                Youtube <FaYoutube className="inline" />
              </Link>
              .
            </li>
          </h3>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Java"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/java.svg"
                  alt="Java"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
