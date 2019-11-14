/**
 * @Author: Ali
 * @Date:   2019-11-14T13:47:59+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-14T18:17:24+01:00
 */
import React from "react";
import styled from "styled-components";

const Button = props => (
  <div className="button" data-value={props.value} onClick={props.handleClick}>
    {props.label}
  </div>
);

export default Button;
