import React from "react";
import MassageInputField from "./MassageInputField";
import MassageList from "./MassageList";

const Main = (name) => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col rounded-2xl bg-gray-100 h-screen p-4 overflow-y-hidden">
            <div className="flex-auto overflow-clip">
              <MassageList />
            </div>
            <div>
              <MassageInputField name={name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
