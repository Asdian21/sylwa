import { Search } from "../Search button/Search";
import { StyleHeader } from "./Header.style";

interface Props {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  section1Ref: React.RefObject<HTMLDivElement>;
  section2Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  section4Ref: React.RefObject<HTMLDivElement>;
  section5Ref: React.RefObject<HTMLDivElement>;
}

export const Header = ({
  scrollToSection,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}: Props) => {
  return (
    <StyleHeader>
      <header>
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
                ЛЕКЦИИ
              </a>
            </li>

            <li>
              <a
                href=""
                className="menu"
                onClick={() => scrollToSection(section2Ref)}
              >
                ВИДЕОУРОКИ
              </a>
            </li>

            <li>
              <a
                href=""
                className="menu"
                onClick={() => scrollToSection(section3Ref)}
              >
                ПРАКТИКА
              </a>
            </li>

            <li>
              <a
                href=""
                className="menu"
                onClick={() => scrollToSection(section4Ref)}
              >
                ТЕСТЫ
              </a>
            </li>
            <li>
              <a
                href=""
                className="menu"
                onClick={() => scrollToSection(section5Ref)}
              >
                МЕТОДИЧКА
              </a>
            </li>
          </ul>
          <Search />
        </div>
      </header>
    </StyleHeader>
  );
};
