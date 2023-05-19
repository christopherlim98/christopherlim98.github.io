import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Welcome from "./welcome";
import AboutMe from "./about";
import Work from "./work";
import Projects from "./projects";
import Education from "./education";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="grid px-4 md:px-24 lg:px-48 max-w-screen-2xl mx-auto">
      <div className="h-screen flex">
        <Welcome />
      </div>
      <div className="break-after-page py-4">
        <AboutMe />
      </div>
      <div className="break-after-page md:pt-6 lg:pt-12">
        <Education />
      </div>
      <div className="break-after-page md:pt-6 lg:pt-12">
        <Work />
      </div>
      <div className="break-after-page md:pt-6 lg:pt-12">
        <Projects />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
