import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { useState } from "react";
import { StyleBJDPractice } from "./BJDPractices.style";

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
      "«Производственное освещение» Исследование освещённости рабочих мест",
    buttonText: "Начать",
    link: "/bjd-practice_1",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName: "«Производственное освещение» Расчёт освещённости рабочих мест",
    buttonText: "Узнать больше",
    link: "/bjd-practice_2",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName:
      "Интенсивность шума. Исследование звукоизоляции ограждающих конструкций.",
    buttonText: "Читать",
    link: "/bjd-practice_3",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName:
      "Расчёт интенсивности шума. Исследование звукоизоляции ограждающих конструкций",
    buttonText: "Попробовать",
    link: "/bjd-practice_4",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "Виды электромагнитных излучений",
    buttonText: "Попробовать",
    link: "/bjd-practice_5",
  },
  {
    id: 6,
    image: "./lectureCard.jpg",
    lessonName:
      "Расчёт параметров устройств защиты от электромагнитных излучений",
    buttonText: "Попробовать",
    link: "/bjd-practice_6",
  },
  {
    id: 7,
    image: "./lectureCard.jpg",
    lessonName: "Расчёт напряжённости поля ВЧ-диапазона",
    buttonText: "Попробовать",
    link: "/bjd-practice_7",
  },
  {
    id: 8,
    image: "./lectureCard.jpg",
    lessonName:
      "Воздействие радиации на организм человека. Расчёт напряжённости поля УВЧ-диапазона.",
    buttonText: "Попробовать",
    link: "/bjd-practice_8",
  },
  {
    id: 9,
    image: "./lectureCard.jpg",
    lessonName: "Измерение электрического сопротивления тела человека",
    buttonText: "Попробовать",
    link: "/bjd-practice_9",
  },
  {
    id: 10,
    image: "./lectureCard.jpg",
    lessonName:
      "Исследование условий безопасности в зоне растекания тока в земле",
    buttonText: "Попробовать",
    link: "/bjd-practice_10",
  },
  {
    id: 11,
    image: "./lectureCard.jpg",
    lessonName:
      "Исследование электробезопасности трёхфазных сетей переменного тока напряжением до 1000 в",
    buttonText: "Попробовать",
    link: "/bjd-practice_11",
  },
  {
    id: 12,
    image: "./lectureCard.jpg",
    lessonName: "Расчёт заземляющих устройств",
    buttonText: "Попробовать",
    link: "/bjd-practice_12",
  },
  {
    id: 13,
    image: "./lectureCard.jpg",
    lessonName: "Пожарная безопасность",
    buttonText: "Попробовать",
    link: "/bjd-practice_13",
  },
  {
    id: 14,
    image: "./lectureCard.jpg",
    lessonName:
      "Изучение способов оказания первой доврачебной помощи пострадавшем от действия тока",
    buttonText: "Попробовать",
    link: "/bjd-practice_14",
  },
  {
    id: 15,
    image: "./lectureCard.jpg",
    lessonName: "Промышленные аварии и расследование несчастных случаев",
    buttonText: "Попробовать",
    link: "/bjd-practice_15",
  },
];

export function BJDPractices() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleBJDPractice>
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
    </StyleBJDPractice>
  );
}
