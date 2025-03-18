import { StyleLecturePage } from "./LecturePage.style";
import { useRef } from "react";

export const LecturePage = () => {
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

  return (
    <StyleLecturePage>
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
              ЭНЕРГЕТИКА
            </a>
          </li>

          <li>
            <a
              href=""
              className="menu"
              onClick={() => scrollToSection(section2Ref)}
            >
              SMART TECHNOLOGY
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
          <h1>ЭНЕРГЕТИКА</h1>
          <h2>
            Install the plugin and convert your designs to a responsive site.
          </h2>
          <button>Get started</button>
        </div>
      </div>
      <div className="smart-technology" ref={section2Ref}>
        <img src="./lecture_2.jpg" />
        <div className="Info">
          <h1>SMART TECHNOLOGY</h1>
          <h2>Browse dozens of templates. Click, duplicate, customize.</h2>
          <button>Get started</button>
        </div>
      </div>
      <div className="life-save" ref={section3Ref}>
        <img src="./image_3.jpg" />
        <div className="Info">
          <h1>БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ</h1>
          <h2>
            Install the plugin and convert your designs to a responsive site.
          </h2>
          <button>Get started</button>
        </div>
      </div>
    </StyleLecturePage>
  );
};
