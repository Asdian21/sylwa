import { CardList } from "../../../components/CardList/CardList";
import { HeaderForPages } from "../../../components/Header/HeaderForPages/HeaderForPages";
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
    image: "./images/img_1.webp",
    lessonName:
      "Введение в предмет “Электроснабжение инфокоммуникационных систем”. Характеристики, функции и состав источников электрической энергии систем инфокоммуникаций на базе системы концепции Smart Grid.",
    // buttonText: "Читать",
    link: "/lecture_1",
  },
  {
    id: 2,
    image: "./images/img_2.webp",
    lessonName:
      "Величины и параметры, характеризующие электроэнергию. Единицы измерений. Основные законы электротехники. Одно - и трехфазные системы электроснабжения переменного тока. Источники и потребители систем электроснабжения постоянного тока.",
    // buttonText: "Читать",
    link: "/lecture_2",
  },
  {
    id: 3,
    image: "./images/img_3.webp",
    lessonName:
      "Первичные и вторичные источники систем электроснабжения. Возобновляемые и невозобновляемые источники энергии. Источники электропитания",
    // buttonText: "Читать",
    link: "/lecture_3",
  },
  {
    id: 4,
    image: "./images/img_4.webp",
    lessonName:
      "Солнечная энергия. Информация о солнечной энергии. Типы солнечных устройств. Солнечные коллекторы",
    // buttonText: "Читать",
    link: "/lecture_4",
  },
  {
    id: 5,
    image: "./images/img_5.webp",
    lessonName:
      "Анализ развития элементов технологического базиса концепции Smart Grid ветроэнергетических устройствах и электрических станциях. Экологический аспект.",
    // buttonText: "Читать",
    link: "/lecture_5",
  },
  {
    id: 6,
    image: "./images/img_6.webp",
    lessonName:
      "Механизмы и формы организации и управления процессом разработки и внедрения концепции Smart Grid в электрических станциях и подстанциях систем электроснабжения инфокоммуникационных объектов.",
    // buttonText: "Читать",
    link: "/lecture_6",
  },
  {
    id: 7,
    image: "./images/img_7.webp",
    lessonName:
      "Роль устройств передачи и распределения электрической энергии инфокоммуникационных объектов в Smart Grid",
    // buttonText: "Читать",
    link: "/lecture_7",
  },
  {
    id: 8,
    image: "./images/img_8.webp",
    lessonName:
      "Преобразование и распределение электрической энергии. Основные элементы. Одно и трехфазные трансформаторы, устройство и принцип их работы.",
    // buttonText: "Читать",
    link: "/lecture_8",
  },
  {
    id: 9,
    image: "./images/img_9.webp",
    lessonName:
      "Выпрямители и преобразователи электроснабжения инфокоммуникационных объектов. Стабилизаторы напряжения и тока. Фильтры.",
    // buttonText: "Читать",
    link: "/lecture_9",
  },
  {
    id: 10,
    image: "./images/img_10.webp",
    lessonName:
      "Бесперебойные источники энергоснабжения. Дизельные генераторы. Аккумуляторы.",
    // buttonText: "Читать",
    link: "/lecture_10",
  },
  {
    id: 11,
    image: "./images/img_11.webp",
    lessonName:
      "Устройства управления энергоэффективностью и ресурсоэффективностью в инфокоммуникационных системах на базе системы концепции Smart Grid",
    // buttonText: "Читать",
    link: "/lecture_11",
  },
  {
    id: 12,
    image: "./images/img_12.webp",
    lessonName: "Релейная защита и атоматика в электроэнергетических системах",
    // buttonText: "Читать",
    link: "/lecture_12",
  },
  {
    id: 13,
    image: "./images/img_13.webp",
    lessonName:
      "Способы и устройства снижения потерь электрической энергии на объектах и устройствах инфокоммуникаций на базе системы концепции Smart Grid",
    // buttonText: "Читать",
    link: "/lecture_13",
  },
  {
    id: 14,
    image: "./images/img_14.webp",
    lessonName:
      "Учёт и контроль производства и потребления электрической энергии в инфокоммуникационных системах. Система АСКУЭ.",
    // buttonText: "Читать",
    link: "/lecture_14",
  },
  {
    id: 15,
    image: "./images/img_15.webp",
    lessonName:
      "Климотехнические устройства инфокоммуникационных систем. Безопасность обслуживания и электроснабжения.",
    // buttonText: "Читать",
    link: "/lecture_15",
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
      <HeaderForPages />
      <div>
        <div className="searchDiv">
          <h1>Поиск по лекциям</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CardList cards={filteredCards} />
      </div>
    </StyleLectures>
  );
}
