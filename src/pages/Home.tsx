import React from "react";
import { saveAs } from "file-saver";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
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
        <header className="main">
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
        </header>
        <main className="About">
          <h2>My Skills:</h2>
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
};
