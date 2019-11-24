/**
 * @Author: Ali
 * @Date:   2019-11-14T13:22:40+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-16T17:12:46+01:00
 */

import React, { useState } from "react";
import Buttons from "./Buttons";
import Button from "./Button";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const handleClick = e => {
    //e.target = <button>
    // button's value = innerText

    setInput(e.target.innerText);
  };
  return (
    <div className="App">
      <div className="display">{input}</div>
      <Buttons>
        <div className="row">
          <Button handleClick={handleClick} label="C" value="clear" />
          <Button handleClick={handleClick} label="7" value="7" />
          <Button handleClick={handleClick} label="4" value="4" />
          <Button handleClick={handleClick} label="1" value="1" />
          <Button handleClick={handleClick} label="0" value="0" />
        </div>
        <Button handleClick={handleClick} label="/" value="/" />
        <Button handleClick={handleClick} label="8" value="8" />
        <Button handleClick={handleClick} label="5" value="5" />
        <Button handleClick={handleClick} label="2" value="2" />
        <Button handleClick={handleClick} label="." value="." />

        <Button handleClick={handleClick} label="x" value="*" />
        <Button handleClick={handleClick} label="9" value="9" />
        <Button handleClick={handleClick} label="6" value="6" />
        <Button handleClick={handleClick} label="3" value="3" />
        <Button label="" value="null" />

        <Button handleClick={handleClick} label="-" value="-" />
        <Button handleClick={handleClick} label="+" size="2" value="+" />
        <Button handleClick={handleClick} label="=" size="2" value="equal" />
      </Buttons>
    </div>
  );
};

export default App;
