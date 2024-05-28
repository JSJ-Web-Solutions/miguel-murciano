import React from "react";

const LazyVideo = React.lazy(() => import("./LazyVideo"));

function Intro() {
  return (
    <section className="intro" id="intro">
      {/* 1 */}
      <div className="intro__vid-1-container video-left">
        <LazyVideo
          src="/videos/cocacola-vid.mp4"
          placeholder={"/placeholder-imgs/cocacola.jpg"}
          muted
          loop
          disableRemotePlayback
          className="video intro__vid-1"
        ></LazyVideo>

        <div className="intro__vid-text">
          <p className="intro__vid-text-title">coca cola</p>
          <p className="intro__vid-text-subtitle">REAL MAGIC DC</p>
        </div>
      </div>
      {/* 2 - 3 */}
      <div className="intro__vid-2-3-10-11">
        <div className="intro__vid-2-10-container video-right">
          <LazyVideo
            src="/videos/fiat-vid.mp4"
            placeholder={"/placeholder-imgs/fiat.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-2-10"
          ></LazyVideo>
          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">fiat</p>
            <p className="intro__vid-text-s-subtitle">SII UNICO</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-11-container video-left">
            <LazyVideo
              src="/videos/c2-core-vid.mp4"
              placeholder={"/placeholder-imgs/c2-core.jpg"}
              muted
              loop
              disableRemotePlayback
              className="video intro__vid-3-11"
            ></LazyVideo>
            <div className="intro__vid-text-s">
              <p className="intro__vid-text-s-title">c2</p>
              <p className="intro__vid-text-s-subtitle">CORE</p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 - 5 */}
      <div className="intro__vid-4-5-lines">
        <div className="intro__vid-4-container video-right">
          <LazyVideo
            src="/videos/ups-vid.mp4"
            placeholder={"/placeholder-imgs/ups.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">ups</p>
            <p className="intro__vid-text-subtitle">BE UNSTOPPABLE</p>
          </div>
        </div>
        <div className="intro__vid-line1"></div>
        <div className="intro__vid-line2"></div>
        <div className="intro__vid-5-container video-left">
          <LazyVideo
            src="/videos/barcel-vid.mp4"
            placeholder={"/placeholder-imgs/barcel.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-5"
          ></LazyVideo>

          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">barcel</p>
            <p className="intro__vid-text-s-subtitle">
              ORGULLOSAMENTE BOTANEROS DC
            </p>
          </div>
        </div>
      </div>
      {/* 6 - 7 */}
      <div className="intro__vid-6-7">
        <div className="intro__vid-6-container video-right">
          <LazyVideo
            src="/videos/c2-freeze-vid.mp4"
            placeholder={"/placeholder-imgs/c2-freeze.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-6"
          ></LazyVideo>

          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">c2</p>
            <p className="intro__vid-text-s-subtitle">FREEZE</p>
          </div>
        </div>
        <div className="intro__vid-7-container video-left">
          <LazyVideo
            src="/videos/dulces-vid.mp4"
            placeholder={"/placeholder-imgs/dulces.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-7"
          ></LazyVideo>
          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">dulces vero</p>
            <p className="intro__vid-text-s-subtitle">ENCHILOVEROS</p>
          </div>
        </div>
      </div>
      {/* 8 - 9 */}
      <div className="intro__vid-8-9-lines">
        <div className="intro__vid-line3"></div>
        <div className="intro__vid-8-container video-right">
          <LazyVideo
            src="/videos/tajin-vid.mp4"
            placeholder={"/placeholder-imgs/tajin.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">tajin dulce</p>
            <p className="intro__vid-text-subtitle">DC</p>
          </div>
        </div>
        <div className="intro__vid-9-container video-left">
          <LazyVideo
            src="/videos/barritas-vid.mp4"
            placeholder={"/placeholder-imgs/barritas.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-5"
          ></LazyVideo>
          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">barritas marinela</p>
            <p className="intro__vid-text-s-subtitle">DC</p>
          </div>
        </div>
        <div className="intro__vid-line4"></div>
      </div>
      {/* 10 - 11 */}
      <div className="intro__vid-2-3-10-11">
        <div className="intro__vid-2-10-container video-right">
          <LazyVideo
            src="/videos/square-vid.mp4"
            placeholder={"/placeholder-imgs/square.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-2-10"
          ></LazyVideo>
          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">almarai</p>
            <p className="intro__vid-text-s-subtitle">SQUARE CHEESE GIRL</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-11-container video-left">
            <LazyVideo
              src="/videos/nito-vid.mp4"
              placeholder={"/placeholder-imgs/nito.jpg"}
              muted
              loop
              disableRemotePlayback
              className="video intro__vid-3-11"
            ></LazyVideo>
            <div className="intro__vid-text-s">
              <p className="intro__vid-text-s-title">bimbo</p>
              <p className="intro__vid-text-s-subtitle">NITO BERRY</p>
            </div>
          </div>
        </div>
      </div>
      {/* 12 */}
      <div className="intro__vid-1-container video-right">
        <LazyVideo
          src="/videos/adidas-vid.mp4"
          placeholder={"/placeholder-imgs/adidas.jpg"}
          muted
          loop
          disableRemotePlayback
          className="video intro__vid-1"
        ></LazyVideo>

        <div className="intro__vid-text">
          <p className="intro__vid-text-title">adidas ocean store</p>
          <p className="intro__vid-text-subtitle">DC</p>
        </div>
      </div>
      {/* 13 - 14 */}
      <div className="intro__vid-6-7 m-top">
        <div className="intro__vid-6-container video-left">
          <LazyVideo
            src="/videos/nestle-vid.mp4"
            placeholder={"/placeholder-imgs/nestle.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-6"
          ></LazyVideo>
          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">recetas nestlé</p>
            <p className="intro__vid-text-s-subtitle">EL SABOR DEL PODER</p>
          </div>
        </div>
        <div className="intro__vid-7-container video-right">
          <LazyVideo
            src="/videos/ippolita-vid.mp4"
            placeholder={"/placeholder-imgs/ippolita.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-7"
          ></LazyVideo>
          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">cervezas fortuna</p>
            <p className="intro__vid-text-s-subtitle">IPPOLITA</p>
          </div>
        </div>
      </div>
      {/* 15 - 16 */}
      <div className="intro__vid-4-5-lines">
        <div className="intro__vid-4-container video-left">
          <LazyVideo
            src="/videos/santander-vid.mp4"
            placeholder={"/placeholder-imgs/santander.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">santander</p>
            <p className="intro__vid-text-subtitle">UNIVERSIDAD</p>
          </div>
        </div>
        <div className="intro__vid-line1"></div>
        <div className="intro__vid-line2"></div>
        <div className="intro__vid-5-container video-right">
          <LazyVideo
            src="/videos/santander2-vid.mp4"
            placeholder={"/placeholder-imgs/santander2.jpg"}
            muted
            loop
            disableRemotePlayback
            className="video intro__vid-5"
          ></LazyVideo>

          <div className="intro__vid-text-s">
            <p className="intro__vid-text-s-title">santander</p>
            <p className="intro__vid-text-s-subtitle">VERANO</p>
          </div>
        </div>
      </div>
      {/* 17 - 18 */}
      <div className="intro__vid-1-container video-left">
        <LazyVideo
          src="/videos/motorcycle-vid.mp4"
          placeholder={"/placeholder-imgs/motorcycle.jpg"}
          muted
          loop
          disableRemotePlayback
          className="video intro__vid-1"
        ></LazyVideo>
        <div className="intro__vid-text">
          <p className="intro__vid-text-title">motorcycle workshop</p>
          <p className="intro__vid-text-subtitle">DC</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
