"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { MdEmail, MdLocalPhone } from "react-icons/md";

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
    name: (
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-2 text-base hover:!scale-110">
          <div>
            <MdEmail className="text-lg" />
          </div>
          <div>thapavishal48@gmail.com</div>
        </div>
        <div className="flex items-center gap-1 text-base hover:!scale-110">
          <div>
            <MdLocalPhone className="text-lg" />
          </div>
          <div>806-283-7133</div>
        </div>
      </div>
    ),
  },
];
