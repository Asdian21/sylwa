import { CardList } from "../../../components/CardList/CardList";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { StyleBJDLectures } from "./BJD_Lectures.style";
import { useState } from "react";

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
      "Теоретические основы безопасности производственной деятельности",
    link: "/bjd-lecture_1",
  },
  {
    id: 2,
    image: "./lectureCard.jpg",
    lessonName: "Эргономика",
    link: "/bjd-lecture_2",
  },
  {
    id: 3,
    image: "./lectureCard.jpg",
    lessonName: "Производственное освещение",
    link: "/bjd-lecture_3",
  },
  {
    id: 4,
    image: "./lectureCard.jpg",
    lessonName: "Защита от шума",
    link: "/bjd-lecture_4",
  },
  {
    id: 5,
    image: "./lectureCard.jpg",
    lessonName: "Электромагнитные излучения / Ионизирующие излучения",
    link: "/bjd-lecture_5",
  },
  {
    id: 6,
    image: "./lectureCard.jpg",
    lessonName: "Электробезопасность 1",
    link: "/bjd-lecture_6",
  },
  {
    id: 7,
    image: "./lectureCard.jpg",
    lessonName: "Электробезопасность 2",
    link: "/bjd-lecture_7",
  },
  {
    id: 8,
    image: "./lectureCard.jpg",
    lessonName: "Электробезопасность 3",
    link: "/bjd-lecture_8",
  },
  {
    id: 9,
    image: "./lectureCard.jpg",
    lessonName: "Оказание первой доврачебной помощи пострадавшему",
    link: "/bjd-lecture_9",
  },
  {
    id: 10,
    image: "./lectureCard.jpg",
    lessonName:
      "Правовые и организационные основы Безопасности жизнедеятельности",
    link: "/bjd-lecture_10",
  },
  {
    id: 11,
    image: "./lectureCard.jpg",
    lessonName: "Пожарная безопасность",
    link: "/bjd-lecture_11",
  },
  {
    id: 12,
    image: "./lectureCard.jpg",
    lessonName:
      "Общее понятие о чрезвычайных ситуациях (ЧС), их виды и особенности.",
    link: "/bjd-lecture_12",
  },
  {
    id: 13,
    image: "./lectureCard.jpg",
    lessonName:
      "Влияние на организм неблагоприятного производственного микроклимата и меры профилактики",
    link: "/bjd-lecture_13",
  },
];

export function BJDLectures() {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по названию лекций (lessonName)
  const filteredCards = initialLectureCards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleBJDLectures>
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
    </StyleBJDLectures>
  );
}
