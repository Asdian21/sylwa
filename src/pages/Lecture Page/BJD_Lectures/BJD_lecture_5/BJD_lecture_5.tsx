import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SplideCore from "@splidejs/splide";
import { Quiz } from "../../../../components/Quiz/Quiz";
import { useLoadSlides } from "../../../../hooks/useLoadSlides";
import { StyleLectureViewer } from "../../../../components/LectureViewer/LectureViewer.style";

interface LectureViewerProps {
  slidesPath_1: string;
  slidesPath_2: string;
  pdfPath: string;
}

export const BJD_lecture_5 = ({
  slidesPath_1,
  slidesPath_2,
  pdfPath = "/BJD Lectures/Lectures/lecture_5-6.pdf",
}: LectureViewerProps) => {
  const slides_1 = useLoadSlides(slidesPath_1, "slide_", "webp");
  const slides_2 = useLoadSlides(slidesPath_2, "slide_", "webp");

  const splideRef1 = useRef<SplideCore | null>(null);
  const splideRef2 = useRef<SplideCore | null>(null);

  const [activeSlider, setActiveSlider] = useState<
    "slider1" | "slider2" | null
  >(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeSlider) return;

      const targetSlider =
        activeSlider === "slider1" ? splideRef1.current : splideRef2.current;

      if (e.key === "ArrowRight") {
        targetSlider?.go("+1");
      } else if (e.key === "ArrowLeft") {
        targetSlider?.go("-1");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlider]);

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
          splideRef1.current = splide;
        }}
        onMouseEnter={() => setActiveSlider("slider1")}
        onFocus={() => setActiveSlider("slider1")}
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
          splideRef2.current = splide;
        }}
        onMouseEnter={() => setActiveSlider("slider2")}
        onFocus={() => setActiveSlider("slider2")}
      >
        {slides_2.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Слайд ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

      <div className="pdf-container">
        <embed
          src={pdfPath}
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>

      <Quiz />
    </StyleLectureViewer>
  );
};
