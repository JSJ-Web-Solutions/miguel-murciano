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
      <p className="copyright">©2024 JSJ Web Solutions. All rights reserved.</p>
    </>
  );
}

export default App;
