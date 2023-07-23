import { Combobox } from "@headlessui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Icon from "../../utils/Icon";

interface Props{
  query: string,
  setQuery: Function
}

export default function SearchBar({ query, setQuery}:Props) {

  return (
    <div className="bg-[#e3ded5] rounded-md w-full">
      <Combobox>
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400">
            <Icon icon={faMagnifyingGlass} />
          </div>
          <Combobox.Input
            className="h-12 w-full border-0 bg-transparent outline-none pl-11 pr-4 text-gray-900 placeholder:text-gray-400 sm:text-sm"
            placeholder="Search by event name..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
}
