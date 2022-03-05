import React, { useRef, useEffect } from "react";
import Gravatar from "react-gravatar";

const MessageListItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);
  const md5 = require("md5");

  useEffect(() => {
    if (isLastItem) {
      //スムーズスクロール処理
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);
  console.log({ name });
  console.log({ isLastItem });
  return (
    <div className="col-start-1 rounded-lg" ref={ref}>
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center flex-shrink-0">
          <Gravatar
            md5={md5(name)}
            rating="pg"
            default="wavatar"
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
};

export default MessageListItem;
