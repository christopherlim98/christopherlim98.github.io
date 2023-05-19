import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Welcome from "./welcome";
import AboutMe from "./about";
import Work from "./work";
import Projects from "./projects";
import Education from "./education";
import { Fade } from "react-awesome-reveal";
import Loader from "./loader";

const IndexPage: React.FC<PageProps> = () => {
  const load = () => new Promise((resolve) => setTimeout(resolve, 4000)); // 2 seconds

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    load().then(() => {
      setIsLoading(false);
    });
  }, []);
  return (
    <main className="grid px-4 md:px-24 lg:px-48 max-w-screen-2xl mx-auto">
      <Fade className={`spinner ${isLoading ? "block" : "hidden"}`}>
        <div className="grid h-screen place-items-center">
          <Loader />
        </div>
      </Fade>
      <div className={`${isLoading ? "hidden" : "block"}`}>
        <div className="h-screen flex">
          <Welcome />
        </div>
        <div className="break-after-page py-4">
          <AboutMe />
        </div>
        <div className="break-after-page md:pt-6 lg:pt-12">
          <Fade triggerOnce>
            <Education />
          </Fade>
        </div>
        <div className="break-after-page md:pt-6 lg:pt-12">
          <Fade triggerOnce>
            <Work />
          </Fade>
        </div>
        <div className="break-after-page md:pt-6 lg:pt-12">
          <Fade triggerOnce>
            <Projects />
          </Fade>
        </div>{" "}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
