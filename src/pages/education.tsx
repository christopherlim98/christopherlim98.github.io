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
          <h3>Masters In Computational Data Science (Computer Systems)</h3>
          <h3>
            GPA: <span className="underline">4.0/4.0</span>
          </h3>
        </div>
        <p className="font-bold">Selected Coursework</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p>Computer Systems:</p>
            <ul className="list-disc list-inside">
              <li>15-213/513 Introduction to Computer Systems</li>
              <li>15-440/640 Distributed Systems</li>
              <li>15-445/645 Database Systems </li>
              <li>15-441/641 Computer Networks </li>
              <li>15-719 Advanced Cloud Computing </li>
            </ul>
          </div>
          <div>
            <p>AI/ML: </p>
            <ul className="list-disc list-inside">
              <li>10-301/601 Machine Learning</li>
              <li>11-637 Foundations of Computational Data Science</li>
              <li>05-839 Interactive Data Science</li>
              <li>11-631 Data Science Seminar</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="SMU py-4">
        <div className="py-4">
          {" "}
          <h2 className="font-extrabold">Singapore Management University </h2>
          <h3>Bachelors in Computer Science (Artificial Intelligence)</h3>
          <h3>
            GPA: <span className="underline">4.0/4.0</span>
          </h3>
        </div>
        <p className="font-bold">Selected Coursework</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc list-inside">
              <li>Deep Learning and Vision (PhD)</li>
              <li>Natural Language Communication</li>
              <li>Operating Systems with Android</li>
              <li>Computer Hardware and Embedded Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
