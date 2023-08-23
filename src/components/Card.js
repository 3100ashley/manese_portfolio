import ProjectModal from "./Modal";
export default function Card(props) {
  return (
    <div>
      <div className="border-2 border-black w-80 h-56 gradient rounded-md flex place-items-center justify-center mb-4">
        <img src={props.icon} alt={props.alt} className="w-36" />
      </div>
      <h2 className="font-montserrat font-semibold">{props.title}</h2>
      <ProjectModal>{props.children}</ProjectModal>
    </div>
  );
}
