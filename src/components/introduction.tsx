"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const Introduction = () => {
  return (
    <div>
      <div className="text-white text-7xl font-bold tracking-tight">
        Vishal Thapa
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
          <Link href={"https://github.com/vishalthapa07"} target="_blank">
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

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] w-full h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-black dark:text-white"
        >
          About me
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-neutral-300 w-full text-justify"
        >
          Hey there! I am Vishal, a software developer hailing from Nepal.
          Specializing in crafting immersive and user-centric online
          experiences, I bring 3+ years of hands-on expertise to the world of
          web applications and websites development.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/me.jpeg"
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-sm font-normal text-black"
          >
            <a href="#work">Skills →</a>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white text-sm font-bold"
          >
            <a href="#contact">Contact me</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
