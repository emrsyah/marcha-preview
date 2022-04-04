import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

function Content() {
  return (
    <div className="bg-[#F8F6FF]">
    <nav className="flex justify-center items-center my-5 bg-white">
      <h5 className="font-bold text-xl">Payment</h5>
    </nav>
    <Tab.Group>
      <Tab.List className="grid grid-cols-2">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? "text-base font-semibold px-4 border-b-[4px] border-purple-600 transition-all ease-out duration-100" : "text-base font-semibold text-gray-500"
              }
            >
              In
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? "text-base font-semibold px-4 border-b-[4px] border-purple-600 transition-all ease-out duration-100" : "text-base font-semibold text-gray-500"
              }
            >
              Out
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className="mx-5 my-7">
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}

export default Content;
