import React from "react";

export const Home = () => {
  return (
    <>
      <main className="welcome">Welcome To My Portfolio</main>
      <div className="home_page">
        <main className="main">
          <div className="image" />
          <div className="text">
            <h1>Gurami Davitadze</h1>
            <h1>Front-End Developer</h1>
            <div className="description">
              I am Front-End (ReactJS) Developer, I am able to build any type of
              website for as desktop as tablet and mobile
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
