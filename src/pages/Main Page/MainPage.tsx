import { CenterDiv } from "../../components/CenterDiv/CenterDiv";
import { Header } from "../../components/Header/Header";
import { StyleMainPage } from "./MainPage.style";
import { useRef } from "react";

export const MainPage = () => {
  const section1Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const section2Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const section3Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const section4Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const section5Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    event?.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyleMainPage>
      <Header
        scrollToSection={scrollToSection}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
        section5Ref={section5Ref}
      />
      <section className="join-wind">
        <h1>Добро пожаловать в мир знаний</h1>
      </section>

      <section className="lecture-wind" ref={section1Ref}>
        <CenterDiv
          heading="ЛЕКЦИЯ"
          desc="Go from design to site with Framer, the web builder for creative pros."
          button="ЧИТАТЬ"
          path="lecture-page"
        />
      </section>

      <section className="practice-wind" ref={section3Ref}>
        <CenterDiv
          heading="ПРАКТИКА"
          desc="Go from design to site with Framer, the web builder for creative pros."
          button="НАЧАТЬ"
          path="practice-page"
        />
      </section>

      <section className="video-classes-wind" ref={section2Ref}>
        <CenterDiv
          heading="ВИДЕО УРОКИ"
          desc="Go from design to site with Framer, the web builder for creative pros."
          button="СМОТРЕТЬ"
          path="video-classes-page"
        />
      </section>

      <section className="metodichka-wind" ref={section5Ref}>
        <CenterDiv
          heading="МЕТОДИЧКА"
          desc="Go from design to site with Framer, the web builder for creative pros."
          button="ЧИТАТЬ"
          path="metodichka-page"
        />
      </section>

      <section className="tests-wind" ref={section4Ref}>
        <CenterDiv
          heading="ТЕСТЫ"
          desc="Go from design to site with Framer, the web builder for creative pros."
          button="ПРОЙТИ"
          path="tests-page"
        />
      </section>

      <footer></footer>
    </StyleMainPage>
  );
};
