import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";

const overlays = document.getElementById("overlays");

function App() {
  const [mobNavVisible, setMobNavVisible] = useState(false);

  const toggleNav = () => {
    setMobNavVisible((prevState) => !prevState);
  };

  return (
    <>
      {mobNavVisible &&
        ReactDOM.createPortal(
          <MobileNav navVisible={mobNavVisible} onMenuClick={toggleNav} />,
          overlays
        )}
      <Header isOpen={mobNavVisible} onMenuClick={toggleNav} />
      <Intro />
      <About />
      <Contact />
      <div className="copyright">
        <a href="https://jsjsolutions.net/" target="_blank">
          ©2024 JSJ Web Solutions. All rights reserved.
        </a>
      </div>
    </>
  );
}

export default App;
