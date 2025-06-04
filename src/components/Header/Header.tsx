import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { StyleHeader } from "./Header.style";
import { useState, useEffect } from "react";
import { NotMobileUl } from "./NotMobileUl/NotMobileUl";

interface Props {
  goToSlide: (index: number) => void;
}

export const Header = ({ goToSlide }: Props) => {
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
                style={{ width: "50px", height: "50px", marginLeft: "20px" }}
              />
            </a>
          </div>
          <div>
            <span style={{ color: "white", textTransform: "uppercase" }}>
              Амурова Н. Ю.
            </span>
          </div>
          {notMobile && <NotMobileUl goToSlide={goToSlide} />}
          <div>{isMobile && <BurgerMenu goToSlide={goToSlide} />}</div>
        </div>
      </header>
    </StyleHeader>
  );
};
