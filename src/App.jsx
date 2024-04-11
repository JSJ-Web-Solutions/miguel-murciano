import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Intro />
      <About />
      <Contact />
      <p className="copyright">©2024 JSJ Web Solutions. All rights reserved.</p>
    </>
  );
}

export default App;
