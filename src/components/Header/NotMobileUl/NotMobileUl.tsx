import { StyleNotMobileUl } from "./NotMobileUl.style";

interface Props {
  goToSlide: (index: number) => void;
}

export const NotMobileUl = ({ goToSlide }: Props) => {
  const handleClick = (index: number) => {
    goToSlide(index);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <StyleNotMobileUl>
      <li>
        <a href="" className="menu" onClick={() => handleClick(0)}>
          ЛЕКЦИИ
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => handleClick(2)}>
          ВИДЕОУРОКИ
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => handleClick(1)}>
          ПРАКТИКА
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => handleClick(4)}>
          ТЕСТЫ
        </a>
      </li>
      <li>
        <a href="" className="menu" onClick={() => handleClick(3)}>
          ГАЛЕРЕЯ
        </a>
      </li>
    </StyleNotMobileUl>
  );
};
