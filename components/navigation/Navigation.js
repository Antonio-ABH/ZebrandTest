import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import List from "./List";
import Logo from "./Logo";

const NavBar = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #b9ad91;
  justify-content: space-between;
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleBurger = (e) => {
    setOpen(!open);
  };
  return (
    <NavBar>
      <Logo />
      <List open={open} />
      <Hamburger open={open} toggleBurger={toggleBurger} />
    </NavBar>
  );
};

export default Navigation;
