import { BsGithub } from "react-icons/bs";
export const Skills = () => {
  const skillsList = [
    {
      name: "HTML",
      link: "html.png",
      width: "70px",
    },
    {
      name: "CSS",
      link: "css.png",
      width: "70px",
    },
    {
      name: "SASS",
      link: "sass.png",
      width: "70px",
    },
    {
      name: "JavaScript",
      link: "javascript.png",
      width: "70px",
    },
    {
      name: "TypeScript",
      link: "typescript.png",
      width: "70px",
    },
    {
      name: "ReactJS",
      link: "react.png",
      width: "70px",
    },
    {
      name: "Github",
      link: "github.png",
      width: "83px",
    },
  ];
  return (
    <ul className="skills">
      {skillsList.map((l, index) => (
        <li className="skill" key={index}>
          <img
            src={require(`../assets/${l.link}`)}
            alt="html"
            width={l.width}
          />
          <h2>{l.name}</h2>
        </li>
      ))}
    </ul>
  );
};
