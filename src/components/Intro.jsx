import React from "react";

const LazyVideo = React.lazy(() => import("./LazyVideo"));

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro__vid-1-container">
        <LazyVideo
          src="/videos/cocacola-vid.mp4"
          placeholder={"/placeholder-imgs/cocacola.jpg"}
          muted
          loop
          disableRemotePlayback
          className="intro__vid-1"
        ></LazyVideo>

        <div className="intro__vid-text">
          <p className="intro__vid-text-title">coca cola</p>
          <p className="intro__vid-text-subtitle">REAL MAGIC DC</p>
        </div>
      </div>
      <div className="intro__vid-2-3">
        <div className="intro__vid-2-container">
          <LazyVideo
            src="/videos/c2-core-vid.mp4"
            placeholder={"/placeholder-imgs/c2-core.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-2"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">c2</p>
            <p className="intro__vid-text-subtitle">CORE</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-container">
            <LazyVideo
              src="/videos/fiat-vid.mp4"
              placeholder={"/placeholder-imgs/fiat.jpg"}
              muted
              loop
              disableRemotePlayback
              className="intro__vid-3"
            ></LazyVideo>
            <div className="intro__vid-text">
              <p className="intro__vid-text-title">fiat</p>
              <p className="intro__vid-text-subtitle">SII UNICO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intro__vid-4-5-lines">
        <div className="intro__vid-4-container">
          <LazyVideo
            src="/videos/ups-vid.mp4"
            placeholder={"/placeholder-imgs/ups.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">ups</p>
            <p className="intro__vid-text-subtitle">BE UNSTOPPABLE</p>
          </div>
        </div>
        <div className="intro__vid-line1"></div>
        <div className="intro__vid-line2"></div>
        <div className="intro__vid-5-container">
          <LazyVideo
            src="/videos/barcel-vid.mp4"
            placeholder={"/placeholder-imgs/barcel.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-5"
          ></LazyVideo>

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
          <LazyVideo
            src="/videos/c2-freeze-vid.mp4"
            placeholder={"/placeholder-imgs/c2-freeze.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-6"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">c2</p>
            <p className="intro__vid-text-subtitle">FREZZE</p>
          </div>
        </div>
        <div className="intro__vid-7-container">
          <LazyVideo
            src="/videos/tajin-vid.mp4"
            placeholder={"/placeholder-imgs/tajin.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-7"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">tajin dulce</p>
            <p className="intro__vid-text-subtitle">DC</p>
          </div>
        </div>
      </div>
      <div className="intro__vid-8-line">
        <div className="intro__vid-line3"></div>
        <div className="intro__vid-8-container">
          <LazyVideo
            src="/videos/dulces-vid.mp4"
            placeholder={"/placeholder-imgs/dulces.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-8"
          ></LazyVideo>

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
