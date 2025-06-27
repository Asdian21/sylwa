import { StyleVideoCard } from "./VideoCard.style";

interface Props {
  image: string;
  lessonName: string;
  href: string;
  onClick: () => void;
}

export const VideoCard = ({ image, lessonName, onClick }: Props) => {
  return (
    <StyleVideoCard onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={lessonName} />
      <div className="textContainer">
        <h3>{lessonName}</h3>
      </div>
    </StyleVideoCard>
  );
};
