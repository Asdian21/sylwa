import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SplideCore from "@splidejs/splide";
import { useLoadSlides } from "../../hooks/useLoadSlides";
import { StyleLectureViewer } from "./LectureViewer.style";
import { renderAsync } from "docx-preview";

interface LectureViewerProps {
  slidesPath: string;
  docxPath: string;
}

export const LectureViewer = ({ slidesPath, docxPath }: LectureViewerProps) => {
  const slides = useLoadSlides(slidesPath, "slide_", "webp");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splideRef = useRef<SplideCore | null>(null);

  useEffect(() => {
    const loadDocxFile = async () => {
      try {
        const response = await fetch(docxPath);
        const arrayBuffer = await response.arrayBuffer();

        if (containerRef.current) {
          containerRef.current.innerHTML = ""; // очистка
          await renderAsync(arrayBuffer, containerRef.current, undefined, {
            inWrapper: true,
            className: "docx",
            ignoreWidth: false,
            ignoreHeight: false,
            ignoreFonts: false,
            breakPages: true,
            experimental: false,
            ignoreLastRenderedPageBreak: true,
          });
        }
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
        {slides.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Слайд ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

      <div className="text__container" ref={containerRef} />
    </StyleLectureViewer>
  );
};
