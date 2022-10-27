import React from "react";
import { saveAs } from "file-saver";
export const Home = () => {
  const saveFile = () => {
    saveAs(
      require("../assets/Gurami-Davitadze.pdf"),
      "Gurami-Davitadze-cv.pdf"
    );
  };
  return (
    <>
      <div className="home_page">
        <main className="main">
          <div className="image" />
          <div className="text">
            <h1>Gurami Davitadze</h1>
            <h1>Front-End Developer</h1>
            <div className="description">
              I am Front-End (ReactJS) Developer, I am able to build any type of
              website for desktop as well as tablet and mobile. If you want to
              see my resume click{" "}
              <button onClick={saveFile} className="save-cv">
                here
              </button>
            </div>
          </div>
        </main>
        <footer className="About">
          <h2>My Skills:</h2>
          <div className="skill">
            <div>HTML</div>
            <div className="progress html" />
          </div>
          <div className="skill">
            <div>CSS / SCSS</div>
            <div className="progress css" />
          </div>
          <div className="skill">
            <div>JavaScript</div>
            <div className="progress js" />
          </div>
          <div className="skill">
            <div>TypeScript</div>
            <div className="progress ts" />
          </div>
          <div className="skill">
            <div>ReactJS</div>
            <div className="progress react" />
          </div>
          <div className="skill">
            <div>GIT / Github</div>
            <div className="progress git" />
          </div>
        </footer>
      </div>
    </>
  );
};
