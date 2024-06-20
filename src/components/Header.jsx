import { Squash as Hamburger } from "hamburger-react";

function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <img src="mm-logo-mobile.png" alt="logo" className="header__logo" />
        </div>
        <a href="#intro" className="header__link">
          WORK
        </a>
        <a href="#about" className="header__link">
          ABOUT ME
        </a>
        <a href="#contact" className="header__link">
          CONTACT
        </a>
        <div onClick={props.onMenuClick} className="header__burger-btn">
          <Hamburger
            toggled={props.isOpen}
            color="#756f70"
            hideOutline={true}
            rounded
          />
        </div>
      </div>
    </>
  );
}

export default Header;
