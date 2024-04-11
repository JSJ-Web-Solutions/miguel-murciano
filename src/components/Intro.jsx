function Intro() {
  function mouseOverHandler(e) {
    e.target.setAttribute("controls", "true");
    e.target.play();
  }

  function mouseLeaveHandler(e) {
    e.target.removeAttribute("controls");
    e.target.pause();
  }

  return (
    <section className="intro" id="intro">
      <div className="intro__vid-1-container">
        <video
          src="/videos/cocacola-vid.mp4"
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          muted
          loop
          disableRemotePlayback
          className="intro__vid-1"
        ></video>
        <div className="intro__vid-text">
          <p className="intro__vid-text-title">coca cola</p>
          <p className="intro__vid-text-subtitle">REAL MAGIC DC</p>
        </div>
      </div>
      <div className="intro__vid-2-3">
        <div className="intro__vid-2-container">
          <video
            src="/videos/c2-core-vid.mp4"
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-2"
          ></video>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">c2</p>
            <p className="intro__vid-text-subtitle">CORE</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-container">
            <video
              src="/videos/fiat-vid.mp4"
              onMouseOver={mouseOverHandler}
              onMouseLeave={mouseLeaveHandler}
              muted
              loop
              disableRemotePlayback
              className="intro__vid-3"
            ></video>
            <div className="intro__vid-text">
              <p className="intro__vid-text-title">fiat</p>
              <p className="intro__vid-text-subtitle">SII UNICO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intro__vid-4-5-lines">
        <div className="intro__vid-4-container">
          <video
            src="/videos/ups-vid.mp4"
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-4"
          ></video>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">ups</p>
            <p className="intro__vid-text-subtitle">BE UNSTOPPABLE</p>
          </div>
        </div>
        <div className="intro__vid-line1"></div>
        <div className="intro__vid-line2"></div>
        <div className="intro__vid-5-container">
          <video
            src="/videos/barcel-vid.mp4"
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-5"
          ></video>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">barcel</p>
            <p className="intro__vid-text-subtitle">
              ORGULLOSAMENTE BOTANEROS DC
            </p>
          </div>
        </div>
      </div>
      <div className="intro__vid-6-7">
        <div className="intro__vid-6-container">
          <video
            src="/videos/c2-freeze-vid.mp4"
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-6"
          ></video>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">c2</p>
            <p className="intro__vid-text-subtitle">FREZZE</p>
          </div>
        </div>
        <div className="intro__vid-7-container">
          <video
            src="/videos/tajin-vid.mp4"
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-7"
          ></video>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">tajin dulce</p>
            <p className="intro__vid-text-subtitle">DC</p>
          </div>
        </div>
      </div>
      <div className="intro__vid-8-line">
        <div className="intro__vid-line3"></div>
        <div className="intro__vid-8-container">
          <video
            src="/videos/dulces-vid.mp4"
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-8"
          ></video>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">dulces vero</p>
            <p className="intro__vid-text-subtitle">ENCHILOVERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
