import React, { useState } from "react";
import SignIn from "./Singin";
import Main from "./main";
// import config from '../config.json';

const App = () => {
  const [name, setName] = useState("");
  console.log({ name });
  if (name === "") {
    return (
      <div>
        <SignIn setName={setName} />
      </div>
    );
  } else {
    return <Main name={name} />;
  }
};
export default App;
