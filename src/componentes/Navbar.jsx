import React, { useState } from "react";
import styled from "styled-components";
import { BurguerButton } from "./Burguer";

export function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando es verdadero lo pasa a falso al hacerle click, y vice versa
    setClicked(!clicked);
  };
  return (
    <NavContainer>
      <h2>
        Juan <span>Cáceres</span>
      </h2>
      <div className={`links ${clicked ? "active" : ""}`}>
        <a href="#h">Home</a>
        <a href="#h">My Services</a>
        <a href="#h">About Me</a>
        <a href="#h">My Work</a>
        <a href="#h">Contact</a>
      </div>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  h2 {
    margin-left: 20px;
    color: #EAE7B1;
    font-weight: 400;
    span {
    font-weight: bold;
    }
  }
  border-radius: 0 0 10px 10px;
  display: flex;
  padding: 0.4rem;
  background-color: #3C6255;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 2rem;
    color: #3C6255;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -1000px;
    left: 3000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    a {
      font-weight: bold;
      color: #3C6255;
      font-size: 1.8rem;
      display: block;
    }
    @media (min-width: 800px) {
      position: initial;
      margin: 0;
      a {
        font-weight: bold;
        color: #EAE7B1;
        font-size: 1.5rem;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 19%;
    left: 17%;
    right: 0;
    text-align: center;
    a {
      font-weight: bold;
      font-size: 2rem;
      margin-top: 1rem;
      color: #3C6255;
    }
  }
  .burguer {
    @media (min-width: 800px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #A6BB8D;
  top: -1000px;
  left: 1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active {
    border-radius: 0 0 0 80%;
    top: 0;
    left: 15%;
    width: 85%;
    height: 80%;
    @media(min-width: 800px) {
        top: -1000px;
        left: 1000px;
    }
  }
`;
