"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { HiBriefcase } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const NavigationBar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-primary !text-white !rounded-none px-4 py-8 md:!px-36 md:!py-6"
    >
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active
          className="!text-white !text-base hover:!scale-110"
        >
          <div className="flex items-center gap-1">
            <div>
              <IoMdHome className="text-lg" />
            </div>
            <div> Home</div>
          </div>
        </Navbar.Link>

        <Navbar.Link
          href="#work"
          className="!text-white !text-base hover:!scale-110"
        >
          <div className="flex items-center gap-1">
            <div>
              <HiBriefcase className="text-lg" />
            </div>
            <div>Work Experience</div>
          </div>
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          className="!text-white !text-base hover:!scale-110"
        >
          <div className="flex items-center gap-1">
            <div>
              <MdLocalPhone className="text-lg" />
            </div>
            <div>Contact Me</div>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2 mt-4 ml-0 md:ml-4">
        <Link
          href="https://www.linkedin.com/in/vishal-thapa-7a6692141/"
          target="_blank"
        >
          <Button className="text-white text-base bg-transparent border border-white hover:!bg-transparent hover:!scale-110">
            Hire me
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default NavigationBar;
