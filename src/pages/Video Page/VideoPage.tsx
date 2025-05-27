import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { StyleVideoPage } from "./VideoPage.style";
import { VideoCardList } from "../../components/VideoCardList/VideoСardList";

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
    lessonName: "",
    href: "",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 6,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 7,
    image: "./lectureCard.jpg",
    lessonName: "",
    href: "",
  },
  {
    id: 8,
    image: "./lectureCard.jpg",
    lessonName: "",
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
    lessonName: "",
    href: "",
  },
];

export function VideoPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleVideoPage>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <h1>Поиск по видео</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <VideoCardList cards={filteredCards} />
      </div>
    </StyleVideoPage>
  );
}
