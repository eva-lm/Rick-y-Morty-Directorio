import React from "react";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <img
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="header"
        />
      </div>
    </header>
  );
};
export default Header;
