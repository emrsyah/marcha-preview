import React from "react";
import { Icon } from "@iconify/react";

function Features() {
  return (
    <div className="mx-5 flex justify-between my-6">
      <div className="flex flex-col items-center gap-1">
        <div className="text-blue-600 bg-blue-100 flex justify-center items-center p-3 max-w-max rounded-lg">
          <Icon icon="carbon:branch" width="30" />
        </div>
        <p className="text-xs font-medium">Split Bill</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="text-purple-600 bg-purple-100 flex justify-center items-center p-3 max-w-max rounded-lg">
          <Icon icon="ph:users-three" width="30" />
        </div>
        <p className="text-xs font-medium">Group</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="text-yellow-600 bg-yellow-100 flex justify-center items-center p-3 max-w-max rounded-lg">
          <Icon icon="uil:credit-card" width="30" />
        </div>
        <p className="text-xs font-medium">Virtucard</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="text-green-600 bg-green-100 flex justify-center items-center p-3 max-w-max rounded-lg">
        <Icon icon="ph:circles-four-bold" width="30" />
        </div>
        <p className="text-xs font-medium">More</p>
      </div>
    </div>
  );
}

export default Features;
