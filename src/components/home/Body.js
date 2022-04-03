import React from "react";
import HistoryCard from "./HistoryCard";
import foto1 from "../../assets/marcha-ahmad.svg";
import foto2 from "../../assets/marcha-john.svg";

let data = [
  {
    id: 1,
    nama: "Ahmad Joni",
    waktu: "Hari ini, 17:00",
    jumlah: "50.000",
    pemasukan: true,
    gambar: foto1,
  },
  {
    id: 2,
    nama: "John Doe",
    waktu: "01 April, 11:29",
    jumlah: "150.000",
    pemasukan: false,
    gambar: foto2,
  },
//   {
//     id: 3,
//     nama: "John Doe",
//     waktu: "01 April, 11:29",
//     jumlah: "150.000",
//     pemasukan: true,
//     gambar: foto2,
//   },
];

function Body() {
  return (
    <main className="mx-5 my-8">
      <div className="flex justify-between">
        <h5 className="text-sm font-semibold">Last Activity</h5>
        <p className="text-[13px] font-medium text-purple-600 cursor-pointer hover:text-purple-700">See all</p>
      </div>
      <div className="flex gap-3 flex-col my-4">
        {data.map((d) => (
          <HistoryCard data={d} key={d.id} />
        ))}
      </div>
    </main>
  );
}

export default Body;
