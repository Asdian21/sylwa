import { StyleBurgerMenu } from "./BurgerMenu.style";

interface Props {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  section1Ref: React.RefObject<HTMLDivElement>;
  section2Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  section4Ref: React.RefObject<HTMLDivElement>;
  section5Ref: React.RefObject<HTMLDivElement>;
}

export const BurgerMenu = ({
  scrollToSection,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}: Props) => {
  return (
    <StyleBurgerMenu>
      <nav className="nav">
        <input id="menu" type="checkbox" />
        <label htmlFor="menu">Menu</label>
        <ul className="menu">
          <li>
            <a onClick={() => scrollToSection(section1Ref)}>ЛЕКЦИЯ</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(section3Ref)}>ПРАКТИКА</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(section2Ref)}>ВИДЕО УРОКИ</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(section5Ref)}>
              МЕТОДИЧЕСКОЕ ПОСОБИЕ
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection(section4Ref)}>ТЕСТЫ</a>
          </li>
        </ul>
      </nav>
    </StyleBurgerMenu>
  );
};
