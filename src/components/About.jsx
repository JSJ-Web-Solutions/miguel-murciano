import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function About() {
  return (
    <div className="about" id="about">
      <div className="about_title_container">
        <h1>about me</h1>
        <hr />
      </div>
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
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper-1"
            >
              <SwiperSlide className="swiper-slide-1">
                <img
                  src="/about_h1.JPG"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-1-img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/about_h2.JPG"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-1-img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/about_h3.png"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-1-img"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper-2"
            >
              <SwiperSlide className="swiper-slide-2">
                <img
                  src="/about_h4.png"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-2-img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-2">
                <img
                  src="/about_h5.png"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-2-img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-2">
                <img
                  src="/about_v1.jpg"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-2-img"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="row row-2">
          <div className="row-2-images">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper-3"
            >
              <SwiperSlide className="swiper-slide-3">
                <img
                  src="/about_v4.jpg"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-3-img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-3">
                <img
                  src="/about_v5.jpg"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-3-img"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="swiper-slide-3">
                <img
                  src="/about_v2.jpg"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-3-img"
                />
              </SwiperSlide> */}
              <SwiperSlide className="swiper-slide-3">
                <img
                  src="/about_v3.JPG"
                  alt=""
                  loading="lazy"
                  className="swiper-slide-3-img"
                />
              </SwiperSlide>
            </Swiper>
          </div>
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
