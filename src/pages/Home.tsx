import { saveAs } from "file-saver";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
export const Home = () => {
  const saveFile = () => {
    saveAs(require("../assets/Gurami-Davitadze.docx"), "Gurami-Davitadze.docx");
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
              Self-motivated individual with Front-end(Reactjs) development.
              More than 1 year after started learning and still trying to
              improve my skills and make bigger my possibilities. If you want see my resume click
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
      </div>
    </>
  );
};
