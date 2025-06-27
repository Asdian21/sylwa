import { useEffect, useState } from "react";
import { fetchYouTubeVideoData } from "../../utils/youtube";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { StyleVideoPage } from "./VideoPage.style";
import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";
import { VideoCardList } from "../../components/VideoCardList/VideoСardList";
import { VideoModal } from "../../components/VideoModal/VideoModal";

// ✅ Правильно: ключ с префиксом VITE_ из .env
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

interface VideoCard {
  id: number;
  href: string;
  image: string;
  lessonName: string;
}

const initialLectureCards = [
  {
    id: 1,
    href: "https://youtu.be/b8VBiClQeRk?si=oa8cAxNeQfqrFDYR",
    image: "",
    lessonName: "",
  },
  {
    id: 2,
    href: "https://youtu.be/b9yCB_qUwIM?si=c8bLysF85rJK_9XI",
    image: "",
    lessonName: "",
  },
  {
    id: 3,
    href: "https://youtu.be/hFDp7KXxNlY?si=bi5poR2lXaYWnPo5",
    image: "",
    lessonName: "",
  },
  {
    id: 4,
    href: "https://youtu.be/Q8MfaP9sXs0?si=41wklplho9Q4wNUr",
    image: "",
    lessonName: "",
  },
  {
    id: 5,
    href: "https://youtu.be/yPgu1CroLjE?si=NRzB1aqey1jucNxR",
    image: "",
    lessonName: "",
  },
  {
    id: 6,
    href: "https://youtu.be/JFuWHb2buNA?si=DVKHPU9yP44f3tNb",
    image: "",
    lessonName: "",
  },
  {
    id: 7,
    href: "https://youtu.be/kFpx4GTDlPE?si=4tLdl_sf3CCyEGpl",
    image: "",
    lessonName: "",
  },
  {
    id: 8,
    href: "https://youtu.be/JFuWHb2buNA?si=DVKHPU9yP44f3tNb",
    image: "",
    lessonName: "",
  },
  {
    id: 9,
    href: "https://youtu.be/6EKkVqE8hCo?si=lpUH9uZrX193jjlE",
    image: "",
    lessonName: "",
  },
  {
    id: 10,
    href: "https://youtu.be/6TLRaU8de38?si=fczc4gRHPh5CBHE6",
    image: "",
    lessonName: "",
  },
  {
    id: 11,
    href: "https://youtu.be/Mu1Qx7Vr_js?si=qsUiorEzrHJ0VKxg",
    image: "",
    lessonName: "",
  },
  {
    id: 12,
    href: "https://youtu.be/1XvMHcW7wHg?si=Mqebx4_Xe8fgERle",
    image: "",
    lessonName: "",
  },
  {
    id: 13,
    href: "https://youtu.be/K8CDmjtVXpk?si=xFwT5mYOdlGRE9Rc",
    image: "",
    lessonName: "",
  },
  {
    id: 14,
    href: "https://youtu.be/8OW3RaKJMIQ?si=q7uOK4S9C7CGUCHG",
    image: "",
    lessonName: "",
  },
  {
    id: 15,
    href: "https://youtu.be/Dppb64mK-OM?si=STY6DdOExEG6M26h",
    image: "",
    lessonName: "",
  },
  {
    id: 16,
    href: "https://youtu.be/XSm5geKhqlU?si=QyeOCT9H3RgCxnHF",
    image: "",
    lessonName: "",
  },
  {
    id: 17,
    href: "https://youtu.be/IDPnD1EQ4bk?si=Dg2d6GEVxgLuxdVB",
    image: "",
    lessonName: "",
  },
  {
    id: 18,
    href: "https://youtu.be/uQRVHE8fIbY?si=NuVTd91ARBqUasq2",
    image: "",
    lessonName: "",
  },
  {
    id: 19,
    href: "https://youtu.be/Vw7kBQME38Q?si=GE9JvuWHnDpX2aEB",
    image: "",
    lessonName: "",
  },
  {
    id: 20,
    href: "https://youtu.be/4ssVDrp_zEg?si=D_bQTWCGwYItEGDX",
    image: "",
    lessonName: "",
  },
  {
    id: 21,
    href: "https://youtu.be/bv__ODXTOWI?si=Z9YDpBYfmsxoL4sB",
    image: "",
    lessonName: "",
  },
  {
    id: 22,
    href: "https://youtu.be/MStHAxXgz7A?si=YJpc5voWvatrMB7-",
    image: "",
    lessonName: "",
  },
  {
    id: 23,
    href: "https://youtu.be/0lroxNsOwQ4?si=iTMaGIvF_Pk93zSh",
    image: "",
    lessonName: "",
  },
  {
    id: 24,
    href: "https://youtu.be/XTIYfHRR1T4?si=JpcGw6RTs5dYkWDT",
    image: "",
    lessonName: "",
  },
  {
    id: 25,
    href: "https://youtu.be/MM2QXWWilkU?si=cjOP8oek9eZvnVdw",
    image: "",
    lessonName: "",
  },
  {
    id: 26,
    href: "https://youtu.be/UbRP1lCFPgI?si=O9HuYKUpFojOXvGF",
    image: "",
    lessonName: "",
  },
  {
    id: 27,
    href: "https://youtu.be/1dqrCr63oig?si=GsLNu93tIa2ekjyb",
    image: "",
    lessonName: "",
  },
  {
    id: 28,
    href: "https://youtu.be/ZSgAeRaj2PQ?si=tRmHu0kbbVZxJgjL",
    image: "",
    lessonName: "",
  },
  {
    id: 29,
    href: "https://youtu.be/Af6q-md8aFs?si=qjo8x7HjOBoP1_nb",
    image: "",
    lessonName: "",
  },
  {
    id: 30,
    href: "https://youtu.be/8ocHmZZxn7Y?si=vN8WA8q0Pop-IiQO",
    image: "",
    lessonName: "",
  },
  {
    id: 31,
    href: "https://youtu.be/ypVempDzAok?si=FuzJrQK0PYygZ5zk",
    image: "",
    lessonName: "",
  },
  {
    id: 32,
    href: "https://youtu.be/xMf3lnMqNQo?si=79t0MwvFiaYZ55yl",
    image: "",
    lessonName: "",
  },
  {
    id: 33,
    href: "https://youtu.be/9hdGIyfQLiQ?si=pUUOR26AMU4kjpvM",
    image: "",
    lessonName: "",
  },
  {
    id: 34,
    href: "https://youtu.be/RaZq_5FxfzY?si=dGIq3vwJT7-cMjLN",
    image: "",
    lessonName: "",
  },
  {
    id: 35,
    href: "https://youtu.be/vrdXAs566zc?si=x0STGe9UEtNnh8Tv",
    image: "",
    lessonName: "",
  },
  {
    id: 36,
    href: "https://youtu.be/ndqaDyUwK-M?si=3049hJq9gDYvNnii",
    image: "",
    lessonName: "",
  },
  {
    id: 37,
    href: "https://youtu.be/v13GPfhFCOk?si=nh8oCVrIz-umZ4Iw",
    image: "",
    lessonName: "",
  },
  {
    id: 38,
    href: "https://youtu.be/5quHC9cjUl0?si=HvhKxo11sCxtjwq8",
    image: "",
    lessonName: "",
  },
  {
    id: 39,
    href: "https://youtu.be/wcEG6yKRBcY?si=DKHnF8psuQMqbGD_",
    image: "",
    lessonName: "",
  },
  {
    id: 40,
    href: "https://youtu.be/_K4Urc3MUQ0?si=XaOod8xSOZygzgEB",
    image: "",
    lessonName: "",
  },
];

// 🔧 Извлекает videoId из ссылки
function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.substring(1);
    }
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

export function VideoPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState<VideoCard[]>([]);

  useEffect(() => {
    async function loadData() {
      const cacheKey = "youtubeVideoCache";
      const rawCache = localStorage.getItem(cacheKey);
      const cache: Record<string, { title: string; thumbnail: string }> =
        rawCache ? JSON.parse(rawCache) : {};

      const updatedCards = await Promise.all(
        initialLectureCards.map(async (card) => {
          const videoId = extractVideoId(card.href);
          if (!videoId) {
            return {
              ...card,
              lessonName: "Неверная ссылка",
              image: "./default.jpg",
            };
          }

          if (cache[videoId]) {
            // Из localStorage
            return {
              ...card,
              lessonName: cache[videoId].title,
              image: cache[videoId].thumbnail,
            };
          }

          const data = await fetchYouTubeVideoData(card.href, YOUTUBE_API_KEY);
          const title = data?.title || "Видео без названия";
          const thumbnail = data?.thumbnail || "./default.jpg";

          // Обновляем кэш
          cache[videoId] = { title, thumbnail };

          return {
            ...card,
            lessonName: title,
            image: thumbnail,
          };
        })
      );

      localStorage.setItem(cacheKey, JSON.stringify(cache));
      setCards(updatedCards);
    }

    loadData();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.lessonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = filteredCards.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (href: string) => {
    const index = cards.findIndex((c) => c.href === href);
    if (index !== -1) setActiveIndex(index);
  };

  return (
    <StyleVideoPage>
      <HeaderForPages />
      <div className="searchDiv">
        <h1>Поиск по видео</h1>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <VideoCardList cards={currentCards} onCardClick={handleCardClick} />

      <div className="videoPagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="glow-on-hover"
        >
          ← Назад
        </button>
        <span>
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
      {activeIndex !== null && (
        <VideoModal
          videoUrl={cards[activeIndex].href}
          onClose={() => setActiveIndex(null)}
          onNext={() =>
            setActiveIndex((prev) =>
              prev !== null && prev < cards.length - 1 ? prev + 1 : prev
            )
          }
          onPrev={() =>
            setActiveIndex((prev) =>
              prev !== null && prev > 0 ? prev - 1 : prev
            )
          }
        />
      )}
    </StyleVideoPage>
  );
}
