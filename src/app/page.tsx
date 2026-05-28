import PersonalInfo from "@/components/AboutMe/PersonalInfo";
import Education from "@/components/AboutMe/Education";
import WhatIDo from "@/components/AboutMe/WhatIDo";
import FeaturedProjects from "@/app/projects/FeaturedProjects";

export default function Home() {
  return (
    <div className="p-0 lg:pl-20 lg:pr-20 lg:pt-10">
      <PersonalInfo />
      <hr className="mt-5 md:mt-10" />
      <div className="mt-5 md:mt-10">
        <Education />
      </div>
      <hr className="mt-5 md:mt-10" />
      <div className="mt-5 md:mt-10">
        <WhatIDo />
      </div>
      <hr className="mt-5 md:mt-10" />
      <div className="mt-5 md:mt-10">
        <FeaturedProjects />
      </div>
    </div>
  );
}
