import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { StyleHeader } from "./Header.style";
import { useState, useEffect } from "react";
import { NotMobileUl } from "./NotMobileUl/NotMobileUl";

interface Props {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  section1Ref: React.RefObject<HTMLDivElement>;
  section2Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  section4Ref: React.RefObject<HTMLDivElement>;
  section5Ref: React.RefObject<HTMLDivElement>;
}

export const Header = ({
  scrollToSection,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}: Props) => {
  // Состояние для отслеживания ширины экрана
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 840);
  const [notMobile, setNotMobile] = useState<boolean>(window.innerWidth > 840);

  // Эффект для обновления состояния при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840); // Обновляем состояние
      setNotMobile(window.innerWidth > 840);
    };

    // Добавляем слушателя на изменение размера окна
    window.addEventListener("resize", handleResize);

    // Убираем слушателя при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <StyleHeader>
      <header>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img
                src="./eko_icon.png"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </div>
          {notMobile && (
            <NotMobileUl
              scrollToSection={scrollToSection}
              section1Ref={section1Ref}
              section2Ref={section2Ref}
              section3Ref={section3Ref}
              section4Ref={section4Ref}
              section5Ref={section5Ref}
            />
          )}
          <div>{isMobile && <BurgerMenu />}</div>
        </div>
      </header>
    </StyleHeader>
  );
};
