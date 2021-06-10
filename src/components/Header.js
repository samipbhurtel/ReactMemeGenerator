import React from "react";
import MemeLogic from "./MemeLogic";

const Header = () => {
  return (
    <div>
      <header className="ui green inverted segment center aligned">
        <h1>GenMeme</h1>
      </header>
      <MemeLogic />
    </div>
  );
};

export default Header;
