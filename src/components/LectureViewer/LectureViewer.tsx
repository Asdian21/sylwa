import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SplideCore from "@splidejs/splide";
import { useLoadSlides } from "../../hooks/useLoadSlides";
import {
  StyleLectureViewer,
  FullscreenSliderWrapper,
} from "./LectureViewer.style";
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

  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const button = document.querySelector("exit-fullscreen-btn");

  const enterFullscreen = () => {
    const container = sliderContainerRef.current;
    if (container) {
      container.classList.add("fullscreen-slider");
      setIsFullscreen(true);
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      }
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  if (!isFullscreen) {
    button?.classList.add("none");
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = Boolean(document.fullscreenElement);
      setIsFullscreen(isFs);
      if (!isFs) {
        sliderContainerRef.current?.classList.remove("fullscreen-slider");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (splideRef.current && slides.length > 0) {
      splideRef.current.refresh();
    }
  }, [slides]);

  return (
    <StyleLectureViewer>
      <HeaderForPages />

      <FullscreenSliderWrapper ref={sliderContainerRef} className="slider">
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
            <SplideSlide key={index} onClick={enterFullscreen}>
              <img src={src} alt={`Слайд ${index + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
        {isFullscreen && (
          <button className="exit-fullscreen-btn" onClick={exitFullscreen}>
            ✕ Выйти
          </button>
        )}
      </FullscreenSliderWrapper>

      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        <button className="glow-on-hover">Открыть PDF лекции</button>
      </a>
    </StyleLectureViewer>
  );
};
