"use client";

import Link from "next/link";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="font-bold">
          <div className="flex justify-center mb-6">
            <img src="/me.png" alt="me" className="rounded-full h-72" />
          </div>
          <div className="flex flex-wrap text-4xl front-bold">
            <div className="border-2 animate-bounce shadow-lg shadow-primary flex justify-center bg-primary w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              V
            </div>
            <div className="border-2 shadow-lg shadow-pink flex justify-center bg-pink w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              I
            </div>
            <div className="border-2 shadow-lg shadow-primary flex justify-center bg-primary w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              S
            </div>
            <div className="border-2 shadow-lg shadow-pink flex justify-center bg-pink w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              H
            </div>
            <div className="border-2 flex justify-center bg-primary w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              A
            </div>
            <div className="border-2 shadow-lg shadow-pink flex justify-center bg-pink w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              L
            </div>
          </div>
          <div className="flex flex-wrap text-4xl front-bold">
            <div className="border-2 shadow-lg shadow-pink flex justify-center bg-pink w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              T
            </div>
            <div className="border-2 shadow-lg shadow-primary flex justify-center bg-primary w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              H
            </div>
            <div className="border-2 shadow-lg shadow-pink flex justify-center bg-pink w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              A
            </div>
            <div className="border-2 shadow-lg shadow-primary flex justify-center bg-primary w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              P
            </div>
            <div className="border-2 shadow-lg shadow-pink flex justify-center bg-pink w-20 text-white p-4 mr-4 mb-4 rounded-2xl">
              A
            </div>
          </div>
          <h5 className="text-3xl font-bold tracking-tight text-primary animate-pulse">
            Fullstack Developer
          </h5>
          <p className="font-normal text-xl text-pink">Learning Enthusiastic</p>
          <div className="border-b-2 border-primary w-16 pb-4"></div>
        </div>
        <div className="flex gap-3 py-4">
          <div>
            <Link
              href={"https://www.linkedin.com/in/vishal-thapa-7a6692141/"}
              target="_blank"
            >
              <img
                src="/linkedin.png"
                alt="linkedin"
                className="h-12 hover:scale-110"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://github.com/vishalqubits"} target="_blank">
              <img
                src="/github.png"
                alt="linkedin"
                className="h-12 hover:scale-110"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://medium.com/@vishalqubits"} target="_blank">
              <img
                src="/medium.png"
                alt="linkedin"
                className="h-12 hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
