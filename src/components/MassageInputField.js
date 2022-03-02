import React, { useRef, useState } from "react";
import Gravatar from "react-gravatar";
import { writeUserData } from "../firebase";

const MassageInputField = ({ name }) => {
  const inputEL = useRef(null);
  const [text, setText] = useState("");
  const [composition, setComposition] = useState(false);
  const md5 = require("md5");

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div>
        <div className="flex items-center justify-center "></div>
        <Gravatar
          md5={md5(name)}
          rating="pg"
          default="wavatar"
          className="h-10 w-10 rounded-full bg-indigo-500"
        />
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            ref={inputEL}
            autoFocus
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (composition) return;
              const text = e.target.value;
              if (text === "") return;
              if (e.key === "Enter") {
                writeUserData(name, text);
                console.log("push firebase");
                setText("");
              }
            }}
            onCompositionStart={() => setComposition(true)}
            onCompositionEnd={() => setComposition(false)}
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="ml-4">
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          disabled={text === ""}
          onClick={() => {
            writeUserData(name, text);
            setText("");
            inputEL.current.focus();
          }}
        >
          <span>
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MassageInputField;
