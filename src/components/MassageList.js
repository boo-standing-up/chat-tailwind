import React, { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import {
  getDatabase,
  ref,
  onValue,
  limitToLast,
  query,
} from "firebase/database";

const MassageList = () => {
  const [massages, setMassages] = useState([]);
  const md5 = require("md5");
  const db = getDatabase();
  const starCountRef = query(ref(db, "/message"), limitToLast(5));
  // const recentPostsRef = query(ref(db, 'posts'), limitToLast(100));

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
    <div className="flex flex-col h-full overflow-x-auto mb-2 ">
      <div className="flex flex-col gap-2">
        {massages.map(({ key, name, text }) => {
          return (
            <div key={key} className="col-start-1 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Gravatar
                    md5={md5(name)}
                    rating="pg"
                    default="retro"
                    className="h-10 w-10 rounded-full bg-indigo-500"
                  />
                </div>
                <div className="grid relative ml-3 bg-white py-2 px-4 shadow rounded-xl">
                  <div>
                    <div className=" text-lg font-semibold">{name}</div>
                    <div>{text}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MassageList;
