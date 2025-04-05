import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { StyleLectures } from "./Lectures.style";
import { useState } from "react";

interface LectureCard {
  id: number;
  image: string;
  lessonName: string;

  buttonText: string;
  link: string;
}

const initialLectureCards: LectureCard[] = [
  {
    id: 1,
    image: "./lectureCard.jpg",
    lessonName: "React Basics",

    buttonText: "Начать",
    link: "/lecture_1",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName: "JavaScript Advanced",

    buttonText: "Узнать больше",
    link: "",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName:
      "Интеллектуальные сети и сетевые технологии для зеленых технологий. Применение технологий Интернета вещей (IoT) и искусственного интеллекта для оптимизации энергопотребления.",

    buttonText: "Читать",
    link: "",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName: "Vite for Beginners",

    buttonText: "Попробовать",
    link: "",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "Node.js Mastery",

    buttonText: "Подробнее",
    link: "",
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
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <h1>Поиск по лекциям</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CardList cards={filteredCards} />
      </div>
    </StyleLectures>
  );
}
