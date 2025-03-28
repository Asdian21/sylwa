import { CardList } from "../../../components/CardList";
import { SearchBar } from "../../../components/SearchBar";
import { StyleLectures } from "./Lectures.style";
import { useState } from "react";

interface LectureCard {
  id: number;
  image: string;
  lessonName: string;
  paragraph: string;
  buttonText: string;
}

const initialLectureCards: LectureCard[] = [
  {
    id: 1,
    image: "./lectureCard.jpg",
    lessonName: "React Basics",
    paragraph: "Изучите основы React и создание компонентов.",
    buttonText: "Начать",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName: "JavaScript Advanced",
    paragraph: "Углубитесь в продвинутые концепции JS.",
    buttonText: "Узнать больше",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName: "TypeScript 101",
    paragraph: "Типизация в JavaScript для устойчивого кода.",
    buttonText: "Читать",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName: "Vite for Beginners",
    paragraph: "Быстрый и легкий сборщик проектов.",
    buttonText: "Попробовать",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "Node.js Mastery",
    paragraph: "Создание серверов на JavaScript.",
    buttonText: "Подробнее",
  },
];

export function Lectures() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleLectures>
      <div className="p-4">
        <h1 className="text-2xl mb-4">Поиск по лекциям</h1>
        <SearchBar onSearch={setSearchQuery} />
        <CardList cards={filteredCards} />
      </div>
    </StyleLectures>
  );
}
