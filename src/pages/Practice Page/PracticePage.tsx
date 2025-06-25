import { StylePracticePage } from "./PracticePage.style";
import { useLocation, useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect } from "react";
import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";

export const PracticePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка в начало
  }, [pathname]); // Запускается при изменении пути
  return (
    <StylePracticePage>
      <HeaderForPages />

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          arrows: true,
          pagination: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          keyboard: "global",
        }}
        className="custom-progress-slider"
      >
        <SplideSlide>
          <div className="subject">
            <img src="./lecture_1.jpg" />
            <div className="Info">
              <h1>ЭЛЕКТРОСНАБЖЕНИЕ</h1>
              <h2>
                Install the plugin and convert your designs to a responsive
                site.
              </h2>
              <button
                className="glow-on-hover"
                onClick={() => navigate("/energetic-practices")}
              >
                Get started
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="subject">
            <img src="./lecture_2.jpg" />
            <div className="Info">
              <h1>GREEN / SMART TECHNOLOGY</h1>
              <h2>Browse dozens of templates. Click, duplicate, customize.</h2>
              <button
                className="glow-on-hover"
                onClick={() => navigate("/green-smart-practices")}
              >
                Get started
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="subject">
            <img src="./image_3.jpg" />
            <div className="Info">
              <h1>БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ</h1>
              <h2>
                Install the plugin and convert your designs to a responsive
                site.
              </h2>
              <button
                className="glow-on-hover"
                onClick={() => navigate("/BJD")}
              >
                Get started
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </StylePracticePage>
  );
};
