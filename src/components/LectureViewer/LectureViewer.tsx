import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SplideCore from "@splidejs/splide";
import { useLoadSlides } from "../../hooks/useLoadSlides";
import { StyleLectureViewer } from "./LectureViewer.style";
import { HeaderForPages } from "../Header/HeaderForPages/HeaderForPages";
import { useLocation } from "react-router-dom";

interface LectureViewerProps {
  slidesPath: string;
  pdfPath: string;
}

export const LectureViewer = ({ slidesPath, pdfPath }: LectureViewerProps) => {
  const slides = useLoadSlides(slidesPath, "slide_", "webp");
  const splideRef = useRef<SplideCore | null>(null);
  const { pathname } = useLocation();
  const SCROLL_KEY = `scroll-position-${pathname}`;

  // Прокрутка
  useEffect(() => {
    const savedScroll = localStorage.getItem(SCROLL_KEY);
    if (savedScroll) {
      window.scrollTo({
        top: parseInt(savedScroll, 10),
        behavior: "auto",
      });
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem(SCROLL_KEY, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      localStorage.setItem(SCROLL_KEY, window.scrollY.toString());
    };
  }, [pathname]);

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
      <HeaderForPages />

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

      <div className="pdf-container">
        <embed
          src={pdfPath}
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>
    </StyleLectureViewer>
  );
};
