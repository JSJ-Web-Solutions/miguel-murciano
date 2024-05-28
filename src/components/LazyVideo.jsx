import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function LazyVideo({ src, placeholder, ...props }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [videoSrc, setVideoSrc] = useState(null);
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  function mouseOverHandler(e) {
    e.target.setAttribute("controls", "true");
    e.target.play();
  }

  function mouseLeaveHandler(e) {
    e.target.removeAttribute("controls");
    e.target.pause();
  }

  function loadedDataHandler() {
    console.log("loaded data handler");
    setVideoLoaded(true);
  }

  useEffect(() => {
    if (inView && !videoSrc) {
      setVideoSrc(src);
    }
  }, [inView, src, videoSrc]);

  return (
    <div ref={ref} className="video-el-container">
      {inView && !isVideoLoaded && (
        <img
          src={placeholder}
          alt="Video loading..."
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          loading="lazy"
        />
      )}
      {inView && (
        <video
          preload="metadata"
          src={videoSrc}
          {...props}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          onLoadedData={loadedDataHandler}
          style={{
            visibility: isVideoLoaded ? "visible" : "hidden",
          }}
          autoPlay
        ></video>
      )}
    </div>
  );
}

export default LazyVideo;
