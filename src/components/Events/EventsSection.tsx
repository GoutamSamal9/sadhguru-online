import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import Card from "../ReUsable/Card/Card";
import ContainerLayout from "../ReUsable/ContainerLayout/ContainerLayout";

const EventsSection = () => {
  const [query, setQuery] = useState("");

  const eventList = [
    {
      name: "Bhava Spandana, Ladies (English) Volunteering",
      place: "Coimbatore, India",
      start: "July 16, 2023 - 2:00 PM",
      end: "July 19, 2023 - 26:00 PM",
      status: "Register",
      timeZone: "Asia/Kolkata",
      img: "https://online.sadhguru.org/web/image/758611-a543b56b/IEO.jpg",
    },
    {
      name: "Bhava Spandana, Ladies (English)",
      place: "Coimbatore, India",
      start: "July 16, 2023 - 2:00 PM",
      end: "July 19, 2023 - 26:00 PM",
      status: "Register",
      timeZone: "Asia/Kolkata",
      img: "https://online.sadhguru.org/web/image/753088-641af140/BSP.PNG",
    },
    {
      name: "Inner Engineering Retreat (English)",
      place: "Coimbatore, India",
      start: "July 25, 2023 - 12:00 PM",
      end: "July 28, 2023 - 26:00 PM",
      status: "Registrations Full",
      timeZone: "Asia/Kolkata",
      img: "https://online.sadhguru.org/web/image/258179-3d0c2c08/SG.png",
    },
    {
      name: "Bhava Spandana, Ladies (English)",
      place: "Coimbatore, India",
      start: "July 16, 2023 - 2:00 PM",
      end: "July 19, 2023 - 26:00 PM",
      status: "Register",
      timeZone: "Asia/Kolkata",
      img: "https://online.sadhguru.org/web/image/753088-641af140/BSP.PNG",
    },
    {
      name: "Inner Engineering Retreat (English)",
      place: "Coimbatore, India",
      start: "July 25, 2023 - 12:00 PM",
      end: "July 28, 2023 - 26:00 PM",
      status: "Registrations Full",
      timeZone: "Asia/Kolkata",
      img: "https://online.sadhguru.org/web/image/258179-3d0c2c08/SG.png",
    },
    {
      name: "Bhava Spandana, Ladies (English) Volunteering",
      place: "Coimbatore, India",
      start: "July 16, 2023 - 2:00 PM",
      end: "July 19, 2023 - 26:00 PM",
      status: "Register",
      timeZone: "Asia/Kolkata",
      img: "https://online.sadhguru.org/web/image/758611-a543b56b/IEO.jpg",
    },
  ];

  const filteredEvent =
    query === ""
      ? eventList
      : eventList.filter((each) => {
          return each.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className="mt-12 m-auto lg:w-1/3 px-4 sm:w-full md:w-1/2">
        <SearchBar setQuery={setQuery} query={query} />
      </div>
      <ContainerLayout>
        <div className="flex w-full flex-wrap">
          {filteredEvent.map((each, index:number) => (
            <Card key={index} each={each} />
          ))}
        </div>
        {/* <nav
          className="flex items-center mx-5 justify-between border-t border-gray-200 bg-white rounded-md px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">20</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <button className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
              Previous
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
              Next
            </button>
          </div>
        </nav> */}
      </ContainerLayout>
    </>
  );
};
export default EventsSection;
