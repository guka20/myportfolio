import React from "react";
import { BsDiscord, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="socials">
      <h2>Socials:</h2>
      <span className="icon">
        <a
          href="https://www.facebook.com/gu.ka.75098/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </span>
      <span className="icon">
        <a
          href="https://www.linkedin.com/in/gurami-davitadze-5013a8224/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </span>
      <span className="icon">
        <a href="https://github.com/guka20" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </span>
      <span className="icon">
        <a
          href="https://discord.com/channels/guka#7954"
          target="_blank"
          rel="noreferrer"
        >
          <BsDiscord />
        </a>
      </span>
    </footer>
  );
};
