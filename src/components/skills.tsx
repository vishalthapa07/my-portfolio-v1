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
        <div className="w-full overflow-auto no-scrollbar relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Skills Tab</p>
          <Skills />
        </div>
      ),
    },
    {
      title: "Developer",
      value: "developer",
      content: (
        <div className="w-full overflow-auto no-scrollbar relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Developer Experience tab</p>
          <DeveloperExperience />
        </div>
      ),
    },
    {
      title: "Teaching",
      value: "teaching",
      content: (
        <div className="w-full overflow-auto no-scrollbar relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Teaching Experience tab</p>
          <TeachingExperience />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-28 md:my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const skillsConstant = [
  {
    id: 1,
    stack: "Frontend Technologies",
    tools:
      "React, Next JS, Typescript, React Native, Tailwind, Flowbite, Zustand, JS, CSS, HTML",
  },
  {
    id: 2,
    stack: "Backend Technologies",
    tools:
      "Node JS, Express JS, Rest API, GraphQL, Prisma, Database: MYSQL, MongoDB",
  },
  {
    id: 3,
    stack: "Others",
    tools: "Python, Git & GitHub, Figma, Wordpress, Vercel, AWS",
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
