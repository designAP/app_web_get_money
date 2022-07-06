import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./items/Navbar";
import MenuButton from "./items/MenuButton";


function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <img src={require('../icon.png').default} width="72" height="72" />
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
