import { useNavigate } from "react-router-dom";
import { StyleLectureCard } from "./LectureCard.style";

interface Props {
  image: string;
  lessonName: string;
  href?: string;
  link: string;
}

export const LectureCard = ({ image, lessonName, link, href }: Props) => {
  const navigate = useNavigate();
  return (
    <StyleLectureCard>
      <img src={image} />
      <div className="textContainer">
        <h3>
          <a href={href} onClick={() => navigate(link)}>
            {lessonName}
          </a>
        </h3>
      </div>
    </StyleLectureCard>
  );
};
