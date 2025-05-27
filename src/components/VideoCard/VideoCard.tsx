import { StyleVideoCard } from "./VideoCard.style";

interface Props {
  image: string;
  lessonName: string;
  href: string;
}

export const VideoCard = ({ image, lessonName, href }: Props) => {
  return (
    <StyleVideoCard>
      <img src={image} />
      <div className="textContainer">
        <h3>
          <a href={href}>{lessonName}</a>
        </h3>
      </div>
    </StyleVideoCard>
  );
};
