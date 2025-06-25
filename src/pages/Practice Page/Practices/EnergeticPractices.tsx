import { CardList } from "../../../components/CardList/CardList";
import { HeaderForPages } from "../../../components/Header/HeaderForPages/HeaderForPages";
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
    image: "./images/img_1.webp",
    lessonName:
      "Законы и нормативные документы Республики Узбекистан об использовании электрической энергии. Концепция развития энергетической отрасли Республики Узбекистан.",

    buttonText: "Начать",
    link: "/energetic-practice_1",
  },
  {
    id: 2,
    image: "./images/img_2.webp",
    lessonName:
      "Применение первичных и вторичных источников питания в области инфокоммуникации и ИТ",
    buttonText: "Узнать больше",
    link: "/energetic-practice_2",
  },
  {
    id: 3,
    image: "./images/img_3.webp",
    lessonName:
      "Устройства для регулирования напряжения в сетях промышленных предприятий",
    buttonText: "Читать",
    link: "/energetic-practice_3",
  },
  {
    id: 4,
    image: "./images/img_4.webp",
    lessonName:
      "Солнечная энергетика, выбор параметров устройств солнечных элементов",
    buttonText: "Попробовать",
    link: "/energetic-practice_4",
  },
  {
    id: 5,
    image: "./images/img_5.webp",
    lessonName:
      "Выбор и расчет устройств управления энергоэффективностью и ресурсоэффективностью ветроэнергетических установок ",
    buttonText: "Попробовать",
    link: "/energetic-practice_5",
  },
  {
    id: 6,
    image: "./images/img_6.webp",
    lessonName: "Многофазные системы электрического питания устройств связи",
    buttonText: "Попробовать",
    link: "/energetic-practice_6",
  },
  {
    id: 7,
    image: "./images/img_7.webp",
    lessonName:
      "Параметры и выбор трансформаторов, основные определения и принцип действия",
    buttonText: "Попробовать",
    link: "/energetic-practice_7",
  },
  {
    id: 8,
    image: "./images/img_8.webp",
    lessonName: "Расчет параметров работы трансформатора",
    buttonText: "Попробовать",
    link: "/energetic-practice_8",
  },
  {
    id: 9,
    image: "./images/img_9.webp",
    lessonName:
      "Принцип работ устройств регулирования напряжения в системах энергоснабжения ИК. Выпрямители",
    buttonText: "Попробовать",
    link: "/energetic-practice_9",
  },
  {
    id: 10,
    image: "./images/img_10.webp",
    lessonName: "Методика проектирования систем бесперебойного питания",
    buttonText: "Попробовать",
    link: "/energetic-practice_10",
  },
  {
    id: 11,
    image: "./images/img_11.webp",
    lessonName:
      "Инверторы Напряжения - Выбор Инвертора (Преобразователи Напряжения)",
    buttonText: "Попробовать",
    link: "/energetic-practice_11",
  },
  {
    id: 12,
    image: "./images/img_12.webp",
    lessonName:
      "Принципы работы устройств преобразования тока электрической энергии в системах электроснабжения ИК и ИТС",
    buttonText: "Попробовать",
    link: "/energetic-practice_12",
  },
  {
    id: 13,
    image: "./images/img_13.webp",
    lessonName: "Сглаживающие фильтры питания",
    buttonText: "Попробовать",
    link: "/energetic-practice_13",
  },
  {
    id: 14,
    image: "./images/img_14.webp",
    lessonName: "Расчёт входного фильтра импульсного стабилизатора",
    buttonText: "Попробовать",
    link: "/energetic-practice_14",
  },
  {
    id: 15,
    image: "./images/img_15.webp",
    lessonName:
      "Электроснабжение интеллектуального здания. Климотехнические устройства инфокоммуникационных систем",
    buttonText: "Попробовать",
    link: "/energetic-practice_15",
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
      <HeaderForPages />

      <div>
        <div className="searchDiv">
          <h1>Поиск по практикам</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CardList cards={filteredCards} />
      </div>
    </StyleEnergeticPractices>
  );
}
