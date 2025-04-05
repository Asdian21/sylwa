import { LectureCard } from "../Lecrture/LectureCard";

interface CardListProps {
  cards: {
    id: number;
    image: string;
    lessonName: string;
    buttonText: string;
    link: string;
  }[];
}

export function CardList({ cards }: CardListProps) {
  return (
    <div className="gridCards">
      {cards.map((card) => (
        <LectureCard
          key={card.id}
          image={card.image}
          lessonName={card.lessonName}
          buttonText={card.buttonText}
          link={card.link}
        />
      ))}
    </div>
  );
}
