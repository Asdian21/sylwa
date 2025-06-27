import { CenterDiv } from "../../components/CenterDiv/CenterDiv";
import { Header } from "../../components/Header/Header";
import { StyleMainPage } from "./MainPage.style";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const MainPage = () => {
  const splideRef = useRef<any>(null);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  // Функция переключения слайда по индексу
  const goToSlide = (index: number) => {
    event?.preventDefault();
    splideRef.current?.go(index);
  };

  return (
    <StyleMainPage>
      <div className="stickyHeader">
        <Header goToSlide={goToSlide} />
      </div>

      <section className="join-wind">
        <div className="shadow">
          <h1>Welcome to the world of knowledge</h1>
          {/* <h1>Добро пожаловать в мир знаний</h1> */}
          <div className="creator">
            <span>Developed by Yedixanov Said</span>
            <span>+998 90 901-32-81</span>
            <span>Designed by Muminov Abdulloh</span>
            <span>+998 90 008-75-11</span>
          </div>
        </div>
      </section>

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
        onMounted={(splide: any) => {
          splideRef.current = splide;
        }}
      >
        <SplideSlide>
          <section className="lecture-wind" ref={section1Ref}>
            <CenterDiv
              heading="ЛЕКЦИЯ"
              desc="Go from design to site with Framer, the web builder for creative pros."
              button="ЧИТАТЬ"
              path="lecture-page"
            />
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="practice-wind" ref={section3Ref}>
            <CenterDiv
              heading="ПРАКТИКА"
              desc="Go from design to site with Framer, the web builder for creative pros."
              button="НАЧАТЬ"
              path="practice-page"
            />
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="video-classes-wind" ref={section2Ref}>
            <CenterDiv
              heading="ВИДЕО УРОКИ"
              desc="Go from design to site with Framer, the web builder for creative pros."
              button="СМОТРЕТЬ"
              path="video-page"
            />
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="metodichka-wind" ref={section5Ref}>
            <CenterDiv
              heading="ГАЛЕРЕЯ"
              desc="Go from design to site with Framer, the web builder for creative pros."
              button="ЧИТАТЬ"
              path="gallery-page"
            />
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="tests-wind" ref={section4Ref}>
            <CenterDiv
              heading="ТЕСТЫ"
              desc="Go from design to site with Framer, the web builder for creative pros."
              button="ПРОЙТИ"
              path="test-page"
            />
          </section>
        </SplideSlide>
      </Splide>
      <footer></footer>
    </StyleMainPage>
  );
};
