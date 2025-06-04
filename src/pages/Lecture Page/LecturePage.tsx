import { useLocation, useNavigate } from "react-router-dom";
import { StyleLecturePage } from "./LecturePage.style";
import { useEffect } from "react";
import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const LecturePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка в начало
  }, [pathname]); // Запускается при изменении пути

  return (
    <StyleLecturePage>
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
        // onMounted={(splide: any) => {
        //   splideRef.current = splide;
        // }}
      >
        <SplideSlide>
          <div className="energetika">
            <img src="./lecture_1.jpg" />
            <div className="Info">
              <h1>ЭЛЕКТРОСНАБЖЕНИЕ</h1>
              <h2>
                Install the plugin and convert your designs to a responsive
                site.
              </h2>
              <button onClick={() => navigate("/energetika-lectures")}>
                Get started
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="smart-technology">
            <img src="./lecture_2.jpg" />
            <div className="Info">
              <h1>GREEN / SMART TECHNOLOGY</h1>
              <h2>Browse dozens of templates. Click, duplicate, customize.</h2>
              <button
                onClick={() => navigate("/green-smart-technologies-lectures")}
              >
                Get started
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="life-save">
            <img src="./image_3.jpg" />
            <div className="Info">
              <h1 style={{ fontSize: "45px" }}>
                БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ
              </h1>
              <h2>
                Install the plugin and convert your designs to a responsive
                site.
              </h2>
              <button onClick={() => navigate("/BJD-lectures")}>
                Get started
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </StyleLecturePage>
  );
};
