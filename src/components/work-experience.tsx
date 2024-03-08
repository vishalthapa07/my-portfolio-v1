"use client";

import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const workConstant = [
  {
    id: 1,
    date: "Jan 2023 - Present",
    position: "Fullstack Developer",
    location: " SkillPrompt, Butwal, Nepal",
  },
  {
    id: 1,
    date: "Jan 2022 - Dec 2022",
    position: "Backend Developer",
    location: " SkillPrompt, Butwal, Nepal",
  },
  {
    id: 1,
    date: "Jul 2021 - Dec 2021",
    position: "Frontend Developer",
    location: " SkillPrompt, Butwal, Nepal",
  },
  {
    id: 1,
    date: "Apr 2021 - Jun 2021",
    position: "UI/UX Designer",
    location: " SkillPrompt, Butwal, Nepal",
  },
];

const WorkExperience = () => {
  return (
    <Timeline className="my-4">
      {workConstant.map((item) => {
        return (
          <Timeline.Item key={item.id}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="text-white">{item.date}</Timeline.Time>
              <Timeline.Title className="text-white">
                {item.position}
              </Timeline.Title>
              <Timeline.Body className="text-white">
                {item.location}
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};

export default WorkExperience;
