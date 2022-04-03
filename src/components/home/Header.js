import React from "react";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className="bg-purple-600 items-center rounded-b-[40px]">
      <Navbar />
      <div className="flex items-center flex-col gap-2">
        <p className="text-white text-xs">Saldo Kamu</p>
        <h5 className="text-white text-3xl font-medium">Rp 350.000</h5>
        <div className="grid grid-cols-3 my-4 gap-10">
          <div className="flex items-center flex-col gap-1">
            <div className="text-white bg-[#BE85F2] p-2 rounded-lg">
              <Icon icon="akar-icons:arrow-up-right" width="32" />
            </div>
            <p className="text-white text-sm">Send</p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <div className="text-white bg-[#BE85F2] p-2 rounded-lg">
              <Icon icon="line-md:arrow-close-down" width="32" />
            </div>
            <p className="text-white text-sm">Request</p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <div className="text-white bg-[#BE85F2] p-2 rounded-lg">
              <Icon icon="akar-icons:plus" width="32" />
            </div>
            <p className="text-white text-sm">Top Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
