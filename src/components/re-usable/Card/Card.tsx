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
  return (
    <div className="bg-white w-[370px] cursor-pointer h-auto m-5 rounded-md p-3">
      <div className=" flex flex-1 w-full h-[210px]">
        <img src={each.img} className="rounded-md" alt="" />
      </div>
      <div className="mt-2">
        <h3 className="text-2xl font-semibold">{each.name}</h3>
        <div className="mt-2">
          <h5 className="text-md font-semibold">
            Start : <span className=" font-normal">{each.start}</span>
          </h5>
        </div>
        <div className="mt-2">
          <h5 className="text-md font-semibold">
            End : <span className=" font-normal">{each.end}</span>
          </h5>
        </div>
        <div className="mt-2">
          <h5 className="text-md font-semibold"> Timezone : <span className=" font-normal">{each.timeZone}</span></h5>
        </div>
        <div className="mt-2">
          <h5 className="text-md font-semibold"> Place : <span className=" font-normal">{each.place}</span></h5>
        </div>
        <div className="mt-2">
          <button
            type="button"
            disabled={each["status"] === "Registrations Full"}
            className="w-full rounded-md bg-[#cd6727] px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-[#cd6727ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {each.status}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
