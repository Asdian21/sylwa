import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { useState } from "react";
import { StyleGreenSmartPractices } from "./GreenSmartPractice.style";
import { HeaderForPages } from "../../../components/Header/HeaderForPages/HeaderForPages";

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
      "Применение зелёных технологий в телекоммуникационных сетях. Внедрение возобновляемых источников энергии и энергоэффективных технологий для снижения экологического следа сетевой инфраструктуры.",
    buttonText: "Начать",
    link: "/green-smart-practice_1",
  },
  {
    id: 2,
    image: "./images/img_2.webp",
    lessonName:
      "Инновации в энергоэффективности для мобильных сетей. Разработка и внедрение технологий, способствующих снижению потребления энергии мобильными сетями и устройствами.",
    buttonText: "Узнать больше",
    link: "/green-smart-practice_2",
  },
  {
    id: 3,
    image: "./images/img_3.webp",
    lessonName:
      "Энергоэффективные решения для беспроводных сетей связи. Исследование и внедрение технологий, снижающих энергозатраты в беспроводных коммуникационных сетях",
    buttonText: "Читать",
    link: "/green-smart-practice_3",
  },
  {
    id: 4,
    image: "./images/img_4.webp",
    lessonName:
      "Оптимизация энергопотребления в оптических сетях связи. Разработка стратегий и технологий для повышения эффективности оптических передач данных и сетевых узлов.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_4",
  },
  {
    id: 5,
    image: "./images/img_5.webp",
    lessonName:
      "Использование технологий IoT для мониторинга и управления энергопотреблением в телекоммуникационных системах. Разработка систем умного управления энергопотреблением на базе Интернета вещей.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_5",
  },
  {
    id: 6,
    image: "./images/img_6.webp",
    lessonName:
      "Интеграция возобновляемых источников энергии с инфраструктурой связи. Разработка методов интеграции солнечных и ветряных установок с телекоммуникационными объектами.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_6",
  },
  {
    id: 7,
    image: "./images/img_7.webp",
    lessonName:
      "Энергоэффективные технологии для облачных вычислений и хранилищ данных. Разработка технологий, способствующих уменьшению энергопотребления в центрах обработки данных облачных сервисов.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_7",
  },
  {
    id: 8,
    image: "./images/img_8.webp",
    lessonName:
      "Безопасность электроснабжения в телекоммуникационных сетях. Анализ технических аспектов обеспечения надежности и безопасности электропитания в сетях связи.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_8",
  },
  {
    id: 9,
    image: "./images/img_9.webp",
    lessonName:
      "Оптимизация энергопотребления в зданиях с помощью систем управления. Разработка стратегий управления энергопотреблением для повышения эффективности.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_9",
  },
  {
    id: 10,
    image: "./images/img_10.webp",
    lessonName:
      "Анализ жизненного цикла зелёных технологий. Оценка воздействия на окружающую среду и экономическую эффективность зелёных технологий на различных этапах их жизненного цикла.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_10",
  },
  {
    id: 11,
    image: "./images/img_11.webp",
    lessonName:
      "Разработка плана управления энергопотреблением для крупных промышленных объектов. Применение методов управления энергопотреблением для снижения затрат и оптимизации производственных процессов.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_11",
  },
  {
    id: 12,
    image: "./images/img_12.webp",
    lessonName:
      "Анализ экономической эффективности зелёных технологий. Оценка затрат и потенциальных экономических выгод от внедрения зелёных технологий в различные секторы экономики.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_12",
  },
  {
    id: 13,
    image: "./images/img_13.webp",
    lessonName:
      "Разработка плана устойчивого городского планирования с учётом зелёных технологий. Применение концепций устойчивого развития для создания экологически устойчивых городских пространств.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_13",
  },
  {
    id: 14,
    image: "./images/img_14.webp",
    lessonName:
      "Оптимизация энергоснабжения и климат-контроля в инфраструктуре данных. Разработка стратегий для снижения энергопотребления и повышения эффективности систем холодоснабжения и вентиляции в дата-центрах.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_14",
  },
  {
    id: 15,
    image: "./images/img_15.webp",
    lessonName:
      "Разработка концепции управления энергопотреблением в транспортных сетях. Применение зелёных технологий для сокращения выбросов вредных веществ и оптимизации топливной эффективности.",
    buttonText: "Попробовать",
    link: "/green-smart-practice_15",
  },
];

export function GreenSmartPractices() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleGreenSmartPractices>
      <HeaderForPages />
      <div>
        <div className="searchDiv">
          <h1>Поиск по практикам</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CardList cards={filteredCards} />
      </div>
    </StyleGreenSmartPractices>
  );
}
