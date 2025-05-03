import { StyleLecture_15 } from "./EnergeticLecture_15.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Quiz } from "../../../../components/Quiz/Quiz";
import { useLoadSlides } from "../../../../hooks/useLoadSlides";
import { useState, useEffect, useRef } from "react";
import mammoth from "mammoth";
import SplideCore from "@splidejs/splide";

export const Lecture_15 = () => {
  const slides = useLoadSlides("/lectures/lecture_15_slides");
  const [lectureText, setLectureText] = useState<string>("");

  useEffect(() => {
    const loadDocxFile = async () => {
      try {
        const response = await fetch("/word_lectures/lecture_15.docx");
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setLectureText(result.value); // Это будет HTML
      } catch (error) {
        console.error("Ошибка при загрузке .docx:", error);
      }
    };

    loadDocxFile();
  }, []);

  const splideRef = useRef<SplideCore | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!splideRef.current) return;

      if (e.key === "ArrowRight") {
        splideRef.current.go("+1");
      } else if (e.key === "ArrowLeft") {
        splideRef.current.go("-1");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <StyleLecture_15>
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
        onMounted={(splide: any) => {
          splideRef.current = splide;
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
    </StyleLecture_15>
  );
};
