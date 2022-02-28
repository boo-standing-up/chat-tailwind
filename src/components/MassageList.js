import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const MassageList = () => {
  const [massages, setMassages] = useState([]);
  const db = getDatabase();
  const starCountRef = ref(db, "/message");

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //  console.log(Object.entries(data)); 配列にしました。
      const entries = Object.entries(data);
      const newMessages = entries.map((entry) => {
        //0: Array(2)
        //0: "-Mwl3Nz8-jHsZ4oFAlG9"　←key
        //1: {name: 'Boo', text: 'どうなる'}　←NameAndText
        const [key, NameAndText] = entry;
        return { key, ...NameAndText };
      });
      console.log(newMessages);
      setMassages(newMessages);
    });
  }, []);

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
