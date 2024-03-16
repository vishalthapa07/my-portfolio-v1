"use client";

import { Tabs } from "./ui/tabs";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import DeveloperExperience from "./developer-experience";
import TeachingExperience from "./teaching-experience";

export function TabsDemo() {
  const tabs = [
    {
      title: "Skills",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Skills Tab</p>
          <Skills />
        </div>
      ),
    },
    {
      title: "Developer Experience",
      value: "developer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Developer Experience tab</p>
          <DeveloperExperience />
        </div>
      ),
    },
    {
      title: "Teaching Experience",
      value: "teaching",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Teaching Experience tab</p>
          <TeachingExperience />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const skillsConstant = [
  {
    id: 1,
    stack: "Frontend Technologies",
    tools: "React, Next JS, Typescript, Tailwind, Flowbite, JS, CSS, HTML",
  },
  {
    id: 1,
    stack: "Backend Technologies",
    tools: "Node JS, Express JS, GraphQL, Prisma,, MYSQL, trpc",
  },
  {
    id: 1,
    stack: "Others",
    tools: "Git & GitHub, Figma",
  },
];

const Skills = () => {
  return (
    <Timeline className="my-4">
      {skillsConstant.map((item) => {
        return (
          <Timeline.Item key={item.id}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Title className="text-white">
                {item.stack}
              </Timeline.Title>
              <Timeline.Body className="text-white">{item.tools}</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
