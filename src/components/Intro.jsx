import React from "react";

const LazyVideo = React.lazy(() => import("./LazyVideo"));

function Intro() {
  return (
    <section className="intro" id="intro">
      {/* 1 */}
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
      {/* 2 - 3 */}
      <div className="intro__vid-2-3-10-11">
        <div className="intro__vid-2-10-container">
          <LazyVideo
            src="/videos/c2-core-vid.mp4"
            placeholder={"/placeholder-imgs/c2-core.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-2-10"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">c2</p>
            <p className="intro__vid-text-subtitle">CORE</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-11-container">
            <LazyVideo
              src="/videos/fiat-vid.mp4"
              placeholder={"/placeholder-imgs/fiat.jpg"}
              muted
              loop
              disableRemotePlayback
              className="intro__vid-3-11"
            ></LazyVideo>
            <div className="intro__vid-text">
              <p className="intro__vid-text-title">fiat</p>
              <p className="intro__vid-text-subtitle">SII UNICO</p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 - 5 */}
      <div className="intro__vid-4-5-lines">
        <div className="intro__vid-4-container">
          <LazyVideo
            src="/videos/square-vid.mp4"
            placeholder={"/placeholder-imgs/square.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">square cheese girl</p>
            <p className="intro__vid-text-subtitle">ALMARAI</p>
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
      {/* 6 - 7 */}
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
      {/* 8 - 9 */}
      <div className="intro__vid-8-9-lines">
        <div className="intro__vid-line3"></div>
        <div className="intro__vid-8-container">
          <LazyVideo
            src="/videos/nito-vid.mp4"
            placeholder={"/placeholder-imgs/nito.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">nito berry funk</p>
            <p className="intro__vid-text-subtitle">BIMBO</p>
          </div>
        </div>
        <div className="intro__vid-9-container">
          <LazyVideo
            src="/videos/ups-vid.mp4"
            placeholder={"/placeholder-imgs/ups.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-5"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">ups</p>
            <p className="intro__vid-text-subtitle">BE UNSTOPPABLE</p>
          </div>
        </div>
        <div className="intro__vid-line4"></div>
      </div>
      {/* 10 - 11 */}
      <div className="intro__vid-2-3-10-11">
        <div className="intro__vid-2-10-container">
          <LazyVideo
            src="/videos/wmf-vid.mp4"
            placeholder={"/placeholder-imgs/black.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-2-10"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">wmf</p>
            <p className="intro__vid-text-subtitle">ACADEMIA ESTRELLAS</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-11-container">
            <LazyVideo
              src="/videos/barritas-vid.mp4"
              placeholder={"/placeholder-imgs/black.jpg"}
              muted
              loop
              disableRemotePlayback
              className="intro__vid-3-11"
            ></LazyVideo>
            <div className="intro__vid-text">
              <p className="intro__vid-text-title">barritas marinela</p>
              <p className="intro__vid-text-subtitle">DC</p>
            </div>
          </div>
        </div>
      </div>
      {/* 12 */}
      <div className="intro__vid-1-container">
        <LazyVideo
          src="/videos/adidas-vid.mp4"
          placeholder={"/placeholder-imgs/black.jpg"}
          muted
          loop
          disableRemotePlayback
          className="intro__vid-1"
        ></LazyVideo>

        <div className="intro__vid-text">
          <p className="intro__vid-text-title">adidas ocean store</p>
          <p className="intro__vid-text-subtitle">DC</p>
        </div>
      </div>
      {/* 13 - 14 */}
      <div className="intro__vid-6-7">
        <div className="intro__vid-6-container">
          <LazyVideo
            src="/videos/nestle-vid.mp4"
            placeholder={"/placeholder-imgs/nestle.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-6"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">recetas nestlé</p>
            <p className="intro__vid-text-subtitle">EL SABOR DEL PODER</p>
          </div>
        </div>
        <div className="intro__vid-7-container">
          <LazyVideo
            src="/videos/joma-vid.mp4"
            placeholder={"/placeholder-imgs/joma.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-7"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">joma</p>
            <p className="intro__vid-text-subtitle">OFICINTA</p>
          </div>
        </div>
      </div>
      {/* 15 - 16 */}
      <div className="intro__vid-4-5-lines">
        <div className="intro__vid-4-container">
          <LazyVideo
            src="/videos/ippolita-vid.mp4"
            placeholder={"/placeholder-imgs/ippolita.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">cervezas fortuna</p>
            <p className="intro__vid-text-subtitle">IPPOLITA</p>
          </div>
        </div>
        <div className="intro__vid-line1"></div>
        <div className="intro__vid-line2"></div>
        <div className="intro__vid-5-container">
          <LazyVideo
            src="/videos/santander-vid.mp4"
            placeholder={"/placeholder-imgs/santander.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-5"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">santander</p>
            <p className="intro__vid-text-subtitle">UNIVERSIDAD</p>
          </div>
        </div>
      </div>
      {/* 17 - 18 */}
      <div className="intro__vid-2-3-10-11">
        <div className="intro__vid-2-10-container">
          <LazyVideo
            src="/videos/philips-vid.mp4"
            placeholder={"/placeholder-imgs/black.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-2-10"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">philips</p>
            <p className="intro__vid-text-subtitle">HUE ATM</p>
          </div>
        </div>
        <div>
          <div className="intro__vid-3-11-container">
            <LazyVideo
              src="/videos/santander2-vid.mp4"
              placeholder={"/placeholder-imgs/santander2.jpg"}
              muted
              loop
              disableRemotePlayback
              className="intro__vid-3-11"
            ></LazyVideo>
            <div className="intro__vid-text">
              <p className="intro__vid-text-title">santander</p>
              <p className="intro__vid-text-subtitle">VERANO</p>
            </div>
          </div>
        </div>
      </div>
      {/* 19 - 20 */}
      <div className="intro__vid-8-9-lines">
        <div className="intro__vid-line3"></div>
        <div className="intro__vid-8-container">
          <LazyVideo
            src="/videos/ups-vid.mp4"
            placeholder={"/placeholder-imgs/motorcycle.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-4"
          ></LazyVideo>
          <div className="intro__vid-text">
            <p className="intro__vid-text-title">motorcycle workshop</p>
            <p className="intro__vid-text-subtitle">DC</p>
          </div>
        </div>
        <div className="intro__vid-9-container">
          <LazyVideo
            src="/videos/dulces-vid.mp4"
            placeholder={"/placeholder-imgs/black.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-5"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">dulces vero</p>
            <p className="intro__vid-text-subtitle">ENCHILOVEROS</p>
          </div>
        </div>
        <div className="intro__vid-line4"></div>
      </div>
      {/* 21 - 22 */}
      <div className="intro__vid-6-7">
        <div className="intro__vid-6-container">
          <LazyVideo
            src="/videos/buenos-vid.mp4"
            placeholder={"/placeholder-imgs/black.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-6"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">buenos propósitos</p>
            <p className="intro__vid-text-subtitle">SHORT FILM</p>
          </div>
        </div>
        <div className="intro__vid-7-container">
          <LazyVideo
            src="/videos/lea-vid.mp4"
            placeholder={"/placeholder-imgs/lea.jpg"}
            muted
            loop
            disableRemotePlayback
            className="intro__vid-7"
          ></LazyVideo>

          <div className="intro__vid-text">
            <p className="intro__vid-text-title">lea</p>
            <p className="intro__vid-text-subtitle">ERIKA VERA</p>
          </div>
        </div>
      </div>
      {/* 23 */}
      <div className="intro__vid-1-container">
        <LazyVideo
          src="/videos/trailer-vid.mp4"
          placeholder={"/placeholder-imgs/black.jpg"}
          muted
          loop
          disableRemotePlayback
          className="intro__vid-1"
        ></LazyVideo>

        <div className="intro__vid-text">
          <p className="intro__vid-text-title">la metafora piccione</p>
          <p className="intro__vid-text-subtitle">TRAILER</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
