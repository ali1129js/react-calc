/**
 * @Author: Ali
 * @Date:   2019-11-14T13:22:40+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-24T14:46:41+01:00
 */
import React, { useState } from "react";
import Nums from "./Nums";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="display">{input}</div>
      <Nums setInput={setInput} />
    </div>
  );
};

export default App;
