import { useNavigate } from "react-router-dom";
import { StyleHeaderForPages } from "./HeaderForPages.style";

export const HeaderForPages = () => {
  const navigate = useNavigate();
  navigate;

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
            <span style={{ color: "white", textTransform: "uppercase" }}>
              Амурова Н. Ю.
            </span>
          </div>
          <li>
            <a
              href=""
              className="menu"
              onClick={() => navigate("/lecture-page")}
            >
              ЛЕКЦИИ
            </a>
          </li>

          <li>
            <a href="" className="menu" onClick={() => navigate("/video-page")}>
              ВИДЕОУРОКИ
            </a>
          </li>

          <li>
            <a
              href=""
              className="menu"
              onClick={() => navigate("/practice-page")}
            >
              ПРАКТИКА
            </a>
          </li>

          <li>
            <a href="" className="menu" onClick={() => navigate("/test-page")}>
              ТЕСТЫ
            </a>
          </li>
          <li>
            <a href="" className="menu" onClick={() => navigate("/")}>
              МЕТОДИЧЕСКОЕ ПОСОБИЕ
            </a>
          </li>
        </div>
      </header>
    </StyleHeaderForPages>
  );
};
