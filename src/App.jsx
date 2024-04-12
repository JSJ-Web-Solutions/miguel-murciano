import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
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
