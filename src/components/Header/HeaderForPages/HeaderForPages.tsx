import { StyleHeaderForPages } from "./HeaderForPages.style";
import { useEffect, useState } from "react";
import { NotMobileHeader } from "./NotMobileHeader/NotMobileHeader";
import MenuForPages from "../../MenuForPages/MenuForPages";

export const HeaderForPages = () => {
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
    <StyleHeaderForPages>
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
            <span>
              <a
                href="/about"
                style={{ color: "white", textTransform: "uppercase" }}
              >
                Амурова Н. Ю.
              </a>
            </span>
          </div>
          {notMobile && <NotMobileHeader />}
          <div>{isMobile && <MenuForPages />}</div>
        </div>
      </header>
    </StyleHeaderForPages>
  );
};
