"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-primary text-white !rounded-none !px-36 !py-6"
    >
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active
          className="!text-white !text-base hover:!scale-110"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="!text-white !text-base hover:!scale-110"
        >
          Skills
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="!text-white !text-base hover:!scale-110"
        >
          Work Experience
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="!text-white !text-base hover:!scale-110"
        >
          Contact Me
        </Navbar.Link>
      </Navbar.Collapse>
      <Link
        href="https://www.linkedin.com/in/vishal-thapa-7a6692141/"
        target="_blank"
      >
        <div className="flex md:order-2">
          <Button className="text-white text-base bg-transparent border border-white hover:!bg-transparent hover:!scale-110">
            Hire me
          </Button>
          <Navbar.Toggle />
        </div>
      </Link>
    </Navbar>
  );
};

export default NavigationBar;
