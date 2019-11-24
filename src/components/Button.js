/**
 * @Author: Ali
 * @Date:   2019-11-14T13:47:59+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-16T12:01:23+01:00
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

const Button = ({ value, handleClick, label }) => {
  return (
    <>
      <MyButton onClick={handleClick}>{label}</MyButton>
    </>
  );
};
export default Button;
// <div onClick={this.props.onClick} className="Button" data-size={this.props.size} data-value={this.props.value}>
