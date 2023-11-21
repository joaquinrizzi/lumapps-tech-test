import React from "react";
import { FlexBox, Alignment } from "@lumx/react";
import Logo from "../Logo";

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <FlexBox vAlign={Alignment.left}>
        <Logo />
				
      </FlexBox>
     
    </nav>
  );
};

export default Navbar;
