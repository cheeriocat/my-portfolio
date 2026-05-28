import React from "react";
import { skills } from "@/data/skills";

const WhatIDo = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-5">Skills</h2>
      <div className="flex flex-col gap-4">
        {skills.map((group, index) => (
          <div key={index}>
            <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
              {group.type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
