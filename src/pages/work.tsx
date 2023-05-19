import { FaGithub, FaYoutube } from "react-icons/fa";
import Link from "./link";
import React from "react";
import ImageWithTooltip from "./image_with_tooltip";
import { Tooltip } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";

export default function Work() {
  return (
    // I build for impact.
    // <main className="flex min-h-screen flex-col justify-between p-12 md:p-64">
    <>
      <h1 className="pt-8 pb-2">
        💼
        <br />
        Work Experience
      </h1>
      <div className="Palantir py-4">
        <div className="py-2">
          <h4> May 2023 - Aug 2023 </h4>
          <div className="md:inline-flex font-extrabold">
            <h2> Software Engineer Intern &emsp;</h2>
            <Link
              href="https://www.palantir.com/platforms/gotham/"
              includeAt={true}
            >
              <h2 className="inline">Palantir Technologies, USA </h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              {" "}
              🚧 Currently in progress, stay tuned for updates!
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              {" "}
              Working on the Gotham product – a commercially available, AI-ready
              operating system for public sector.
            </h3>
          </li>
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
      <div className="Meta py-4">
        <div className="py-2">
          <h4> May 2022 - Aug 2022 </h4>
          <div className="md:inline-flex font-extrabold">
            <h2> Enterprise Software Engineer Intern &emsp;</h2>
            <Link href="https://about.meta.com/" includeAt={true}>
              <h2 className="inline">Meta, Singapore </h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              Designed a generic form custom renderer that gives form
              administrators a no-code way to build and manage forms, replacing
              the old legacy system which requires significant code changes on
              multiple systems to add new form fields.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Collaborated with UX design and data engineers to integrate the
              custom form renderer into a system serving Meta employees
              worldwide for all travel and event risk assessment form intake.
              (React, Relay, GraphQL & Hack).
            </h3>
          </li>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
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
            </Tooltip>{" "}
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Redux"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/redux.svg"
                  alt="Redux"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Hack"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/hack-2.svg"
                  alt="Hack"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Flow"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/flow-2.svg"
                  alt="Flow"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="GraphQL"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/graphql.svg"
                  alt="GraphQL"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="OGP py-4">
        <div className="py-2">
          <h4> Dec 2021 - May 2022 </h4>
          <div className="md:inline-flex font-extrabold">
            <h2> Software Engineer Intern &emsp;</h2>
            <Link href="https://www.open.gov.sg/aboutus" includeAt={true}>
              <h2 className="inline md:hidden">OGP, Govtech Singapore </h2>{" "}
              <h2 className="hidden md:inline">
                Open Government Products, Govtech Singapore{" "}
              </h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              Developed two open-source projects: <b>(1)</b>{" "}
              <Link href="https://ask.gov.sg">Q&A platform</Link> (
              <Link href="https://github.com/opengovsg/askgovsg">
                <FaGithub className="inline" />
              </Link>
              ) for citizens to get answers from government and <b>(2)</b>{" "}
              petitions platform (
              <Link href="https://github.com/opengovsg/petitionsgovsg">
                <FaGithub className="inline" />
              </Link>
              {","}
              <Link href="https://www.youtube.com/watch?v=x5DB0eyw2cc&list=PLTH8_3Fv0EeeJi-cVoXV7oXmROTDz6I38&index=14&ab_channel=OpenGovernmentProducts">
                <FaYoutube className="inline" />
              </Link>
              ) for citizens to get action from government.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Developed two internal projects: <b>(1)</b>{" "}
              <Link href="https://covid.gov.sg">
                nationwide monitoring system
              </Link>{" "}
              to maintain vaccination records for 7 million Singaporeans and{" "}
              <b>(2)</b>
              AI-backed{" "}
              <Link href="https://www.scamshield.org.sg/">ScamShield</Link> to
              detect, block and report mobile scams.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Implemented authentication flows using OIDC and built
              anonymity-preserving features for petitions (NodeJS).
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Migrated Covid19 system from JavaScript to Typescript to support
              typed entities with zero production downtime.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Setup Storybook integration for reliable UI documentation and
              spot-testing (JavaScript/TypeScript/React).
            </h3>
          </li>
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
              content="Javascript"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/javascript.svg"
                  alt="Javascript"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>

            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="NodeJS"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/nodejs.svg"
                  alt="NodeJS"
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
              content="Scikit Learn"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/scikit_learn.svg"
                  alt="Scikit Learn"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="AWS"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/aws.svg"
                  alt="AWS"
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
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="NPM"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/npm.svg"
                  alt="NPM"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Chakra UI"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/chakraui.svg"
                  alt="Chakra UI"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="StorybookJS"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/storybookjs.svg"
                  alt="StorybookJS"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>

            {/* Javascript, Typescript, React, Nodejs, Expressjs, MySQL, Chakra UI, StorybookJSt */}
          </div>
        </div>
      </div>
      <div className="Ascenda py-4">
        <div className="py-2">
          <h4> May 2021 - Aug 2021 </h4>
          <div className="md:inline-flex font-extrabold">
            <h2> Software Engineer Intern &emsp;</h2>
            <Link
              href="https://www.ascendaloyalty.com/our-philosophy"
              includeAt={true}
            >
              <h2 className="inline">Ascenda </h2>{" "}
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside font-medium">
          <li className="my-1">
            <h3 className="inline">
              Designed and implemented full-stack features for hotel destination
              search and user-action tracking across all white labels using Ruby
              & AngularJS. Presented a tech demo to the entire tech team of over
              50 developers.
            </h3>
          </li>
          <li className="my-1">
            <h3 className="inline">
              Enhanced legacy front-end codebase by migrating from AngularJS to
              Angular and performing code-refactoring.
            </h3>
          </li>
        </ul>
        <div className="techstack pb-4">
          <h4 className="font-semibold py-2 text-lg">Tech stack:</h4>
          <div className="flex gap-1 flex-wrap">
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Javascript"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/javascript.svg"
                  alt="Javascript"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Ruby"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/ruby.svg"
                  alt="Ruby"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Ruby On Rails"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/rails.svg"
                  alt="Ruby On Rails"
                  width={40}
                  height={40}
                />
              </div>
            </Tooltip>
            <Tooltip
              className="rounded bg-gray-700 text-gray-100 px-4"
              content="Angular"
              placement="bottom"
            >
              <div>
                <StaticImage
                  src="../images/angular.svg"
                  alt="Angular"
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
