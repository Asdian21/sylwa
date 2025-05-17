import { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import mammoth from "mammoth";
import SplideCore from "@splidejs/splide";
import { Quiz } from "../../../../components/Quiz/Quiz";
import { useLoadSlides } from "../../../../hooks/useLoadSlides";
import { StyleLectureViewer } from "../../../../components/LectureViewer/LectureViewer.style";

interface LectureViewerProps {
  slidesPath_1: string;
  slidesPath_2: string;
  docxPath: string;
}

export const BJD_lecture_5 = ({
  slidesPath_1,
  slidesPath_2,
  docxPath,
}: LectureViewerProps) => {
  const slides_1 = useLoadSlides(slidesPath_1, "slide_", "webp");
  const slides_2 = useLoadSlides(slidesPath_2, "slide_", "webp");
  const [lectureText, setLectureText] = useState<string>("");

  const splideRef = useRef<SplideCore | null>(null);

  useEffect(() => {
    const loadDocxFile = async () => {
      try {
        const response = await fetch(docxPath);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setLectureText(result.value);
      } catch (error) {
        console.error("Ошибка при загрузке .docx:", error);
      }
    };

    loadDocxFile();
  }, [docxPath]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!splideRef.current) return;
      if (e.key === "ArrowRight") splideRef.current.go("+1");
      else if (e.key === "ArrowLeft") splideRef.current.go("-1");
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <StyleLectureViewer>
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
      >
        {slides_1.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Слайд ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

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
      >
        {slides_2.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Слайд ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

      <div
        className="text__container"
        dangerouslySetInnerHTML={{ __html: lectureText }}
      />

      <Quiz />
    </StyleLectureViewer>
  );
};
