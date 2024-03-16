"use client";

import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const teachingConstant = [
  {
    id: 1,
    date: "Jan 2022 - Present",
    position: "Instructor",
    location: " SkillPrompt, Butwal, Nepal",
  },
];

const TeachingExperience = () => {
  return (
    <Timeline className="my-4">
      {teachingConstant.map((item) => {
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

export default TeachingExperience;
