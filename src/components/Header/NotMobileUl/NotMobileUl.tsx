import { StyleNotMobileUl } from "./NotMobileUl.style";

interface Props {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  section1Ref: React.RefObject<HTMLDivElement>;
  section2Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  section4Ref: React.RefObject<HTMLDivElement>;
  section5Ref: React.RefObject<HTMLDivElement>;
}

export const NotMobileUl = ({
  scrollToSection,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}: Props) => {
  return (
    <StyleNotMobileUl>
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
          МЕТОДИЧЕСКОЕ ПОСОБИЕ
        </a>
      </li>
    </StyleNotMobileUl>
  );
};
