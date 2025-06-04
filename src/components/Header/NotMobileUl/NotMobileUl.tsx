import { StyleNotMobileUl } from "./NotMobileUl.style";

interface Props {
  goToSlide: (index: number) => void;
}

export const NotMobileUl = ({ goToSlide }: Props) => {
  return (
    <StyleNotMobileUl>
      <li>
        <a href="" className="menu" onClick={() => goToSlide(0)}>
          ЛЕКЦИИ
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => goToSlide(2)}>
          ВИДЕОУРОКИ
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => goToSlide(1)}>
          ПРАКТИКА
        </a>
      </li>

      <li>
        <a href="" className="menu" onClick={() => goToSlide(4)}>
          ТЕСТЫ
        </a>
      </li>
      <li>
        <a href="" className="menu" onClick={() => goToSlide(3)}>
          МЕТОДИЧЕСКОЕ ПОСОБИЕ
        </a>
      </li>
    </StyleNotMobileUl>
  );
};
