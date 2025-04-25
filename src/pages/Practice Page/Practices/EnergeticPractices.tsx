import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { StyleEnergeticPractices } from "./EnergeticPractices.style";
import { useState } from "react";

interface PracticeCard {
  id: number;
  image: string;
  lessonName: string;
  buttonText: string;
  link: string;
}

const initialLectureCards: PracticeCard[] = [
  {
    id: 1,
    image: "./lectureCard.jpg",
    lessonName:
      "Интеллектуальные сети и сетевые технологии для зеленых технологий. Применение технологий Интернета вещей (IoT) и искусственного интеллекта для оптимизации энергопотребления.",

    buttonText: "Начать",
    link: "/energetic-practice_1",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName:
      "Интеллектуальные сети и сетевые технологии для зеленых технологий. Применение технологий Интернета вещей (IoT) и искусственного интеллекта для оптимизации энергопотребления.",

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
    lessonName:
      "Интеллектуальные сети и сетевые технологии для зеленых технологий. Применение технологий Интернета вещей (IoT) и искусственного интеллекта для оптимизации энергопотребления.",

    buttonText: "Попробовать",
    link: "",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName:
      "Интеллектуальные сети и сетевые технологии для зеленых технологий. Применение технологий Интернета вещей (IoT) и искусственного интеллекта для оптимизации энергопотребления.",

    buttonText: "Подробнее",
    link: "",
  },
];

export function EnergeticPractices() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleEnergeticPractices>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <h1>Поиск по практикам</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CardList cards={filteredCards} />
      </div>
    </StyleEnergeticPractices>
  );
}
