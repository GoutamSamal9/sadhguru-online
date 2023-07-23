import { useState } from "react";
import "./card.css";
import Icon from "../../../utils/Icon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface each {
  name: string;
  place: string;
  start: string;
  end: string;
  status: string;
  timeZone: string;
  img: string;
}
interface cardProps {
  each: each;
}

const Card = ({ each }: cardProps) => {
  const [isOver, setIsOver] = useState(false);
  const handelMouseOver = () => {
    setIsOver(true);
  };
  const handelMouseOut = () => {
    setIsOver(false);
  };
  return (
    <div
      className="relative lg:w-1/3 p-3 sm:w-full md:w-1/2"
      onMouseOver={handelMouseOver}
      onMouseOut={handelMouseOut}
    >
      <div className="bg-white">
        <div className="w-full h-48 ">
          <img src={each.img} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="mt-2">
          <div className="card-name text-2xl">{each.name}</div>
        </div>
        {isOver && (
          <div className="absolute right-10 bottom-10">
            <div className="border-2 cursor-pointer border-white flex items-center rounded-full">
              <Icon icon={faArrowRight} color="white" className="h-4 w-4 p-2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;

// {/* <div className="p-3">
//   <div className="mt-2">
//     <h5 className="text-md font-semibold">
//       Start : <span className="font-normal">{each.start}</span>
//     </h5>
//   </div>
//   <div className="mt-2">
//     <h5 className="text-md font-semibold">
//       End : <span className=" font-normal">{each.end}</span>
//     </h5>
//   </div>
//   <div className="mt-2">
//     <h5 className="text-md font-semibold">
//       {" "}
//       Timezone : <span className=" font-normal">{each.timeZone}</span>
//     </h5>
//   </div>
//   <div className="mt-2">
//     <h5 className="text-md font-semibold">
//       {" "}
//       Place : <span className=" font-normal">{each.place}</span>
//     </h5>
//   </div>
//   <div className="mt-2">
//     <button
//       type="button"
//       disabled={each["status"] === "Registrations Full"}
//       className="w-full rounded-sm border border-[#cd6727] px-3.5 py-2.5 text-xl font-semibold text-[#000000] hover:text-[#cd6727] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//     >
//       {each.status}
//     </button>
//   </div>
// </div> */}
