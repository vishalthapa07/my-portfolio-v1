"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ContactMe() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        details={contactDetails}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Contact
            </h1>
          </>
        }
      />
    </div>
  );
}

export const contactDetails = [
  {
    id: 1,
    name: "Comming soon !!",
  },
];
