import React from "react";

const MassageList = () => {
  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid h-full gap-y-2">
          <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div className="relative ml-3 text-2xl bg-white py-2 px-4 shadow rounded-xl">
                <div>Hey How are you today?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassageList;
