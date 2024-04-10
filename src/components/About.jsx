import Img1 from "../assets/about_1.png";
import Img2 from "../assets/about_2.png";
import Img3 from "../assets/about_3.png";

function About() {
  return (
    <div className="about" id="about">
      <h1>about me</h1>
      <div className="rows">
        <div className="row row-1">
          <p>
            Born in Teruel, Spain, Miguel Murciano discovered his real passion
            for films when he was a kid and his father introduced him to Sergio
            Leone’s spaghetti western films. He soon realized how a genre could
            be turned into comedy, finding new ways of showing the same in a
            creative way to entertain people. He then got a Master degree on
            Films at ECAM, Madrid Cinema School. Afterwards, he moved to Italy
            to work in the post-production and camera areas and shot his first
            short film called, La Metafora del Piccione, (The Pigeon’s Metaphor)
            shortlisted in several festivals in four continents and won two
            awards. He then came back to Spain to start his career in
            advertising, getting stronger in comedy and post production. He has
            filmed in four different continents making his vision wider and very
            much appreciate it in the industry.
          </p>
          <div className="row-1-images">
            <img src={Img1} />
            <img src={Img2} />
          </div>
        </div>
        <div className="row row-2">
          <img src={Img3} />
          <p>
            Currently Miguel is based in Mexico City where he has worked for
            brands such as Coca-Cola, Amazon, Fiat, Nestlè, UPS, Bimbo,
            Santander bank, Philips among others. He is very talented when it
            comes to humour, directing actors and post-production, bringing
            creative solutions that impact on effective results.
            <br />
            He is also into international food, motorsports, rugby, history,
            sailing and traveling around the world, if it is possible he likes
            to combine them but as you know it is really difficult to play rugby
            on a sailboat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
