import React from "react";
export default function Education() {
  return (
    // I build for impact.
    // <main className="flex min-h-screen flex-col justify-between p-12 md:p-64">
    <>
      <h1 className="pt-8 pb-2">
        🎓
        <br />
        Education
      </h1>

      <div className="CMU">
        <div className="py-4">
          {" "}
          <h2 className="font-extrabold">Carnegie Mellon University </h2>
          <h4>Masters In Computational Data Science (Computer Systems)</h4>
          <h4>
            GPA: <span className="underline">4.0/4.0</span>
          </h4>
        </div>
        <h3 className="font-bold">Selected Coursework</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3>Computer Systems:</h3>
            <ul className="list-disc list-outside mx-4">
              <h3>
                <li>15-513 Introduction to Computer Systems</li>
              </h3>
              <h3>
                <li>15-640 Distributed Systems</li>
              </h3>
              <h3>
                <li>15-645 Database Systems </li>
              </h3>
              <h3>
                <li>15-719 Advanced Cloud Computing </li>
              </h3>
            </ul>
          </div>
          <div>
            <h3>AI/ML: </h3>
            <ul className="list-disc list-outside mx-4">
              <h3>
                <li>10-601 Machine Learning</li>
              </h3>
              <h3>
                <li>11-637 Foundations of Computational Data Science</li>
              </h3>
              <h3>
                <li>05-839 Interactive Data Science</li>
              </h3>
              <h3>
                <li>11-631 Data Science Seminar</li>
              </h3>
            </ul>
          </div>
        </div>
      </div>
      <div className="SMU py-4">
        <div className="py-4">
          {" "}
          <h2 className="font-extrabold">Singapore Management University </h2>
          <h4>Bachelors in Computer Science (Artificial Intelligence)</h4>
          <h4>
            GPA: <span className="underline">4.0/4.0</span>
          </h4>
        </div>
        <h3 className="font-bold">Selected Coursework</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc list-outside mx-4">
              <h3>
                <li>Deep Learning and Vision (PhD)</li>
              </h3>
              <h3>
                <li>Natural Language Communication</li>
              </h3>
              <h3>
                <li>Operating Systems with Android</li>
              </h3>
              <h3>
                <li>Computer Hardware and Embedded Systems</li>
              </h3>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
