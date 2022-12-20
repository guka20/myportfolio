import React from "react";
import { ProjectItem } from "../components/ProjectItem";
import { Footer } from "../components/Footer";
export const Projects = () => {
  const projetsList = [
    {
      name: "My Portfolio",
      github: "https://github.com/guka20/myportfolio",
      website: "https://myportfolio-gules-xi.vercel.app/",
    },
    {
      name: "Movies",
      github: "https://github.com/guka20/movies",
      website: "https://movies-silk-pi.vercel.app/",
    },
    {
      name: "Rest Country Api",
      github: "https://github.com/guka20/rest-countries-api",
      website: "https://rest-country-api-one.vercel.app/",
    },
  ];
  return (
    <>
      <section className="projects">
        <header>
          <h1>My Highest Level Projects</h1>
        </header>
        <main className="projects-list">
          {projetsList.map((l, index) => (
            <ProjectItem
              key={index}
              name={l.name}
              github={l.github}
              website={l.website}
            />
          ))}
        </main>
        <Footer />
      </section>
    </>
  );
};
