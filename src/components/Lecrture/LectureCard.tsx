import { StyleLectureCard } from "./LectureCard.style";

interface Props {
  image: string;
  lessonName: string;
  paragraph: string;
  buttonText: string;
}

export const LectureCard = ({
  image,
  lessonName,
  paragraph,
  buttonText,
}: Props) => {
  return (
    <StyleLectureCard>
      <img src={image} />
      <div className="textContainer">
        <h3>{lessonName}</h3>
        <p>{paragraph}</p>
        <button>{buttonText}</button>
      </div>
    </StyleLectureCard>
  );
};
