import { useNavigate } from "react-router-dom";
import { StyleNotMobileHeader } from "./NotMobileHeader.style";

export const NotMobileHeader = () => {
  const navigate = useNavigate();
  return (
    <StyleNotMobileHeader>
      <li>
        <a href="" className="menu" onClick={() => navigate("/lecture-page")}>
          ЛЕКЦИИ
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => navigate("/video-page")}>
          ВИДЕОУРОКИ
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => navigate("/practice-page")}>
          ПРАКТИКА
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => navigate("/test-page")}>
          ТЕСТЫ
        </a>
      </li>
      <li>
        <a href="" className="menu" onClick={() => navigate("/gallery-page")}>
          ГАЛЕРЕЯ
        </a>
      </li>
    </StyleNotMobileHeader>
  );
};
