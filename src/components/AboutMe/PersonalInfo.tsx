import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5">
      <div>
        <h1 className="text-xl md:text-4xl font-bold">Kaveen Nimsara</h1>
        <h3 className="text-blue-500 text-sm md:text-xl mt-1">
          Computer Science Undergraduate
        </h3>

        <div className="mt-6">
          <p className="text-gray-700 dark:text-gray-300 md:text-base text-sm">
            I&apos;m a Computer Science undergraduate from Sri Lanka, passionate
            about building clean and impactful web applications using modern
            technologies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 md:text-base text-sm mt-3">
            I enjoy working with React, TypeScript, and exploring new tools in
            the frontend and full-stack space.
          </p>
        </div>

        <div className="mt-5 flex md:flex-row flex-col gap-3">
          <Link href="/projects">
            <Button className="text-white w-full">
              <BiSolidRightArrowCircle className="mr-2 text-lg" />
              View Projects
            </Button>
          </Link>
          <Link
            href="/assets/Kaveen_CV new.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="w-full">
              <FaFilePdf className="mr-2 w-4 h-4" />
              View Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
