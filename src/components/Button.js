/**
 * @Author: Ali
 * @Date:   2019-11-14T13:47:59+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-15T19:25:27+01:00
 */
import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  color: red;
  display: inline-block;
  background: #fea47f;
  font-size: 1.6em;
  margin: 0.5em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  box-shadow: 5px 5px 1px #0f0f0f;
  &:hover {
    color: white;
    background: #00b894;
    box-shadow: 1px 1px 1px #0f0f0f;
  }
`;

const Button = props => {
  return (
    <>
      <MyButton>{props.label}</MyButton>
    </>
  );
};
export default Button;
