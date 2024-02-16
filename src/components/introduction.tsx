"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div>
      <div>
        <TypeAnimation
          className="text-3xl font-bold tracking-tight text-white py-4"
          sequence={["Vishal Thapa", 1000]}
          wrapper="span"
          speed={5}
          style={{ fontSize: "6em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <TypeAnimation
        className="text-3xl font-bold tracking-tight text-white py-4"
        sequence={["Fullstack Developer", 1000, "Learning Enthusiastic", 1000]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <div className="border-b-2 border-white w-16 pb-4"></div>
      <div className="flex gap-3 py-4">
        <div>
          <Link
            href={"https://www.linkedin.com/in/vishal-thapa-7a6692141/"}
            target="_blank"
          >
            <FaLinkedin className="text-5xl text-white hover:scale-110" />
          </Link>
        </div>
        <div>
          <Link href={"https://github.com/vishalqubits"} target="_blank">
            <FaGithub className="text-5xl text-white hover:scale-110" />
          </Link>
        </div>
        <div>
          <Link href={"https://medium.com/@vishalqubits"} target="_blank">
            <SiMedium className="text-5xl text-white hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
