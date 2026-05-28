import React from "react";
import { academics } from "@/data/academic";

const Education = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-5">Education</h2>
      <div className="flex flex-col gap-4">
        {academics.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div>
              <h3 className="font-semibold text-base">{item.degree}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.institution}
              </p>
              <p className="text-sm text-gray-400">
                {item.startYear} — {item.endYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
