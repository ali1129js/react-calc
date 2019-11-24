/**
 * @Author: Ali
 * @Date:   2019-11-24T14:38:24+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-24T14:46:12+01:00
 */
import React from "react";
import Button from "./Button";
const Nums = ({ setInput }) => (
  <>
    <Button setInput={setInput} label="C" value="clear" />
    <Button setInput={setInput} label="7" value="7" />
    <Button setInput={setInput} label="4" value="4" />
    <Button setInput={setInput} label="1" value="1" />
    <Button setInput={setInput} label="0" value="0" />
    <Button setInput={setInput} label="/" value="/" />
    <Button setInput={setInput} label="8" value="8" />
    <Button setInput={setInput} label="5" value="5" />
    <Button setInput={setInput} label="2" value="2" />
    <Button setInput={setInput} label="." value="." />

    <Button setInput={setInput} label="x" value="*" />
    <Button setInput={setInput} label="9" value="9" />
    <Button setInput={setInput} label="6" value="6" />
    <Button setInput={setInput} label="3" value="3" />
    <Button setInput={setInput} label="" value="null" />

    <Button setInput={setInput} label="-" value="-" />
    <Button setInput={setInput} label="+" size="2" value="+" />
    <Button setInput={setInput} label="=" size="2" value="equal" />
  </>
);

export default Nums;
