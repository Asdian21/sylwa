import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { useState } from "react";
import { StyleGreenSmartLectures } from "./GreenSmartLectures.style";

interface LectureCard {
  id: number;
  image: string;
  lessonName: string;
  link: string;
}

const initialLectureCards: LectureCard[] = [
  {
    id: 1,
    image: "./lectureCard.jpg",
    lessonName:
      "Введение в зеленые технологии. Понятие и значение зеленых технологий.",
    link: "/green-smart-lecture_1",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName:
      "Экологические проблемы традиционных систем электроснабжения. Основные источники загрязнения.",
    link: "/green-smart-lecture_2",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName:
      "Современные тенденции и инновации в зелёных технологиях. Обзор новейших разработок и трендовых.",
    link: "/green-smart-lecture_3",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName:
      "Солнечная энергия. Информация о солнечной энергии. Типы солнечных устройств. Солнечные коллекторы",
    link: "/green-smart-lecture_4",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "Ветроэнергетика. Основы генерации энергии ветра.",
    link: "/green-smart-lecture_5",
  },
  {
    id: 6,
    image: "./lectureCard.jpg",
    lessonName:
      "Гидроэнергетика. Виды и принципы работы гидроэлектростанций. Энергия океанов.",
    link: "/green-smart-lecture_6",
  },
  {
    id: 7,
    image: "./lectureCard.jpg",
    lessonName:
      "Биомасса и богаз. Производство и использование биомассы. Принципы работы и потенциал использования геотермальной энергии как возобновляемого источника",
    link: "/green-smart-lecture_7",
  },
  {
    id: 8,
    image: "./lectureCard.jpg",
    lessonName:
      "Энергоэффективные технологии. Умные сети (smart grid). Концепция и принципы умных сетей",
    link: "/green-smart-lecture_8",
  },
  {
    id: 9,
    image: "./lectureCard.jpg",
    lessonName:
      "Системы управления энергопотреблением. Методы и инструменты управления энергопотреблением.",
    link: "/green-smart-lecture_9",
  },
  {
    id: 10,
    image: "./lectureCard.jpg",
    lessonName:
      "Энергосберегающие устройства и технологии. Влияние энергосберегающих технологий на энергопотребление.",
    link: "/green-smart-lecture_10",
  },
  {
    id: 11,
    image: "./lectureCard.jpg",
    lessonName: "Технология хранения и передачи энергии.",
    link: "/green-smart-lecture_11",
  },
  {
    id: 12,
    image: "./lectureCard.jpg",
    lessonName:
      "Новые подходы к передачи электроэнергии. Высоковольтные линии постоянного тока (HVDC). Технологии FACTS (гибкие системы передачи переменного тока).",
    link: "/green-smart-lecture_12",
  },
  {
    id: 13,
    image: "./lectureCard.jpg",
    lessonName:
      "Интеграция систем хранения энергии с возобновляемыми источниками. Методы интеграции.",
    link: "/green-smart-lecture_13",
  },
  {
    id: 14,
    image: "./lectureCard.jpg",
    lessonName:
      "Экологические и экономические аспекты. Оценка жизненного цикла зелёных технологий.",
    link: "/green-smart-lecture_14",
  },
  {
    id: 15,
    image: "./lectureCard.jpg",
    lessonName:
      "Инновации в энергетических материалах и технологиях. Новые материалы и технологии, способствующие эффективному производству и передаче энергии.",
    link: "/green-smart-lecture_15",
  },
];

export function GreenSmartLectures() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleGreenSmartLectures>
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
    </StyleGreenSmartLectures>
  );
}
