import "animate.css";
import Star from "../images/star.svg"
export default function LandingPage() {
  return (
    <div className="gradient landing-page w-full h-screen flex justify-center place-items-center text-purple-400 ">
      <div className="flex flex-col justify-center h-1/3 place-items-center relative m-4
      ">
        <img src={Star} alt="star" className="w-12 sm:w-24 absolute top-0 left-0 "/>
        <div className="animate__animated animate__lightSpeedInRight md:text-6xl text-4xl font-paytone">
          Hi. I'm Ashley.
        </div>
        <div className="animate__animated animate__lightSpeedInLeft md:text-6xl text-4xl font-paytone">
          A Programmer.
        </div>
        <div className="font-montserrat font-semibold text-center md:w-6/12 md:text-xl text-sm w-10/12 mt-3 z-20">
          I’m passionate about building experiences that are engaging,
          accessible, and innovative.{" "}
        </div>
        <img src={Star} alt="star" className="w-12 sm:w-24 absolute bottom-0 right-0 "/>
      </div>

    </div>
  );
}
