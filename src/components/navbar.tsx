"use client";

import { Button, Navbar } from "flowbite-react";

const NavigationBar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-primary to-pink text-white !rounded-none"
    >
      <div className="flex md:order-2 ">
        <Button className="text-white text-base bg-transparent border border-white hover:!bg-transparent hover:!scale-110">
          Hire me
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="#"
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
    </Navbar>
  );
};

export default NavigationBar;
