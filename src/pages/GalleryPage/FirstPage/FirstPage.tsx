import { useState } from "react";
import { StyleFirstPage, ModalOverlay, ModalImage } from "./FirstPage.style";
import { HeaderForPages } from "../../../components/Header/HeaderForPages/HeaderForPages";

export const FirstPage = () => {
  //////////////////////////////////////
  /////////////////////////////
  ////////////////////////////
  /////////////////////////
  // Добавить переход по страницам
  // Добавить внутренний слайдер после открытия конкретного фото
  ////////////////////////////////
  ////////////////////////////
  ///////////////////////
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp",
  ];

  return (
    <>
      <HeaderForPages />
      <StyleFirstPage>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            onClick={() => setSelectedImage(src)}
          />
        ))}

        {selectedImage && (
          <ModalOverlay onClick={() => setSelectedImage(null)}>
            <ModalImage src={selectedImage} alt="Full view" />
          </ModalOverlay>
        )}
      </StyleFirstPage>
    </>
  );
};
