import React from "react";
import styled from "styled-components";

export function BurguerButton(props) {
  return (
    <NavBurguer>
      <div
        onClick={props.handleClick}
        className={`nav-icon ${props.clicked ? "open" : ""} `}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </NavBurguer>
  );
}

const NavBurguer = styled.div`
  .nav-icon {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon span {
    background-color: #EAE7B1;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
  }
  .nav-icon span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon span:nth-child(2) {
    top: 13px;
    left: 0px;
  }
  .nav-icon span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon:not(.open):hover span:nth-child(1) {
    transform: scaleY(1.2);
    left: -5px;
  }
  .nav-icon:not(.open):hover span:nth-child(2) {
    transform: rotate(5deg) scaleY(1.1);
  }
  .nav-icon:not(.open):hover span:nth-child(3) {
    transform: scaleY(1.2);
    left: 5px;
  }
  .nav-icon.open span:nth-child(1) {
    transform: rotate(45deg) scaleX(0.7);
    top: 13px;
    left: -8px;
  }
  .nav-icon.open span:nth-child(2) {
    transform: scale(0);
    transition-duration: 50ms;
  }
  .nav-icon.open span:nth-child(3) {
    transform: rotate(-45deg) scaleX(0.7);
    top: 13px;
    left: 7px;
  }
`;
