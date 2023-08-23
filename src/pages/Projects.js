import Card from "../components/Card";
import Camera from "../images/camera.svg";
import School from "../images/school.svg";
import Notes from "../images/notes.svg";
import Pocket from "../images/pocket-coach.svg";
import MemoryCards from "../images/cards.svg";
import Snap from "../images/snap.svg";
import Timer from "../images/timer.svg";
import StudentUnion from "../images/student-union.png"
import MemoryGame from "../images/memory-game.png"
import Pomodoro from "../images/pomodoro.png"
import PocketCoach from "../images/pocket-coach.png";
import NarutoFilter from "../images/naruto-filter.png"
import SnapLove from "../images/snap-love.png"
import Marked from "../images/marked.png"
const Cards = [
  {
    icon: School,
    alt: "school",
    title: "CSULA Student Union",
    description: "The CSULA Student Union website was rebuilt in 2023 to address app vulnerabilities, accessibility issues, and code reusability. I led the modernization of the student union web platform using Typescript and Next.js with React, addressing vulnerabilities, accessibility, and code reusability.I also implemented an automated token refresh mechanism with API calls and cron jobs, ensuring stability and security.",
    image: StudentUnion,
    href: "https://www.calstatelausu.org/"

  },
  {
    icon: Notes,
    alt: "notes",
    title: "Mark My Words",
    description: "A Mozilla extension that allows users to highlight and create notes within a webpage. Led a team of three using Javascript and jQuery as well as implementing agile methods. As a team we implemented data storage in LocalStorage for retrievable information.",
    image: Marked,
    href:"https://github.com/3100ashley/CS4540-Collab"
  },
  {
    icon: Snap,
    alt: "snapchat",
    title: "SnapLOVE",
    description: " SnapLOVE is a Snap layer in Snap Map that allows its users to find resources and opportunities in their area.I worked in a cross-functional to implement a mobile prototype feature on SnapMaps. We focused on creating a responsive front-end using React Native and sending data to users using Firebase.",
    image: SnapLove,
    href: "https://github.com/sugarfig/SnapLove",
  },
  {
    icon: Camera,
    alt: "camera",
    title: "Naurto Filter",
    description: "A Naurto based filter using p5.js and ml5.js. Using event logic to add in a new drawing. The Naurto head band will appear at all times. When the user smile whiskers will appear.",
    image: NarutoFilter,
    href: "https://3100ashley.github.io/naruto-snap-lens--ml5/"
  },
  {
    icon: Pocket,
    alt: "pocket coach",
    title: "Pocket Coach",
    description: "Worked in a team of three to build a prototype mobile application with React.js to help users be motivated to exercise and workout more.",
    image: PocketCoach,
    href: "https://csb-x4yhom.netlify.app/"

  },
  {
    icon: Timer,
    alt: "timer",
    title: "Pomodoro Timer",
    description: "A time management timer using React.js to promote productivity.",
    image: Pomodoro,
    href: "https://github.com/3100ashley/pomodoro",
  },
  {
    icon: MemoryCards,
    alt: "cards",
    title: "Memory Game",
    description: "Developed and published a responsive and interactive game using HTML, CSS, and JavaScript on Github Pages.",
    image: MemoryGame,
    href:"https://3100ashley.github.io/memory-game/"
  },
];
export default function Projects() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8 work-section min-h-full">
      <h1 className="text-purple-300 font-paytone text-3xl md:text-5xl mb-10 sm:mb-24 text-center md:text-left">
        Some Things I've built
      </h1>
      <div className="flex flex-wrap justify-center gap-y-14 gap-x-6 md:justify-between ">
        {Cards.map((card) => {
          return <Card {...card}>
            <h1 className="font-montserrat font-semibold text-xl mb-6">{card.title}</h1>
            <img src={card.image} alt={card.alt} className="mb-2 max-h-60"></img>
            <p className="mb-4">{card.description}</p>
            <a href={card.href} className="font-montserrat hover:text-purple-300" >Link to Project</a>
            

          </Card>;
        })}
      </div>
    </div>
  );
}
