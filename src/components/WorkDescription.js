import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
export default function WorkDescription(props) {
  return (
    <div className="flex flex-col justify-center font-montserrat">
      <h2 className="font-semibold">{props.title}</h2>
      <h3 className="sm:hidden">{props.company}</h3>
      <span className="mb-4 sm:mb-2">{props.date}</span>

      <ul>
        {props.points &&
          props.points.map((point) => {
            return (
              <li className="mb-2">
               <FontAwesomeIcon icon={faStar} style={{color: "#7a6e9b",}} className="mr-2"/>
                {point}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
