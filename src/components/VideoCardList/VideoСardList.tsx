import { VideoCard } from "../VideoCard/VideoCard";
import { StyleVideoCardList } from "./VideoCardList.style";

interface VideoCardListProps {
  cards: {
    id: number;
    image: string;
    lessonName: string;
    href: string;
  }[];
  onCardClick: (url: string) => void;
}

export const VideoCardList = ({
  cards,
  onCardClick,
}: VideoCardListProps & { onCardClick: (href: string) => void }) => {
  return (
    <StyleVideoCardList>
      <div className="gridCards">
        {cards.map((card) => (
          <VideoCard
            key={card.id}
            image={card.image}
            lessonName={card.lessonName}
            href={card.href}
            onClick={() => onCardClick(card.href)} // 💡 Важно
          />
        ))}
      </div>
    </StyleVideoCardList>
  );
};
