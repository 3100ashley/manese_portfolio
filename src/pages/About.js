import MeOne from "../images/me.jpg";
import MeThree from "../images/garden-me.JPG";
import MeTwo from "../images/ny-me.jpg";
import Typewriter from "typewriter-effect";
import "animate.css";
export default function About() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8 min-h-full ">
        <div className="font-paytone text-center md:text-left md:mb-20 p-10">
          <h1 className="text-purple-300 text-3xl md:text-5xl animate__animated animate__bounce">
            Hello World
          </h1>
          <h2 className="font-semibold mb-6 text-2xl md:text-4xl  text-purple-400">
            I'm Ashley
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-evenly ">
          <img src={MeOne} alt="profile" className="rounded-lg h-96 " />
          <img
            src={MeTwo}
            alt="profile"
            className="rounded-lg h-96 hidden md:block "
          />
          <img
            src={MeThree}
            alt="profile"
            className="rounded-lg h-96 hidden lg:block "
          />
        </div>
      </div>
      <svg
        className="curve"
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 60.9707290132548,160.2685935198822 121.9414580265096,154.53718703976438 176,139 C 230.0585419734904,123.46281296023564 277.20489690721644,98.11984536082475 330,106 C 382.79510309278356,113.88015463917525 441.2389543446244,154.98343151693666 514,176 C 586.7610456553756,197.01656848306334 673.8392857142858,197.94642857142858 735,204 C 796.1607142857142,210.05357142857142 831.4039027982327,221.230854197349 894,197 C 956.5960972017673,172.769145802651 1046.5451030927834,113.13015463917526 1107,109 C 1167.4548969072166,104.86984536082474 1198.4156848306334,156.24852724594993 1249,175 C 1299.5843151693666,193.75147275405007 1369.7921575846833,179.87573637702502 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="#7a6d9b"
          fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 45.483615611192945,333.4935567010309 90.96723122238589,333.9871134020619 160,325 C 229.0327687776141,316.0128865979381 321.6146907216494,297.5451030927835 392,308 C 462.3853092783506,318.4548969072165 510.5740058910162,357.83247422680415 562,372 C 613.4259941089838,386.16752577319585 668.0892857142858,375.125 723,356 C 777.9107142857142,336.875 833.068851251841,309.6675257731959 884,304 C 934.931148748159,298.3324742268041 981.6353092783506,314.2048969072165 1050,324 C 1118.3646907216494,333.7951030927835 1208.3899116347568,337.5128865979381 1277,338 C 1345.6100883652432,338.4871134020619 1392.8050441826217,335.7435567010309 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="#7a6d9b"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
      <div className="bg-purple-300 text-white ">
        <div className="font-mono text-md md:text-2xl text-center">
          <Typewriter
            options={{
              strings: ["A programmer in the making"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="font-montserrat leading-7 text-sm lg:text-lg p-8 w-full max-w-screen-xl mx-auto p-2 md:py-8 min-h-full">
          <p className="mb-2">
            Hello! I'm Ashley (she/her) and I'm a software engineer based in Los
            Angeles. I have a strong background in full-stack software
            development and mobile/web application expertise. I'm proficient in
            a range of programming languages and tools, with hands-on experience
            in enhancing application security, accessibility, and user
            experience.
          </p>
          <p>
            I am a recent graduate from California State University Los Angeles
            with a Bachelor's of Science in Computer Science. When I'm not
            computing I am at the gym, playing board games, playing Animal
            Crossing, or reading.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7A6E9B"
          fill-opacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,106.7C384,107,480,149,576,149.3C672,149,768,107,864,96C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
