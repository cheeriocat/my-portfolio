import PersonalInfo from "@/components/AboutMe/PersonalInfo";
import Education from "@/components/AboutMe/Education";
import WhatIDo from "@/components/AboutMe/WhatIDo";
import Experience from "@/components/AboutMe/Experience";
import FeaturedProjects from "@/app/projects/FeaturedProjects";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <PersonalInfo />
      <Experience />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WhatIDo />
        <Education />
      </div>

      <FeaturedProjects />
    </div>
  );
}
