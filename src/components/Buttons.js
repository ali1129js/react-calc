/**
 * @Author: Ali
 * @Date:   2019-11-14T13:27:17+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-15T19:25:01+01:00
 */
import React from "react";
import styled from "styled-components";

const Wraps = styled.div`
  background: #cad3c8;
  border: 2px solid blue;
`;

const Buttons = props => (
  <Wraps>
    {" "}
    <div className="buttons-wrapper"> {props.children}</div>
  </Wraps>
);

export default Buttons;
