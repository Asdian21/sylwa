import { StyleLecture_9 } from "./EnergeticLecture_9.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Quiz } from "../../../../components/Quiz/Quiz";
import { useLoadSlides } from "../../../../hooks/useLoadSlides";
import { useState, useEffect } from "react";
import mammoth from "mammoth";

export const Lecture_9 = () => {
  const slides = useLoadSlides("/lectures/lecture_9_slides_output");
  const [lectureText, setLectureText] = useState<string>("");

  useEffect(() => {
    const loadDocxFile = async () => {
      try {
        const response = await fetch("/word_lectures/lecture_9.docx");
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setLectureText(result.value); // Это будет HTML
      } catch (error) {
        console.error("Ошибка при загрузке .docx:", error);
      }
    };

    loadDocxFile();
  }, []);

  return (
    <StyleLecture_9>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          type: "loop",
          perPage: 1,
          autoplay: false,
          pagination: false,
          arrows: true,
        }}
        aria-label="Lecture Slides"
      >
        {slides.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Слайд ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

      <div
        className="text__container"
        dangerouslySetInnerHTML={{ __html: lectureText }}
      ></div>

      <Quiz />
    </StyleLecture_9>
  );
};
