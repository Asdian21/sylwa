import { VideoCard } from "../VideoCard/VideoCard";
import { StyleVideoCardList } from "./VideoCardList.style";

interface VideoCardListProps {
  cards: {
    id: number;
    image: string;
    lessonName: string;
    href: string;
  }[];
}

export const VideoCardList = ({ cards }: VideoCardListProps) => {
  return (
    <StyleVideoCardList>
      <div className="gridCards">
        {cards.map((card) => (
          <VideoCard
            key={card.id}
            image={card.image}
            lessonName={card.lessonName}
            href={card.href}
          />
        ))}
      </div>
    </StyleVideoCardList>
  );
};
