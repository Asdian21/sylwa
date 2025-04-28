import { useNavigate } from "react-router-dom";
import { StyleLectureCard } from "./LectureCard.style";

interface Props {
  image: string;
  lessonName: string;
  // buttonText: string;
  link: string;
}

export const LectureCard = ({ image, lessonName, link }: Props) => {
  const navigate = useNavigate();
  return (
    <StyleLectureCard>
      <img src={image} />
      <div className="textContainer">
        <h3>
          <a href="" onClick={() => navigate(link)}>
            {lessonName}
          </a>
        </h3>
        {/* <button onClick={() => navigate(link)}>{buttonText}</button> */}
      </div>
    </StyleLectureCard>
  );
};
