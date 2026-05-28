import React from "react";
import { experiences } from "@/data/experience";

const Experience = () => {
  if (experiences.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-5">Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div>
              <h3 className="font-semibold text-base">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.company}
              </p>
              <p className="text-sm text-gray-400">
                {item.startDate} — {item.endDate}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
