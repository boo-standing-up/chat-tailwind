import * as React from "react";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Singin = ({ setName }) => {
  const [disabled, setDisabled] = React.useState(true);
  const [string, setString] = useState("");
  const [composition, setComposition] = useState(false);

  console.log({ disabled, string, composition });

  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white rounded-2xl border shadow-xl p-10 w-3/4 md:w-2/3 lg:w-1/3">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-2xl text-gray-700 text-center">
            チャットアプリへようこそ！
          </h1>
          <p className="text-center text-sm text-gray-500 w-5/6">
            ニックネームを入れてね。
          </p>
          <input
            type="text"
            placeholder="ニックネーム"
            className="border-2 rounded-lg w-full h-12 px-4"
            onChange={(e) => {
              setString(e.target.value);
            }}
            onKeyDown={(e) => {
              if (composition) return;
              if (e.key === "Enter") {
                setName(e.target.value);
              }
            }}
            onCompositionStart={() => setComposition(true)}
            onCompositionEnd={() => setComposition(false)}
          />
          <button
            className="bg-blue-600 focus:bg-blue-100 text-white rounded-md  font-semibold px-4 py-3 w-full"
            type="button"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disabled}
            onClick={() => {
              setName(string);
            }}
          >
            はじめる
          </button>
          <div className=" py-4">
            {" "}
            Copyright © Boo{"'"}s {new Date().getFullYear()}
            {"."}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singin;
