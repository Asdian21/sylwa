import { StyleBurgerMenu } from "./BurgerMenu.style";

interface Props {
  goToSlide: (index: number) => void;
}

export const BurgerMenu = ({ goToSlide }: Props) => {
  return (
    <StyleBurgerMenu>
      <nav className="nav">
        <input id="menu" type="checkbox" />
        <label htmlFor="menu">Menu</label>
        <ul className="menu">
          <li>
            <a onClick={() => goToSlide(0)}>ЛЕКЦИЯ</a>
          </li>
          <li>
            <a onClick={() => goToSlide(1)}>ПРАКТИКА</a>
          </li>
          <li>
            <a onClick={() => goToSlide(2)}>ВИДЕО УРОКИ</a>
          </li>
          <li>
            <a onClick={() => goToSlide(3)}>МЕТОДИЧЕСКОЕ ПОСОБИЕ</a>
          </li>
          <li>
            <a onClick={() => goToSlide(4)}>ТЕСТЫ</a>
          </li>
        </ul>
      </nav>
    </StyleBurgerMenu>
  );
};
