import WorkDescription from "./WorkDescription";
import { useState } from "react";

const WorkExperience = [
  {
    title: "Junior Software Engineer",
    company: "CSULA Student Union",
    date: "September 2021 - August 2023",
    points: ["Took leadership in modernizing the student union web platform to use Typescript and Next.js with React.", "Deployed an automated token refresh mechanism by utilizing API calls and effectively scheduling cron jobs.", "This work addressed app vulnerabilities, accessibility issues, and code reusability. The product’s reliability remained stable throughout the project"],
  },
  {
    title: "Software Engineer Intern",
    company: "Snap Inc.",
    date: "May 2022 - August 2022",
    points: ["Implemented a new role-based auth service for a content management system for accessing internal tools to enable traceability performed within the apps.", "Enhanced ops efficiency by reorganizing the display of information on internal platforms, working directly with stakeholders to understand key data for their operations.", "Increased unit test coverage for user-facing apps by 5%, improving app security and quality."],
  },
  {
    title: "STEM Instructor/Mentor",
    company: "Dreams for Schools",
    date: "September 2021 - December 2021",
    points: ["Develop curriculum to guide over 17 elementary schools students with game development using Scratch.", "Responsibilities include organizing various STEM-related activities, such as building a basic application, to teach computer science fundamentals and  cultivate curiosity."],
  },
  {
    title: "Snap Engineer Scholar",
    company: "Snap Academies",
    date: "June 2021 - August 2021",
    points: ["Worked in a cross-functional team of six to implement a mobile prototype feature on SnapMaps, called SnapLOVE, to help provide resources for the LGBTQIA+ community.", "Worked closely with the nonprofit, Outfest, as well as Snapchat engineers, designers, and marketers.", "Focused on creating a responsive front-end using React Native and sending data to users using Firebase."],
  },
];
export default function Work() {
  const [itemNumber, setItemNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const ToggleClass = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 work-section flex min-h-screen flex-col place-items-center justify-center">
        <div>
          <h1 className="text-purple-300 font-paytone text-3xl md:text-5xl mb-8">
            Where I've Worked
          </h1>
          <div className="flex">
            <div className="font-montserrat font-semibold text-2xl hidden md:block mr-16">
              <ul>
                <li className="mb-6 hover:text-purple-300" onClick={(e) => {
                    e.preventDefault()
                    ToggleClass()
                    setItemNumber(0)
                }}>
                  CSULA Student Union
                </li>
                <li className="mb-6 hover:text-purple-300" onClick={(e) => {
                    e.preventDefault()
                    setItemNumber(1)
                }}>Snap Inc.</li>
                <li className="mb-6 hover:text-purple-300" onClick={(e) => {
                    e.preventDefault()
                    setItemNumber(2)
                }}>Dreams for Schools</li>
                <li className="mb-6 hover:text-purple-300" onClick={(e) => {
                    e.preventDefault()
                    setItemNumber(3)
                }}>Snap Academies</li>
              </ul>
            </div>
            <WorkDescription title={WorkExperience[itemNumber].title} company={WorkExperience[itemNumber].company} date={WorkExperience[itemNumber].date} points={WorkExperience[itemNumber].points}/>
          </div>
        </div>
        <div className="flex gap-10 mt-10 md:hidden">
          <div
            class="rounded-full border h-10 w-10 flex justify-center items-center text-purple-300 hover:text-purple-400"
            onClick={(e) => {
              if (itemNumber > 0) {
                setItemNumber(itemNumber - 1);
              }
              e.preventDefault();
            }}
          >
            ❮
          </div>
          <div
            class="rounded-full border h-10 w-10 flex justify-center items-center text-purple-300 hover:text-purple-400"
            onClick={(e) => {
              if (itemNumber < 3) {
                setItemNumber(itemNumber + 1);
              }
              e.preventDefault();
            }}
          >
            ❯
          </div>
        </div>
      </div>
    </>
  );
}
