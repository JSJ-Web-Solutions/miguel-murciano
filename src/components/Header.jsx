function Header() {
  return (
    <div className="header">
      <img
        src="mm-logo-removebg-preview.png"
        alt="logo"
        className="header__logo"
      />
      <a href="#intro" className="header__link">
        WORK
      </a>
      <a href="#about" className="header__link">
        ABOUT ME
      </a>
      <a href="#contact" className="header__link">
        CONTACT
      </a>
    </div>
  );
}

export default Header;
