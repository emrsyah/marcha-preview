import React from "react";
import { Icon } from "@iconify/react";
import profile from "../../assets/profile-marcha.svg";

function Navbar() {
  return (
    <nav className="p-5 flex justify-between items-center bg-purple-600">
      <div className="flex gap-2 items-center">
        <img src={profile} alt="" className="h-[40px] rounded-lg" />
        <div className="text-xs text-white">
          <p className="opacity-80">Welcome</p>
          <p className="text-[13px] font-medium">@emirsyahh</p>
        </div>
      </div>
      <div className="bg-white text-purple-600 p-1 rounded-lg">
        <Icon icon="ic:outline-notifications-none" width="24" />
      </div>
    </nav>
  );
}

export default Navbar;