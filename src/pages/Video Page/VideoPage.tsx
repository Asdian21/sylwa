import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { StyleVideoPage } from "./VideoPage.style";
import { VideoCardList } from "../../components/VideoCardList/VideoСardList";
import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";

interface VideoCard {
  id: number;
  image: string;
  lessonName: string;
  href: string;
}

const initialLectureCards: VideoCard[] = [
  {
    id: 1,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "https://youtube.com",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 6,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 7,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 8,
    image: "./lectureCard.jpg",
    lessonName: "Пример: перейти на страницу Ютуб",
    href: "",
  },
  {
    id: 9,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 10,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 11,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 12,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 13,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 14,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 15,
    image: "./lectureCard.jpg",
    lessonName: "Second page",
    href: "",
  },
  {
    id: 16,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 17,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 18,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 19,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 20,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 21,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 22,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 23,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 24,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 25,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 26,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 27,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 28,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 29,
    image: "./lectureCard.jpg",
    lessonName: "Third page",
    href: "",
  },
  {
    id: 30,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 31,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 32,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 33,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 34,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 35,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 36,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 37,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 38,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 39,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 40,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 41,
    image: "./lectureCard.jpg",
    lessonName: "Fourth page",
    href: "",
  },
  {
    id: 42,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 43,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 44,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 45,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 46,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 47,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 48,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 49,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 50,
    image: "./lectureCard.jpg",
    lessonName: "Fifth page",
    href: "",
  },
];

export function VideoPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 12; // количество видео на странице
  const [currentPage, setCurrentPage] = useState(1);

  // всего страниц
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  // какие карточки показать на текущей странице
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = filteredCards.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <StyleVideoPage>
      <HeaderForPages />
      <div>
        <div className="searchDiv">
          <h1>Поиск по видео</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <VideoCardList cards={currentCards} />
        <div className="videoPagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="glow-on-hover"
          >
            ← Назад
          </button>

          <span style={{ margin: "0 10px" }}>
            Страница {currentPage} из {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="glow-on-hover"
          >
            Вперёд →
          </button>
        </div>
      </div>
    </StyleVideoPage>
  );
}
