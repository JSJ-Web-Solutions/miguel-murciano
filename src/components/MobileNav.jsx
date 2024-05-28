import { useRef } from "react";

function MobileNav(props) {
  const nodeRef = useRef(null);

  return (
    <>
      <div ref={nodeRef} className="background"></div>
      <div className="container">
        <nav>
          <ul className="mobile-nav">
            <li onClick={props.onMenuClick}>
              <a href="#intro">WORK</a>
            </li>
            <li onClick={props.onMenuClick}>
              <a href="#about">ABOUT ME</a>
            </li>
            <li onClick={props.onMenuClick}>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
