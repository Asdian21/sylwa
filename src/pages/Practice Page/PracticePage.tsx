import { StylePracticePage } from "./PracticePage.style";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useRef } from "react";

export const PracticePage = () => {
  const section1Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const section2Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const section3Ref = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    event?.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка в начало
  }, [pathname]); // Запускается при изменении пути
  return (
    <StylePracticePage>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img
              src="./eko_icon.png"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </div>
        <ul>
          <li>
            <a
              href=""
              className="menu"
              onClick={() => scrollToSection(section1Ref)}
            >
              ЭЛЕКТРОСНАБЖЕНИЕ
            </a>
          </li>

          <li>
            <a
              href=""
              className="menu"
              onClick={() => scrollToSection(section2Ref)}
            >
              GREEN / SMART TECHNOLOGY
            </a>
          </li>

          <li>
            <a
              href=""
              className="menu"
              onClick={() => scrollToSection(section3Ref)}
            >
              БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ
            </a>
          </li>
        </ul>
      </div>

      <div className="energetika" ref={section1Ref}>
        <img src="./lecture_1.jpg" />
        <div className="Info">
          <h1>ЭЛЕКТРОСНАБЖЕНИЕ</h1>
          <h2>
            Install the plugin and convert your designs to a responsive site.
          </h2>
          <button onClick={() => navigate("/energetic-practices")}>
            Get started
          </button>
        </div>
      </div>
      <div className="smart-technology" ref={section2Ref}>
        <img src="./lecture_2.jpg" />
        <div className="Info">
          <h1>GREEN / SMART TECHNOLOGY</h1>
          <h2>Browse dozens of templates. Click, duplicate, customize.</h2>
          <button>Get started</button>
        </div>
      </div>
      <div className="life-save" ref={section3Ref}>
        <img src="./image_3.jpg" />
        <div className="Info">
          <h1 style={{ fontSize: "45px" }}>БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ</h1>
          <h2>
            Install the plugin and convert your designs to a responsive site.
          </h2>
          <button>Get started</button>
        </div>
      </div>
    </StylePracticePage>
  );
};
