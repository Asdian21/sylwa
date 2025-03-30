import { useNavigate } from "react-router-dom";
import { StyleLectureCard } from "./LectureCard.style";

interface Props {
  image: string;
  lessonName: string;
  paragraph: string;
  buttonText: string;
  link: string;
}

export const LectureCard = ({
  image,
  lessonName,
  paragraph,
  buttonText,
  link,
}: Props) => {
  const navigate = useNavigate();
  return (
    <StyleLectureCard>
      <img src={image} />
      <div className="textContainer">
        <h3>{lessonName}</h3>
        <p>{paragraph}</p>
        <button onClick={() => navigate(link)}>{buttonText}</button>
      </div>
    </StyleLectureCard>
  );
};
