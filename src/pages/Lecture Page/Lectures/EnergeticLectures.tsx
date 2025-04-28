import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { StyleLectures } from "./EnergeticLectures.style";
import { useState } from "react";

interface LectureCard {
  id: number;
  image: string;
  lessonName: string;
  // buttonText: string;
  link: string;
}

const initialLectureCards: LectureCard[] = [
  {
    id: 1,
    image: "./lectureCard.jpg",
    lessonName:
      "Введение в предмет “Электроснабжение инфокоммуникационных систем”. Характеристики, функции и состав источников электрической энергии систем инфокоммуникаций на базе системы концепции Smart Grid.",
    // buttonText: "Читать",
    link: "/lecture_1",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName:
      "Величины и параметры, характеризующие электроэнергию. Единицы измерений. Основные законы электротехники. Одно - и трехфазные системы электроснабжения переменного тока. Источники и потребители систем электроснабжения постоянного тока.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName:
      "Первичные и вторичные источники систем электроснабжения. Возобновляемые и невозобновляемые источники энергии. Источники электропитания",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName:
      "Солнечная энергия. Информация о солнечной энергии. Типы солнечных устройств. Солнечные коллекторы",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName:
      "Анализ развития элементов технологического базиса концепции Smart Grid ветроэнергетических устройствах и электрических станциях. Экологический аспект.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 6,
    image: "./lectureCard.jpg",
    lessonName:
      "Механизмы и формы организации и управления процессом разработки и внедрения концепции Smart Grid в электрических станциях и подстанциях систем электроснабжения инфокоммуникационных объектов.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 7,
    image: "./lectureCard.jpg",
    lessonName:
      "Роль устройств передачи и распределения электрической энергии инфокоммуникационных объектов в Smart Grid",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 8,
    image: "./lectureCard.jpg",
    lessonName:
      "Преобразование и распределение электрической энергии. Основные элементы. Одно и трехфазные трансформаторы, устройство и принцип их работы.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 9,
    image: "./lectureCard.jpg",
    lessonName:
      "Выпрямители и преобразователи электроснабжения инфокоммуникационных объектов. Стабилизаторы напряжения и тока. Фильтры.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 10,
    image: "./lectureCard.jpg",
    lessonName:
      "Бесперебойные источники энергоснабжения. Дизельные генераторы. Аккумуляторы.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 11,
    image: "./lectureCard.jpg",
    lessonName:
      "Устройства управления энергоэффективностью и ресурсоэффективностью в инфокоммуникационных системах на базе системы концепции Smart Grid",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 12,
    image: "./lectureCard.jpg",
    lessonName: "Релейная защита и атоматика в электроэнергетических системах",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 13,
    image: "./lectureCard.jpg",
    lessonName:
      "Способы и устройства снижения потерь электрической энергии на объектах и устройствах инфокоммуникаций на базе системы концепции Smart Grid",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 14,
    image: "./lectureCard.jpg",
    lessonName:
      "Учёт и контроль производства и потребления электрической энергии в инфокоммуникационных системах. Система АСКУЭ.",
    // buttonText: "Читать",
    link: "",
  },
  {
    id: 15,
    image: "./lectureCard.jpg",
    lessonName:
      "Климотехнические устройства инфокоммуникационных систем. Безопасность обслуживания и электроснабжения.",
    // buttonText: "Читать",
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
