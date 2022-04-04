import React, { Fragment } from "react";
import foto1 from "../../assets/marcha-samuel.svg";
import foto2 from "../../assets/marcha-john.svg";
import { Tab } from "@headlessui/react";
import PaymentInCard from "./PaymentInCard";

const dataIn = [
  {
    id: 1,
    nama: 'Samuel',
    tipe: 'in',
    jumlah: '18.000',
    note: 'Makan Padang',
    deadline: '17/04',
    status: 'Pending',
    gambar: foto1,
  },
  {
    id: 2,
    nama: 'John',
    tipe: 'in',
    jumlah: '20.000',
    note: 'Futsal',
    deadline: '01/04',
    status: 'Over Deadline',
    gambar: foto2,
  },
]

const dataOut = [
  {
    id: 1,
    nama: 'Samuel',
    tipe: 'out',
    jumlah: '18.000',
    note: 'Makan Padang',
    deadline: '17/04',
    status: 'Pending',
    gambar: foto1,
  },
  {
    id: 2,
    nama: 'John',
    tipe: 'out',
    jumlah: '20.000',
    note: 'Futsal',
    deadline: '01/04',
    status: 'Over Deadline',
    gambar: foto2,
  },
]

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
      <Tab.Panels className="my-7">
        <Tab.Panel>
          <div className="my-10 flex flex-col gap-7">
          {dataIn.map(d=>(
            <PaymentInCard key={d.id} data={d} />
          ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
        <div className="my-10 flex flex-col gap-7">
          {dataOut.map(d=>(
            <PaymentInCard key={d.id} data={d} />
          ))}
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}

export default Content;

