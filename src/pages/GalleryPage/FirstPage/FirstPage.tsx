import { useEffect, useState } from "react";
import {
  StyleFirstPage,
  ModalOverlay,
  ModalImage,
  PaginationWrapper,
  ModalNavButton,
} from "./FirstPage.style";
import { HeaderForPages } from "../../../components/Header/HeaderForPages/HeaderForPages";

// Импорт изображений
const imageModules = import.meta.glob(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);
const images = Object.values(imageModules) as string[];

const IMAGES_PER_PAGE = 12;

export const FirstPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedImages = images.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const openModal = (indexInPage: number) => {
    setSelectedIndex(startIndex + indexInPage);
  };

  const closeModal = () => setSelectedIndex(null);

  const showPrev = () => {
    setSelectedIndex((prev) => (prev !== null ? Math.max(0, prev - 1) : null));
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? Math.min(images.length - 1, prev + 1) : null
    );
  };

  // ⌨️ Перелистывание стрелками
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <HeaderForPages />
      <StyleFirstPage>
        {paginatedImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${startIndex + i + 1}`}
            onClick={() => openModal(i)}
          />
        ))}
      </StyleFirstPage>

      {/* Пагинация */}
      <PaginationWrapper>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="glow-on-hover"
        >
          Назад
        </button>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="glow-on-hover"
        >
          Вперёд
        </button>
      </PaginationWrapper>

      {/* Модалка */}
      {selectedIndex !== null && (
        <ModalOverlay onClick={closeModal}>
          <ModalNavButton
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            style={{ left: 20 }}
            disabled={selectedIndex === 0}
          >
            ◀
          </ModalNavButton>

          <ModalImage
            src={images[selectedIndex]}
            alt={`Image ${selectedIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <ModalNavButton
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            style={{ right: 20 }}
            disabled={selectedIndex === images.length - 1}
          >
            ▶
          </ModalNavButton>
        </ModalOverlay>
      )}
    </>
  );
};
