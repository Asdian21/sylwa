import { StyleBurgerMenu } from "./BurgerMenu.style";

export const BurgerMenu = () => {
  return (
    <StyleBurgerMenu>
      <nav className="nav">
        <input id="menu" type="checkbox" />
        <label htmlFor="menu">Menu</label>
        <ul className="menu">
          <li>
            <a href="#0">
              <span>ЛЕКЦИЯ</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>ПРАКТИКА</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>ВИДЕО УРОКИ</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>МЕТОДИЧЕСКОЕ ПОСОБИЕ</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>ТЕСТЫ</span>
            </a>
          </li>
        </ul>
      </nav>
    </StyleBurgerMenu>
  );
};
